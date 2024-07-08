"use strict"

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('nav-container');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('show');
});

// Contact - Send
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        confirmationMessage.style.display = 'block';
        form.reset();
    });
});
