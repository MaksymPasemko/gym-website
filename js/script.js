const menu = document.querySelector(".menu");
const contactUsContainer = document.getElementById("contact-us-container");

function showSidebar(){
    menu.style.display = 'flex';
}

function hideSidebar(){
    menu.style.display = 'none';
}

function menuFlexSwitcher(e){
    menu.style.display = e.matches ? 'flex' : 'none';

}

const mediaQuery = window.matchMedia('(min-width: 768px)');
menuFlexSwitcher(mediaQuery);
mediaQuery.addEventListener('change',menuFlexSwitcher);

function showContactUs(){
    contactUsContainer.style.display = 'flex';
    menu.style.display = 'none';
}

function hideContactUs(){
    contactUsContainer.style.display = 'none';
    menu.style.display = 'flex';
}