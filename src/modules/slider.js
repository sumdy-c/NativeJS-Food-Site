function slider({container , slide, nextAr, prevAr, totalCount, currentCount, wrapper, field}){
    
    const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
    prev = document.querySelector(prevAr),
    next = document.querySelector(nextAr),
    total = document.querySelector(totalCount),
    current = document.querySelector(currentCount),
    slideWrapper = document.querySelector(wrapper),
    slidesField = document.querySelector(field),
    width = window.getComputedStyle(slideWrapper).width;            
    let indexSlide = 1;
    let offset = 0;
    if(slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${indexSlide}`;
    } else {
        total.textContent = slides.length;
        current.textContent = indexSlide;
    }
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slideWrapper.style.overflow = 'hidden';
    slides.forEach(slid => {
        slid.style.width = width;
    });

    slider.style.position = 'relative';
    const indicat = document.createElement('ol'),
    dots = [];
    
    indicat.classList.add('carouse-indicators');
    indicat.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
    `;
    slider.append(indicat);

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i+1);
        dot.style.cssText= `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `;
        if(i == 0){
            dot.style.opacity = 1;
        }
        indicat.append(dot);
        dots.push(dot);
    }
     
    function delNoNum(str){
        return +str.replace(/\D/g, '');
    }
  
    next.addEventListener('click', ()=>{
        if(offset == delNoNum(width) * (slides.length - 1)){
            offset = 0;
        } else {
            offset += delNoNum(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if(indexSlide == slides.length){
            indexSlide = 1;
        } else {
            indexSlide++;
        }
        
        if(slides.length < 10){
             current.textContent = `0${indexSlide}`;
        } else {
            current.textContent = indexSlide;
        }

        dots.forEach(dot =>{
            dot.style.opacity = '.5';
            dots[indexSlide - 1].style.opacity = 1;
        });
    });
    prev.addEventListener('click', ()=>{
        if(offset == 0){
            offset = delNoNum(width) * (slides.length - 1);
        } else {
            offset -= delNoNum(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        if(indexSlide == 1){
            indexSlide = slides.length;
        } else {
            indexSlide--;
        }
        if(slides.length < 10){
             current.textContent = `0${indexSlide}`;
        } else {
            current.textContent = indexSlide;
        }
        dots.forEach(dot =>{
            dot.style.opacity = '.5';
            dots[indexSlide - 1].style.opacity = 1;
        });
    });

    dots.forEach(dot =>{
        dot.addEventListener('click', (e) =>{
            const slideN = e.target.getAttribute('data-slide-to');

            indexSlide = slideN;

            offset = delNoNum(width) * (slideN - 1);  

            slidesField.style.transform = `translateX(-${offset}px)`;

            if(slides.length < 10){
             current.textContent = `0${indexSlide}`;
            } else {
               current.textContent = indexSlide;
            }
            dots.forEach(dot => dot.style.opacity = '.5');
            dots[indexSlide - 1].style.opacity = 1;
        });
    });

}

export default slider;

//old ver slider
//             showSlides(indexSlide);
//             if(slides.length < 10) {
//                total.textContent = `0${slides.length}`;
//             } else {
//                 total.textContent = slides.length;
//             }

//    function showSlides(n){
//        if(n > slides.length){
//         indexSlide = 1;
//        }
//        if(n < 1){
//         indexSlide = slides.length;
//        }
//         slides.forEach(i => i.style.display = 'none');
//         slides[indexSlide - 1].style.display = 'block';

//         if(slides.length < 10) {
//             current.textContent = `0${indexSlide}`;
//          } else {
//             current.textContent = indexSlide;
//          }
//     }
//         function modifySlides(n){
//             showSlides(indexSlide += n);
//         }
//         prev.addEventListener('click', () => {
//     modifySlides(-1);
//    });
//    next.addEventListener('click', () =>{
//     modifySlides(1);
//    });