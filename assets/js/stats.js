// Stats counter animation
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseFloat(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                // Handle decimal places for percentage
                if (target % 1 !== 0) {
                    stat.textContent = target.toFixed(1);
                } else {
                    stat.textContent = Math.floor(target);
                }
                // Add + sign for presentations stat
                if (stat.parentElement.querySelector('.stat-label').textContent === 'Presentations' && target === 50) {
                    stat.textContent = stat.textContent + '+';
                }
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    animateStats();
});