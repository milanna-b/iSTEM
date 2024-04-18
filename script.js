// Disables Right-Click: Discourage users from saving images
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Highlights current page on nav
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav a');

    // Function to check if the link's href matches the current location
    function isCurrentPage(link) {
        return link.href === currentLocation;
    }

    // Highlight the active link or its parent dropdown item
    navLinks.forEach(link => {
        if (isCurrentPage(link) || link.parentElement.querySelector('.dropdown-menu a.active')) {
            link.classList.add('active');
            if (link.parentElement.classList.contains('dropdown')) {
                link.parentElement.querySelector('a').classList.add('active');
            }
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