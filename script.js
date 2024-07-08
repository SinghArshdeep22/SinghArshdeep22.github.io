"use strict"

const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('nav-container');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});
