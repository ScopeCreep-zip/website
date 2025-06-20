// Kawaii interactive effects for ScopeCreep.zip

document.addEventListener('DOMContentLoaded', function() {
  // Cursor trail with hearts
  let mouseX = 0;
  let mouseY = 0;
  let lastHeartTime = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const currentTime = Date.now();
    if (currentTime - lastHeartTime > 100) { // Limit heart creation
      createHeartTrail(mouseX, mouseY);
      lastHeartTime = currentTime;
    }
  });
  
  function createHeartTrail(x, y) {
    const heart = document.createElement('div');
    heart.className = 'cursor-heart';
    heart.innerHTML = ['💕', '💖', '💗', '💝', '✨'][Math.floor(Math.random() * 5)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1000);
  }
  
  // Add sparkles to buttons on hover
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
      const sparkle = document.createElement('span');
      sparkle.className = 'btn-sparkle';
      this.appendChild(sparkle);
    });
    
    button.addEventListener('mouseleave', function() {
      const sparkle = this.querySelector('.btn-sparkle');
      if (sparkle) {
        setTimeout(() => sparkle.remove(), 300);
      }
    });
  });
  
  // Emoji rain effect
  function createEmojiRain() {
    const emojis = ['🌸', '💕', '⭐', '🌈', '✨', '🦄', '🌙', '💫'];
    const emoji = document.createElement('div');
    emoji.className = 'emoji-rain';
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.animationDuration = (Math.random() * 3 + 2) + 's';
    emoji.style.opacity = Math.random() * 0.7 + 0.3;
    document.body.appendChild(emoji);
    
    setTimeout(() => emoji.remove(), 5000);
  }
  
  // Start emoji rain
  setInterval(createEmojiRain, 2000);
  
  // Add interactive hover effects to images
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    img.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });
  
  // Kawaii text animation
  document.querySelectorAll('.hero-tagline, .hero-description').forEach(element => {
    element.classList.add('sparkles');
  });
  
  // Add floating animation to certain elements
  document.querySelectorAll('.pixel-card, .host-card').forEach(card => {
    card.style.animation = 'float 3s ease-in-out infinite';
    card.style.animationDelay = Math.random() * 2 + 's';
  });
});

// CSS for cursor hearts
const style = document.createElement('style');
style.textContent = `
  .cursor-heart {
    position: fixed;
    pointer-events: none;
    font-size: 20px;
    animation: heartFloat 1s ease-out forwards;
    z-index: 9999;
  }
  
  img {
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(style);