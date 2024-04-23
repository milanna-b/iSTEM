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

// Function to enable dark mode
function enableDarkMode() {
    // Add dark-mode class to the body
    document.body.classList.add('dark-mode');

    // Add dark-mode class to other necessary elements
    document.querySelectorAll('.nav, h1, h2, footer, .footer-bottom, .istemp-info-button, .form-container, .form-button').forEach(function(element) {
        element.classList.add('dark-mode');
    });

    // Store dark mode preference in local storage
    localStorage.setItem('darkModeEnabled', 'true');
}

// Function to disable dark mode
function disableDarkMode() {
    // Remove dark-mode class from the body
    document.body.classList.remove('dark-mode');

    // Remove dark-mode class from other necessary elements
    document.querySelectorAll('.nav, h1, h2, .mode-switch, .mode-switch-label, footer, .footer-bottom, .istemp-info-button, .form-container, .form-button').forEach(function(element) {
        element.classList.remove('dark-mode');
    });

    // Store dark mode preference in local storage
    localStorage.setItem('darkModeEnabled', 'false');
}

// Check local storage for dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const darkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (darkModeEnabled === 'true') {
        enableDarkMode();
        document.getElementById('mode-switch-toggle').checked = true; // Set toggle switch to checked state
    }
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

// Quiz Behavior
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve user selections
        const answers = {
            q1: document.querySelector('input[name="q1"]:checked').value,
            q2: document.querySelector('input[name="q2"]:checked').value,
            q3: document.querySelector('input[name="q3"]:checked').value,
            q4: document.querySelector('input[name="q4"]:checked').value,
            q5: document.querySelector('input[name="q5"]:checked').value
        };

        // Calculate result based on user selections
        const results = {
            A: 'Web Application Development & Programming',
            B: 'Biotechnology',
            C: 'Computer Systems & Information Technology',
            D: 'Cybersecurity',
            E: 'Digital Design',
            F: 'Game & Simulation',
            G: 'Engineering'
        };

        const scores = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0
        };

        for (let question in answers) {
            scores[answers[question]]++;
        }

        // Find the iSTEM strand with the highest score
        let maxScore = 0;
        let iSTEMStrand = '';
        for (let strand in scores) {
            if (scores[strand] > maxScore) {
                maxScore = scores[strand];
                iSTEMStrand = results[strand];
            }
        }

        // Display the result
        document.getElementById('result').innerHTML = `<h2>Your iSTEM Strand: ${iSTEMStrand}</h2>`;
    });
});
