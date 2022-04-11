import {getResource} from '../services/service';

function MenuCard(){

    class CardsMenu {
        constructor(src, alt, title, descr, price, parrentSel, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parrent = document.querySelector(parrentSel); 
            this.transfer = 27;
            this.changeVal();
       }
       changeVal() {
          this.price = this.price * this.transfer;
        } 

       render() {
        const elem = document.createElement('div');
        if(this.classes.length === 0){
            this.elem = 'menu__item';
            elem.classList.add(this.elem);
        } else {
            this.classes.forEach(className => elem.classList.add(className));
        }
            elem.innerHTML = `
                        <img src="${this.src}" alt="${this.alt}">
                        <h3 class="menu__item-subtitle">${this.title}</h3>
                        <div class="menu__item-descr">${this.descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                            <div class="menu__item-cost">Цена:</div>
                            <div class="menu__item-total"><span>${this.price}</span> USD/день</div>
                        </div>
                     `;
                    this.parrent.append(elem);
            }
    }


       getResource('http://localhost:3000/menu'
       ).then(data => {
           data.forEach(({img, altimg, title, descr, price}) => {
                new CardsMenu(img, altimg, title, descr, price, '.menu .container').render();
           });
       });


}

export default MenuCard;