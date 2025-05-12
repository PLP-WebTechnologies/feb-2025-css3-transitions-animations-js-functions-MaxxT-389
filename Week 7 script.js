document.addEventListener('DOMContentLoaded', () => {
    // --- Local Storage for Theme Preference ---
    const themeSelector = document.getElementById('themeSelector');
    const themeDisplay = document.getElementById('themeDisplay');
    const body = document.body;
    const storedTheme = localStorage.getItem('userTheme');

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeDisplay.textContent = 'Current Theme: Dark';
        } else {
            body.classList.remove('dark-theme');
            themeDisplay.textContent = 'Current Theme: Light';
        }
        localStorage.setItem('userTheme', theme);
    }

    // Apply stored theme on load
    if (storedTheme) {
        setTheme(storedTheme);
        themeSelector.value = storedTheme;
    }

    // Listen for theme changes
    themeSelector.addEventListener('change', (event) => {
        setTheme(event.target.value);
    });

    // --- Animation Triggered by User Action ---
    const animatedImage = document.getElementById('animatedImage');
    const triggerAnimationButton = document.getElementById('triggerAnimationButton');

    triggerAnimationButton.addEventListener('click', () => {
        animatedImage.classList.add('animate');

        // Remove the animation class after it runs once (optional, for one-time trigger)
        setTimeout(() => {
            animatedImage.classList.remove('animate');
        }, 1000); // Duration of the animation
    });
});
