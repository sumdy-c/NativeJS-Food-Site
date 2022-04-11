import {closeModalWindow, openModal} from './modal';
import {postData} from '../services/service';

function forms(formSel ,modalTimerID){
    const forms = document.querySelectorAll(formSel);
    const mes = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        fail: 'Что-то пошло не так...'
    };
 
    forms.forEach(item => {
        postForm(item);
    });
 
    
 
    function postForm(form){
        form.addEventListener('submit', (event) => {
        event.preventDefault();
        const statusMes = document.createElement('img');
        statusMes.src = mes.loading;
        statusMes.style.cssText = `
        display: block;
        margin: 0 auto;
        `;
        form.insertAdjacentElement('afterend', statusMes);
        let formData = new FormData(form); 
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
             
    //const jsn = JSON.stringify(imitalJSON);
                 postData('http://localhost:3000/requests', json
                 ).then(data => {
                 console.log(data);
                 showInfoForm(mes.success);
                 form.reset();
                 statusMes.remove();
              }).catch(() => {
                 showInfoForm(mes.fail);
              }).finally(() =>{
                  form.reset();
              });
        });
    }
 
    function showInfoForm(message){
     const prevModalDialog = document.querySelector(".modal__dialog");
     prevModalDialog.classList.add('hide');
     openModal('.modal', modalTimerID);
     const thxModal = document.createElement('div');
     thxModal.classList.add('.modal__dialog');
     thxModal.innerHTML = `
         <div class = "modal__content">
         <div class="modal__close">×</div>
         <div class="modal__title">${message}</div>
         </div>
     `;
     document.querySelector('.modal').append(thxModal);
     setTimeout(() =>{
        thxModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        closeModalWindow('.modal');
     }, 2000);
    }

}


export default forms;