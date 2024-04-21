// Nav dropdown highlight
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a'); // Select all navigation links

    // Function to highlight the active link based on the current page
    function highlightActiveLink() {
        const currentPage = document.body.classList; // Get the classes of the body tag
        navLinks.forEach(link => {
            if (currentPage.contains(link.dataset.page)) {
                link.classList.add('active'); // Add 'active' class to the link if its dataset matches the current page class
            } else {
                link.classList.remove('active'); // Remove 'active' class from other links
            }
        });
    }

    // Highlight the active link upon page load
    highlightActiveLink();
});

// Add event listener to toggle dark mode
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mode-switch-toggle').addEventListener('change', function() {
        if (this.checked) {
        enableDarkMode(); // Enable dark mode
        } else {
        disableDarkMode(); // Disable dark mode
        }
    });
});
  
  // Function to enable dark mode
  function enableDarkMode() {
    document.body.classList.add('dark-mode'); // Add dark-mode class to the body
  }
  
  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove('dark-mode'); // Remove dark-mode class from the body
  }  

// Makes gallery functional
let slideIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
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

    // Add event listeners for the slideshow navigation buttons
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);

    // Call the function to initialize the slideshow
    showSlides();
});

// Smooth scrolling behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});