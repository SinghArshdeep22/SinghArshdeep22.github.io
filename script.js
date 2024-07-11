"use strict"

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('nav-container');

hamburger.addEventListener('click', function() {
    navContainer.classList.toggle('show');
});

// ARROW
const arrowImage = document.getElementById('arrow-image');

arrowImage.addEventListener('mouseover', function () {
    this.src = 'imgs/arrowDownB.svg';
});

arrowImage.addEventListener('mouseout', function () {
    this.src = 'imgs/arrowDownW.svg';
});

// CONTACT - SEND
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        confirmationMessage.style.display = 'block';
        form.reset();
    });
});