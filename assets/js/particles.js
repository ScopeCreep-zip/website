// Enhanced Kawaii Particle System
function createKawaiiParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    // Ensure container has proper styling
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw';
    container.style.height = '100vh';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '5'; // Between body (1) and main (10)
    container.style.overflow = 'hidden';
    
    const particleTypes = [
        { symbol: '✦', class: 'star', count: 30 },
        { symbol: '♥', class: 'heart', count: 20 },
        { symbol: '✨', class: 'sparkle', count: 25 },
        { symbol: '{', class: 'code', count: 12 },
        { symbol: '}', class: 'code', count: 12 },
        { symbol: '<', class: 'code', count: 8 },
        { symbol: '>', class: 'code', count: 8 },
        { symbol: '💖', class: 'heart', count: 10 }
    ];
    
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    particleTypes.forEach(type => {
        for (let i = 0; i < type.count; i++) {
            const particle = document.createElement('div');
            particle.className = `particle ${type.class}`;
            particle.textContent = type.symbol;
            particle.setAttribute('aria-hidden', 'true');
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.setProperty('--delay', Math.random() * 8);
            
            // Add inline styles for debugging
            particle.style.position = 'fixed';
            particle.style.fontSize = type.class === 'star' ? '14px' : 
                                     type.class === 'heart' ? '12px' : 
                                     type.class === 'sparkle' ? '8px' : '10px';
            particle.style.color = type.class === 'star' ? '#ffd700' : 
                                   type.class === 'heart' ? '#ff69b4' : 
                                   type.class === 'sparkle' ? '#00e5ff' : '#9d4edd';
            particle.style.opacity = '0.7';
            particle.style.zIndex = '5'; // Same as container
            particle.style.display = 'block';
            particle.style.lineHeight = '1';
            particle.style.width = 'auto';
            particle.style.height = 'auto';
            particle.style.textShadow = type.class === 'star' ? '0 0 10px rgba(255, 215, 0, 0.6)' : 
                                       type.class === 'heart' ? '0 0 8px rgba(255, 105, 180, 0.5)' : 
                                       type.class === 'sparkle' ? '0 0 5px rgba(0, 229, 255, 0.5)' : 
                                       '0 0 5px rgba(157, 78, 221, 0.5)';
            // Enable kawaii float animation
            particle.style.animation = 'kawaiFloat 8s infinite ease-in-out';
            particle.style.animationDelay = `${Math.random() * 8}s`;
            
            // Append directly to body to test
            document.body.appendChild(particle);
        }
    });
}

// Enhanced mouse interaction
function addMouseMagic() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }
    
    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.particle');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
            );
            
            if (distance < 120) {
                const scale = 1 + (120 - distance) / 120;
                particle.style.transform = `scale(${scale})`;
                particle.style.opacity = '1';
                particle.style.textShadow = '0 0 15px currentColor';
            } else {
                particle.style.transform = 'scale(1)';
                particle.style.opacity = '0.7';
                particle.style.textShadow = '0 0 8px currentColor';
            }
        });
    });
}

// Initialize particles when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createKawaiiParticles();
    addMouseMagic();
});