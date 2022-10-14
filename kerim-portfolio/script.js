// select hamburger
const hamburger = document.querySelector('.hamburger');

// select nav-menu
const navMenu = document.querySelector('.nav-menu');

// add event listener
hamburger.addEventListener('click', mobileMenu);

// navmenu function
// toggle active
function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
