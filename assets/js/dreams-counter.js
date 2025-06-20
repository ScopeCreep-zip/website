// Dreams Manifested counter with localStorage persistence
function initializeDreamsCounter() {
    const STORAGE_KEY = 'scopecreep_dreams_count';
    const INITIAL_COUNT = 812;
    
    // Get current count from localStorage or initialize it
    let dreamsCount = parseInt(localStorage.getItem(STORAGE_KEY)) || INITIAL_COUNT;
    
    // Increment count for this visit
    dreamsCount++;
    
    // Save updated count
    localStorage.setItem(STORAGE_KEY, dreamsCount);
    
    // Update the stat element
    const dreamsElement = document.querySelector('.dreams-counter');
    if (dreamsElement) {
        dreamsElement.setAttribute('data-target', dreamsCount);
        
        // Trigger the animation
        const target = dreamsCount;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                dreamsElement.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                dreamsElement.textContent = Math.floor(target);
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
        
        observer.observe(dreamsElement);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeDreamsCounter();
});