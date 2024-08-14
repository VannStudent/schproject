// Variables
let isScrolling = false;
let currentSection = 1;

// Function to handle animations and scrolling
function handleAnimation() {
    let touchElement = document.getElementById('sentuh');
    if (touchElement) {
        touchElement.style.marginTop = "100px";
        touchElement.style.transform = "scale(2)";
    }

    setTimeout(() => {
        if (!isScrolling) {
            window.scrollBy({ top: scrollHeight, behavior: 'smooth' });
            isScrolling = true;
            currentSection++;

            if (currentSection === 3) {
                isScrolling = false;
                setTimeout(startTextAnimation, 800);
                setTimeout(() => {
                    let stickerSection2 = document.getElementById('stikersec2');
                    if (stickerSection2) {
                        stickerSection2.style.transform = "scale(1)";
                        stickerSection2.style.transition = "all .7s ease";
                    }
                }, 500);
            }

            if (currentSection === 4) {
                setTimeout(startTextAnimation, 700);
            }
        }
    }, 100);
}

// Scroll down function
function scrollDown(distance = 50) {
    window.scrollBy({ top: distance, behavior: 'smooth' });
}

// Image slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(index) {
    let slides = document.getElementsByClassName("slide");

    if (index > slides.length) { 
        slideIndex = 1;
    }    
    if (index < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = "block";  
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Automatic slideshow
setInterval(nextSlide, 5000); // Change image every 5 seconds