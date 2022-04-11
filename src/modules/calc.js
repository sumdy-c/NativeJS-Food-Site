function calc(){

    const result = document.querySelector('.calculating__result span');
    let sex,
    ratio;
    if (localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
    }
  
      if (localStorage.getItem('ratio')){
          ratio = localStorage.getItem('ratio');
      } else {
          ratio = 1.375;
          localStorage.setItem('ratio', 1.375);
      }
     
     let height,
      weight,
      age;
  
      function initLocStorCalc(sel, activClass){
          const elem = document.querySelectorAll(sel);
  
        elem.forEach(el =>{
            el.classList.remove(activClass);
            if(el.getAttribute('id') === localStorage.getItem('sex')){
                el.classList.add(activClass);
             }
             if(el.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                 el.classList.add(activClass);
             }
        });
      }
      initLocStorCalc('#gender div', "calculating__choose-item_active");
      initLocStorCalc('.calculating__choose_big div', "calculating__choose-item_active");
  
    function calcTot(){
          if(!sex || !height || !weight || !ratio || !age) return result.textContent = '____';
  
          if(sex === 'female'){
              result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - 4.3 * age) * ratio);        
          } else {  
              result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - 5.7 * age) * ratio);        
          }
      }
  
      calcTot();
  
      function getStatInfo(selector, activeClass){
          const elem = document.querySelectorAll(selector);
  
          elem.forEach(el =>{
              el.addEventListener('click', (e)=>{
                  if(e.target.getAttribute('data-ratio')){
                      ratio = +e.target.getAttribute('data-ratio');
                      localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                  } else {
                      sex = e.target.getAttribute('id');
                      localStorage.setItem('sex', e.target.getAttribute('id'));
                  }
                  console.log(ratio, sex);
      
                  elem.forEach(elem => {
                      elem.classList.remove(activeClass);
                  });
                  e.target.classList.add(activeClass);
                  calcTot();
              });
          });
  
      }
      getStatInfo('#gender div', "calculating__choose-item_active");
      getStatInfo('.calculating__choose_big div', "calculating__choose-item_active");
      
      function dyncInfo(selector){
          const input = document.querySelector(selector);
  
          input.addEventListener('input', () => {
              if(input.value.match(/\D/g)){
                  input.style.background = "#FF0000";
              } else {
                  input.style.background = 'none';
              }
              switch(input.getAttribute('id')){
                  case 'height':
                      height =+ input.value;
                      break;
                  case 'weight':
                      weight =+ input.value;
                      break;
                  case 'age':
                      age =+ input.value;
                      break;
              }
              calcTot();
          });
      }
      dyncInfo("#height");
      dyncInfo("#weight");
      dyncInfo("#age");
      
}
export default  calc;