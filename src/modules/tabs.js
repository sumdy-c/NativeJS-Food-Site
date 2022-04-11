function tab(tabsSelecto, tabsContentSel, tabParent, activClass){
    
    //tabs
    const tabs = document.querySelectorAll(tabsSelecto),
        tabsContent = document.querySelectorAll(tabsContentSel),
        tabsParrent = document.querySelector(tabParent);

    function hideTabContent(){
        tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', "fade");
        });
        tabs.forEach(item => {
            item.classList.remove(activClass);
        });
    }
    // i = 0 это ES6 синт. сахар.
    function showtabContent (i = 0){
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add(activClass);
    }

    hideTabContent();
    showtabContent();
    
    tabsParrent.addEventListener('click', (e) => {
        const target = e.target;
        if(target && e.target.classList.contains(tabsSelecto.slice(1))){
            tabs.forEach((item, i) =>{ if (target == item){
                hideTabContent();
                showtabContent(i);
            }  
        });
        }
    });
    
}

export default tab;