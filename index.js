// script.js
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-bar ul');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});