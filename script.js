const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

const isdarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isdarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});