const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Dark Mode Toggle logic
themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'light';
    body.setAttribute('data-theme', isDark ? '' : 'light');
    themeToggle.innerText = isDark ? '🌓' : '☀️';
});

// Simple Scroll Animation Reveal
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});
