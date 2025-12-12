// Base buzzwords array
const baseBuzzwords = [
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

// Recent trending tech and business terms (2024-2025)
const trendingTerms = [
  'GenAI',
  'LLM Integration',
  'RAG Pipeline',
  'Vector Database',
  'AI Agents',
  'Prompt Engineering',
  'GPT-4',
  'Claude API',
  'Copilot',
  'AI Governance',
  'Responsible AI',
  'MLOps',
  'FinOps',
  'Platform as a Product',
  'Developer Experience',
  'API Economy',
  'Composable Architecture',
  'MACH Architecture',
  'Headless Commerce',
  'Web3',
  'DeFi',
  'NFT Utility',
  'Sustainability Tech',
  'Green Computing',
  'Carbon Footprint',
  'ESG Compliance',
  'Remote-First Culture',
  'Hybrid Work',
  'Digital Nomad',
  'Upskilling',
  'Reskilling',
  'Quiet Quitting',
  'AI Ethics',
  'Data Privacy',
  'GDPR Compliance',
  'Zero-Knowledge Proof',
  'Homomorphic Encryption',
  'Post-Quantum Cryptography',
  'Supply Chain Resilience',
  'Digital Twin',
  'Metaverse',
  'Spatial Computing',
  'AR/VR Enterprise',
  'Low-Code/No-Code',
  'Citizen Developer',
  'DataOps',
  'GitOps',
  'SRE Practices',
  'Chaos Engineering',
  'eBPF',
  'WebAssembly',
  'Rust Adoption',
  'TypeScript Everywhere',
  'Deno Runtime',
  'Bun.js',
  'AI Copilots',
  'Autonomous Systems',
  'Edge AI',
  'Federated Learning',
  'Synthetic Data',
  'Data Mesh',
  'Event Streaming',
  'Real-Time Analytics',
  'Hyperautomation',
  'Process Mining',
  'RPA Integration',
  'Conversational AI',
  'Voice Commerce',
  'Omnichannel Experience',
  'Customer 360',
  'RevOps',
  'Product-Led Growth',
  'Community-Led Growth',
  'Creator Economy',
  'Subscription Economy',
  'Usage-Based Pricing',
  'SaaS Consolidation',
  'Multi-Cloud Strategy',
  'Cloud Repatriation',
  'Sovereign Cloud',
  'Industry Cloud',
  'AI-First Development',
  'Shift-Left Security',
  'DevSecOps Maturity',
  'SBOM Management',
  'Software Supply Chain',
  'API Security',
  'Identity-First Security',
  'Passwordless Authentication',
  'Biometric Security',
  'Quantum-Safe Security',
  'Ransomware Resilience',
  'XDR Platform',
  'SASE Architecture',
  'SD-WAN Evolution',
  '5G Edge Computing',
  'Private 5G Networks',
  'Network as Code',
  'Intent-Based Networking',
  'AIOps',
  'Predictive Analytics',
  'Prescriptive Analytics',
  'Graph Analytics',
  'Knowledge Graphs',
  'Semantic Layer',
  'Data Fabric',
  'Data Lakehouse',
  'Modern Data Stack',
  'Reverse ETL',
  'Data Activation',
  'Customer Data Platform',
  'Composable CDP',
  'Privacy-Enhancing Tech',
  'Differential Privacy',
  'Confidential Computing',
  'Secure Enclaves',
  'Hardware Security',
  'Silicon Root of Trust',
  'Supply Chain Security',
  'SLSA Framework',
  'Policy as Code',
  'Compliance as Code',
  'FinTech Innovation',
  'Embedded Finance',
  'Banking as a Service',
  'Open Banking',
  'Digital Wallet',
  'CBDC Development',
  'Stablecoin Adoption',
  'RegTech Solutions',
  'InsurTech Platform',
  'HealthTech Integration',
  'Telemedicine Platform',
  'Digital Therapeutics',
  'Precision Medicine',
  'Genomic Data',
  'Wearable Tech',
  'Smart Cities',
  'Digital Government',
  'GovTech Solutions',
  'Civic Tech',
  'Public Cloud Innovation'
];

// Function to search/filter buzzwords based on keywords
function searchBuzzwords(keywords) {
  const searchTerms = keywords.toLowerCase().split(' ');
  const allTerms = [...baseBuzzwords, ...trendingTerms];
  
  return allTerms.filter(term => {
    const lowerTerm = term.toLowerCase();
    return searchTerms.some(keyword => lowerTerm.includes(keyword));
  });
}

// Function to get buzzwords by category
function getBuzzwordsByCategory(category) {
  const categories = {
    ai: ['AI', 'ML', 'LLM', 'GenAI', 'GPT', 'Claude', 'Learning', 'Intelligence', 'Neural', 'Copilot'],
    security: ['Security', 'Zero Trust', 'Cyber', 'Encryption', 'Auth', 'SBOM', 'XDR', 'SASE', 'Ransomware'],
    cloud: ['Cloud', 'Serverless', 'Edge', 'Multi-Cloud', 'SaaS', 'PaaS', 'IaaS', 'Kubernetes', 'Container'],
    data: ['Data', 'Analytics', 'Database', 'ETL', 'Lake', 'Mesh', 'Graph', 'Stream', 'Real-Time'],
    business: ['Growth', 'Economy', 'RevOps', 'FinOps', 'ESG', 'ROI', 'KPI', 'OKR', 'Strategy'],
    web3: ['Web3', 'Blockchain', 'DeFi', 'NFT', 'Crypto', 'Decentralized', 'Smart Contract', 'DAO'],
    devops: ['DevOps', 'CI/CD', 'GitOps', 'MLOps', 'DataOps', 'Platform', 'Pipeline', 'Automation'],
    emerging: ['Quantum', 'Metaverse', 'AR/VR', 'IoT', '5G', 'Edge', 'Spatial', 'Digital Twin']
  };
  
  const allTerms = [...baseBuzzwords, ...trendingTerms];
  
  if (categories[category]) {
    return allTerms.filter(term => 
      categories[category].some(keyword => 
        term.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }
  
  return allTerms;
}

// Function to get trending buzzwords (simulated - in production, this could fetch from an API)
function getTrendingBuzzwords() {
  // Simulate trending by randomly selecting from recent terms with higher weight
  const weights = {
    recent: 3,  // Recent terms appear 3x more often
    base: 1     // Base terms appear normally
  };
  
  const weightedTerms = [
    ...Array(weights.recent).fill(trendingTerms).flat(),
    ...Array(weights.base).fill(baseBuzzwords).flat()
  ];
  
  // Return 10 random trending terms
  const trending = [];
  const tempTerms = [...weightedTerms];
  
  for (let i = 0; i < Math.min(10, tempTerms.length); i++) {
    const index = Math.floor(Math.random() * tempTerms.length);
    trending.push(tempTerms[index]);
    tempTerms.splice(index, 1);
  }
  
  return [...new Set(trending)]; // Remove duplicates
}

// Combined buzzwords array for backward compatibility
const buzzwords = [...baseBuzzwords, ...trendingTerms];

// Function to get random buzzword
function getRandomBuzzword() {
  return buzzwords[Math.floor(Math.random() * buzzwords.length)];
}

// Export functions for use in other scripts
if (typeof window !== 'undefined') {
  window.buzzwordUtils = {
    searchBuzzwords,
    getBuzzwordsByCategory,
    getTrendingBuzzwords,
    getAllBuzzwords: () => buzzwords,
    getCategories: () => ['ai', 'security', 'cloud', 'data', 'business', 'web3', 'devops', 'emerging']
  };
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
          text-shadow: -2px 0 var(--gold-light), 2px 0 var(--gold-dark);
        }
        40% {
          text-shadow: 2px 0 var(--gold-primary), -2px 0 var(--gold-light);
        }
        60% {
          text-shadow: 0 0 8px var(--gold-primary);
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