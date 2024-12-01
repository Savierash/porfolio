var typed = new Typed(".text", {
    strings:["Web Developer", "Sketcher" ,"Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// main.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const navbar = document.querySelector('.navbar');

    toggleBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

