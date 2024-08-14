// Initialize typed text effect
var typed = new Typed(".typed-1", {
    strings: ["Rafael Orlando"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: false
});

// Initialize ScrollReveal
ScrollReveal().reveal('.reveal1', { delay: 2000 });
 const carousel = document.querySelector(".carousel"),
arrowIcons = document.querySelectorAll(".wrapper i");

ScrollReveal().reveal('.img1-style', { delay: 2500 });
ScrollReveal().reveal('.img3-style', { delay: 3000 });
ScrollReveal().reveal('.img2-style', { delay: 3500 });
ScrollReveal().reveal('.jovanhanderson', {delay: 4000});

document.addEventListener('DOMContentLoaded', () => {
    // Add 'page-transition' class to the body on page load
    document.body.classList.add('page-transition');
    
    // Add the 'fade-in' class after a short delay to trigger the animation
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 100); // Delay to ensure the transition starts after the page load
});