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
    menu.style.display = e.matches ? 'flex' : 'none';

}

const mediaQuery = window.matchMedia('(min-width: 768px)');
menuFlexSwitcher(mediaQuery);
mediaQuery.addEventListener('change',menuFlexSwitcher);

function showContactUs(){
    const contactUsContainer = document.getElementById("contact-us-container");
    contactUsContainer.style.display = 'flex';
}

function hideContactUs(){
    const contactUsContainer = document.getElementById("contact-us-container");
    contactUsContainer.style.display = 'none';
}