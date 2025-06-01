// Mobile Navigation Toggle
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
// });

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open using the new class
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('open')) {
                navLinks.classList.remove('open');
            }
        }
    });
});

// Responsive Navigation
// window.addEventListener('resize', () => {
//     if (window.innerWidth > 768) {
//         navLinks.style.display = 'flex';
//     } else {
//         navLinks.style.display = 'none';
//     }
// });

document.querySelector('.hamburger').onclick = function() {
    document.querySelector('.nav-links').classList.toggle('open');
};

// Add dropdown toggle functionality for Project Teams
document.querySelectorAll('.profdev-dropdown-item .dropdown-header').forEach(header => {
    header.addEventListener('click', () => {
        // Optional: Close other open dropdowns
        document.querySelectorAll('.profdev-dropdown-item.active').forEach(item => {
            if (item !== header.parentElement) {
                item.classList.remove('active');
            }
        });

        // Toggle active class on the parent item
        header.parentElement.classList.toggle('active');
    });
});