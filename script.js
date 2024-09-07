document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference in local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        document.querySelectorAll('header, section, footer').forEach(function(element) {
            element.classList.add('dark');
        });
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', function() {
        body.classList.toggle('dark');
        var isDark = body.classList.contains('dark');
        
        this.textContent = isDark ?  '☀️' : '🌙';

        document.querySelectorAll('header, section, footer').forEach(function(element) {
            element.classList.toggle('dark');
        });

        // Save the theme preference to local storage
        if (isDark) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    });

    // Initialize button text based on the current theme
    themeToggleBtn.textContent = body.classList.contains('dark') ?  '☀️' : '🌙';
});
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
const themeToggle = document.getElementById('theme-toggle');

// Toggle the mobile menu
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});
