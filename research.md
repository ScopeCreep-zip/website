---
layout: page
title: 
permalink: /research/
---

<h1 class="page-section-title">Technical Blogs ✨</h1>

<div class="blog-grid">
  <div class="blog-member">
    <h2>Kali Jackson</h2>
    <p class="blog-url">
      <a href="https://radicalkjax.com" target="_blank">radicalkjax.com</a>
    </p>
    
    <h3>Topics Covered</h3>
    <ul class="topic-list">
      <li>Malware Analysis</li>
      <li>Deep Learning</li>
      <li>Security Research</li>
      <li>Technical Tutorials</li>
    </ul>
    
    <div class="blog-links">
      <a href="https://radicalkjax.com" target="_blank" class="blog-link">
        <i class="fas fa-blog"></i> Blog
      </a>
      <a href="https://github.com/radicalkjax" target="_blank" class="blog-link">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://bsky.app/profile/radicalkjax.com" target="_blank" class="blog-link">
        <i class="fas fa-cloud"></i> Bluesky
      </a>
    </div>
  </div>
  
  <div class="blog-member">
    <h2>Kat Morgan</h2>
    <p class="blog-url">
      <a href="https://blog.usrbinkat.io/en/" target="_blank">blog.usrbinkat.io</a>
    </p>
    
    <h3>Recent Posts</h3>
    <ul class="topic-list">
      <li>Golang installation and management in 2025</li>
      <li>Kubernetes VMware Replacement</li>
      <li>Windows 11, WSL2, Ubuntu, Developer Tools</li>
    </ul>
    
    <div class="blog-links">
      <a href="https://blog.usrbinkat.io/en/page/about/" target="_blank" class="blog-link">
        <i class="fas fa-blog"></i> Blog
      </a>
      <a href="https://github.com/usrbinkat" target="_blank" class="blog-link">
        <i class="fab fa-github"></i> GitHub
      </a>
      <a href="https://bsky.app/profile/usrbinkat.io" target="_blank" class="blog-link">
        <i class="fas fa-cloud"></i> Bluesky
      </a>
    </div>
  </div>
</div>

## Find ScopeCreep Online

<div class="scopecreep-links">
  <a href="https://github.com/ScopeCreep-zip" target="_blank" class="social-link">
    <i class="fab fa-github"></i> ScopeCreep GitHub
  </a>
</div>

<style>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.blog-member {
  background: var(--white);
  border: 3px solid var(--kawaii-purple);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.blog-member:first-child {
  border-color: var(--kawaii-pink);
}

.blog-member:last-child {
  border-color: var(--kawaii-cyan);
}

.blog-member::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(157, 78, 221, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.blog-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
}

.blog-member h2 {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.blog-url {
  margin-bottom: 2rem;
}

.blog-url a {
  color: var(--kawaii-purple);
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.blog-url a:hover {
  color: var(--kawaii-pink);
  text-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
}

.blog-member h3 {
  color: var(--text-purple);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.topic-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.topic-list li {
  margin-bottom: 0.75rem;
  padding-left: 2rem;
  position: relative;
  font-weight: 500;
  color: var(--text-dark);
}

.topic-list li:before {
  content: "💖";
  position: absolute;
  left: 0;
  font-size: 1rem;
}

.blog-links {
  display: flex;
  gap: 1rem;
}

.blog-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--white);
  border: 2px solid var(--kawaii-purple);
  color: var(--text-dark);
  padding: 0.75rem 1.25rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(157, 78, 221, 0.2);
}

.blog-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan));
  transition: left 0.3s ease;
  z-index: -1;
}

.blog-link:hover::before {
  left: 0;
}

.blog-link:hover {
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(157, 78, 221, 0.4);
}

.scopecreep-links {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--white);
  border: 2px solid var(--kawaii-purple);
  color: var(--text-dark);
  padding: 0.875rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(157, 78, 221, 0.2);
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan));
  transition: left 0.3s ease;
  z-index: -1;
}

.social-link:hover::before {
  left: 0;
}

.social-link:hover {
  color: var(--white);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(157, 78, 221, 0.4);
}

.page-section-title {
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple), var(--kawaii-cyan));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(255, 105, 180, 0.6);
  filter: drop-shadow(0 0 20px rgba(157, 78, 221, 0.4));
  word-wrap: break-word;
  overflow-wrap: break-word;
}

@media (max-width: 768px) {
  .page-section-title {
    font-size: 1.75rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    margin: 2rem auto;
    max-width: 100%;
  }

  .blog-member {
    padding: 1.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }

  .blog-links {
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
  }

  .blog-link {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .social-link {
    width: 100%;
    max-width: 300px;
    justify-content: center;
    text-align: center;
  }

  .scopecreep-links {
    padding: 0 1rem;
  }
}
</style>
