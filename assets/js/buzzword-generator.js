// Corporate and tech buzzwords array
const buzzwords = [
  'Synergy',
  'Disruption',
  'Innovation',
  'Blockchain',
  'AI-Driven Solutions',
  'Cloud-Native Architecture',
  'Digital Transformation',
  'Agile Methodology',
  'Machine Learning',
  'DevOps Excellence',
  'Quantum Computing',
  'Edge Computing',
  'Microservices',
  'Containerization',
  'Scalability',
  'Big Data Analytics',
  'IoT Integration',
  'Cybersecurity Resilience',
  'Platform Engineering',
  'Zero Trust Security',
  'API-First Design',
  'Data-Driven Insights',
  'Automation',
  'CI/CD Pipeline',
  'Infrastructure as Code',
  'Observability',
  'Service Mesh',
  'Kubernetes Orchestration',
  'Serverless Computing',
  'Event-Driven Architecture'
];

// Function to get random buzzword
function getRandomBuzzword() {
  return buzzwords[Math.floor(Math.random() * buzzwords.length)];
}

// Check if already initialized
if (!window.buzzwordGeneratorInitialized) {
  window.buzzwordGeneratorInitialized = true;
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBuzzwordGenerator);
  } else {
    initBuzzwordGenerator();
  }
}

function initBuzzwordGenerator() {
  const taglineElement = document.querySelector('.tagline');
  if (!taglineElement || taglineElement.dataset.initialized) return;
  
  // Mark as initialized
  taglineElement.dataset.initialized = 'true';
  
  // Create a single buzzword span
  const buzzwordSpan = document.createElement('span');
  buzzwordSpan.className = 'buzzword-text';
  buzzwordSpan.textContent = getRandomBuzzword();
  
  // Replace content
  taglineElement.textContent = 'Concepts of ';
  taglineElement.appendChild(buzzwordSpan);
  
  // Add glitch styles if not already present
  if (!document.getElementById('buzzword-styles')) {
    const style = document.createElement('style');
    style.id = 'buzzword-styles';
    style.textContent = `
      @keyframes glitch {
        0%, 100% { 
          text-shadow: 0 0 0 transparent; 
        }
        20% { 
          text-shadow: -2px 0 var(--kawaii-cyan), 2px 0 var(--kawaii-pink); 
        }
        40% { 
          text-shadow: 2px 0 var(--kawaii-purple), -2px 0 var(--kawaii-cyan); 
        }
        60% { 
          text-shadow: 0 0 8px var(--kawaii-pink); 
        }
      }
      
      .buzzword-text {
        display: inline-block;
        transition: opacity 0.1s;
      }
      
      .buzzword-text.glitching {
        animation: glitch 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Update function
  function changeBuzzword() {
    buzzwordSpan.classList.add('glitching');
    
    setTimeout(() => {
      buzzwordSpan.textContent = getRandomBuzzword();
      buzzwordSpan.classList.remove('glitching');
    }, 150);
  }
  
  // Change every 3 seconds
  setInterval(changeBuzzword, 3000);
}