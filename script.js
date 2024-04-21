// Disables Right-Click: Discourage users from saving images
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Nav dropdown highlight
document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.dropdown-menu li');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all dropdown items
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
            // Add active class to the clicked dropdown item
            this.classList.add('active');
        });
    });

    // Add 'active' class to the Home link when the page loads
    const homeLink = document.querySelector('nav ul li:first-child a');
    homeLink.classList.add('active');
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