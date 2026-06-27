const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

function setTheme(theme) {
    if (theme === 'light') {
        htmlElement.style.setProperty('--bg', '#f6f8ff');
        htmlElement.style.setProperty('--surface', 'rgba(255, 255, 255, 0.98)');
        htmlElement.style.setProperty('--surface-strong', 'rgba(243, 246, 255, 0.98)');
        htmlElement.style.setProperty('--text', '#071631');
        htmlElement.style.setProperty('--muted', '#5d6b92');
        htmlElement.style.setProperty('--accent', '#5c7dff');
        htmlElement.style.setProperty('--border', 'rgba(12, 24, 54, 0.08)');
        htmlElement.style.setProperty('--shadow', '0 24px 80px rgba(25, 50, 120, 0.12)');
        themeToggle.textContent = '☀️';
    } else {
        htmlElement.style.removeProperty('--bg');
        htmlElement.style.removeProperty('--surface');
        htmlElement.style.removeProperty('--surface-strong');
        htmlElement.style.removeProperty('--text');
        htmlElement.style.removeProperty('--muted');
        htmlElement.style.removeProperty('--accent');
        htmlElement.style.removeProperty('--border');
        htmlElement.style.removeProperty('--shadow');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem('preferred-theme', theme);
}

const preferredTheme = localStorage.getItem('preferred-theme');
if (preferredTheme) {
    setTheme(preferredTheme);
}

themeToggle.addEventListener('click', () => {
    const isLight = themeToggle.textContent === '☀️';
    setTheme(isLight ? 'dark' : 'light');
});

const revealElements = document.querySelectorAll('.hero, .section, .footer');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.18,
    }
);

revealElements.forEach((element) => observer.observe(element));
