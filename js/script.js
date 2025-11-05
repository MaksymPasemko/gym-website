function showSidebar(){
    const menu = document.querySelector(".menu");
    menu.style.display = 'flex';
}

function hideSidebar(){
    const menu = document.querySelector(".menu");
    menu.style.display = 'none';
}

function menuFlexSwitcher(e){
    const menu = document.querySelector(".menu")
    if(e.matches){
        menu.style.display = 'flex';
    }
    else{
        menu.style.display = 'none';
    }
   
}

const mediaQuery = window.matchMedia('(min-width: 768px)');
menuFlexSwitcher(mediaQuery);
mediaQuery.addEventListener('change',menuFlexSwitcher);