// Simple scroll animation for each section
window.addEventListener('scroll', () => {
    document.querySelectorAll('.glass').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});
