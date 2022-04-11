function openModal(modalSel, modalTimerID){
    const modal = document.querySelector(modalSel);
    modal.classList.add('show'),
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if(modalTimerID){
        clearInterval(modalTimerID);
    }
}

function closeModalWindow(modalSel){
    const modal = document.querySelector(modalSel);
    modal.classList.add('hide'),
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(trigSel, modalSel, modalTimerID){
    const modalTrigger = document.querySelectorAll(trigSel),
           modal = document.querySelector(modalSel);

           modalTrigger.forEach(btn =>  {
            btn.addEventListener('click', () => openModal(modalSel, modalTimerID));
        } );
        
     //Закрытие модального окна кликом на поле вокруг modal-dialog
    modal.addEventListener('click', (e) => { 
        if(e.target === modal || e.target.getAttribute('data-close') == ''){
            closeModalWindow(modalSel);
        }
    });
            
    document.addEventListener('keydown', (e)=>{
        if(e.code === 'Escape' && modal.classList.contains('show')) { 
            closeModalWindow(modalSel);
        }
    });
        

    function showModlByScroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal(modalSel, modalTimerID);
            window.removeEventListener("scroll", showModlByScroll);
        }
    }
    closeModalWindow(modalSel);
    window.addEventListener("scroll", showModlByScroll);

}

export default modal;
export {closeModalWindow, openModal};