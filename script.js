// Disables Right-Click: Discourage users from saving images
window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Nav dropdown highlight
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a'); // Select all navigation links

    // Function to highlight the active link based on the current page URL
    function highlightActiveLink() {
        const currentUrl = window.location.href; // Get the current URL
        navLinks.forEach(link => {
            if (link.href === currentUrl) {
                link.classList.add('active'); // Add 'active' class to the link if its href matches the current URL
            } else {
                link.classList.remove('active'); // Remove 'active' class from other links
            }
        });
    }

    // Highlight the active link upon page load
    highlightActiveLink();
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