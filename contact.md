---
layout: page
title: Contact
permalink: /contact/
---

# Contact Us

## Get in Touch

<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="subject">Subject</label>
    <select id="subject" name="subject" required>
      <option value="">Select a topic</option>
      <option value="podcast-guest">Be a Podcast Guest</option>
      <option value="collaboration">Collaboration Idea</option>
      <option value="speaking">Speaking Inquiry</option>
      <option value="media">Media Request</option>
      <option value="general">General Question</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5" required></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>

## Our Team

<div class="team-contacts">
  <div class="team-member">
    <h3>Kali Jackson</h3>
    <p class="role">Platform Security Architect</p>
    <ul class="contact-links">
      <li>📧 kali@scopecreep.com</li>
      <li>💼 <a href="https://linkedin.com/in/kalijackson" target="_blank">LinkedIn</a></li>
      <li>🐙 <a href="https://github.com/kalijackson" target="_blank">GitHub</a></li>
      <li>🦋 <a href="https://bsky.app/profile/kalijackson.bsky.social" target="_blank">Bluesky</a></li>
    </ul>
  </div>
  
  <div class="team-member">
    <h3>Kat Morgan</h3>
    <p class="role">Security Engineering Lead</p>
    <ul class="contact-links">
      <li>📧 kat@scopecreep.com</li>
      <li>💼 <a href="https://linkedin.com/in/katmorgan" target="_blank">LinkedIn</a></li>
      <li>🐙 <a href="https://github.com/katmorgan" target="_blank">GitHub</a></li>
      <li>🦋 <a href="https://bsky.app/profile/katmorgan.bsky.social" target="_blank">Bluesky</a></li>
    </ul>
  </div>
</div>

## Follow ScopeCreep

<div class="social-links">
  <a href="https://github.com/scopecreep" target="_blank" class="social-link">
    <i class="fab fa-github"></i> GitHub
  </a>
  <a href="https://linkedin.com/company/scopecreep" target="_blank" class="social-link">
    <i class="fab fa-linkedin"></i> LinkedIn
  </a>
  <a href="https://bsky.app/profile/scopecreep.bsky.social" target="_blank" class="social-link">
    <i class="fas fa-cloud"></i> Bluesky
  </a>
  <a href="https://twitter.com/scopecreep" target="_blank" class="social-link">
    <i class="fab fa-twitter"></i> Twitter
  </a>
  <a href="https://youtube.com/@scopecreep" target="_blank" class="social-link">
    <i class="fab fa-youtube"></i> YouTube
  </a>
</div>

<style>
.contact-form {
  max-width: 600px;
  margin: 2rem 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--color-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--color-secondary);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
}

.btn-primary {
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

.team-contacts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.team-member {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.team-member h3 {
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

.team-member .role {
  color: var(--color-text-secondary);
  font-style: italic;
  margin-bottom: 1rem;
}

.contact-links {
  list-style: none;
  padding: 0;
}

.contact-links li {
  margin-bottom: 0.5rem;
}

.contact-links a {
  color: var(--color-accent);
  text-decoration: none;
}

.contact-links a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-secondary);
  color: var(--color-primary);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}
</style>