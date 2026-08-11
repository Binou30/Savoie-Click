const burger = document.querySelector('.burger-savoie-click');
const panneau = document.querySelector('.panneau-boxes');
const fond = document.querySelector('.fond-panneau');

function toggleMenu() {
    burger.classList.toggle('ouvert');
    panneau.classList.toggle('ouvert');
    fond.classList.toggle('ouvert');
}

burger.addEventListener('click', toggleMenu);
fond.addEventListener('click', toggleMenu);