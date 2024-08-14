var typed = new Typed(".typed-1", {
    strings: ["Angel Jussy"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: false
});
document.addEventListener('DOMContentLoaded', () => {
    // Add 'page-transition' class to the body on page load
    document.body.classList.add('page-transition');
    
    // Add the 'fade-in' class after a short delay to trigger the animation
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 100); // Delay to ensure the transition starts after the page load
});