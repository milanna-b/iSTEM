// Disables Right-Click: Discourage users from saving images
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Highlights current page on nav
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Makes gallery functional
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

showSlides();