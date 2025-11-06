---
layout: page
title: 
permalink: /contact/
---

<h1 class="page-section-title">Contact Us 📬</h1>

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
    <p class="role">Full-stack Engineer/Hacker</p>
    <div class="member-social-links">
      {% include social-links.html 
         source="team"
         team_member="kali"
         layout="horizontal"
         size="small"
      %}
    </div>
  </div>
  
  <div class="team-member">
    <h3>Kat Morgan</h3>
    <p class="role">Systems Engineer Lead</p>
    <div class="member-social-links">
      {% include social-links.html 
         source="team"
         team_member="kat"
         layout="horizontal"
         size="small"
      %}
    </div>
  </div>
</div>

## Follow ScopeCreep

{% include social-links.html 
   title=""
   source="company"
   layout="horizontal"
   size="medium"
%}

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
  background: var(--white);
  border: 3px solid var(--kawaii-purple);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.team-member:first-child {
  border-color: var(--kawaii-pink);
}

.team-member:last-child {
  border-color: var(--kawaii-cyan);
}

.team-member::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(157, 78, 221, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
}

.team-member h3 {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--kawaii-pink), var(--kawaii-purple));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.team-member .role {
  color: var(--text-purple);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.member-social-links {
  margin-top: 1.5rem;
}

.member-social-links .social-links__list {
  justify-content: flex-start;
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

  .team-contacts {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
    margin: 2rem auto;
    max-width: 100%;
  }

  .team-member {
    padding: 1.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
  }

  .contact-form {
    padding: 0 1rem;
    margin: 2rem auto;
  }
}
</style>

