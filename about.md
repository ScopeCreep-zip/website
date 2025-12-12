---
layout: default
title: The Witches
permalink: /about/
description: Meet the witches behind ScopeCreep.zip
---

<section class="hero">
    <div class="container">
        <div class="hero-ornament">✦ ✦ ✦</div>
        <h1 class="hero-title">The Witches</h1>
        <p class="hero-text">The minds weaving security and infrastructure magic at ScopeCreep.zip</p>
    </div>
</section>

<section class="about" id="about">
    <div class="container">
        <header class="section-header">
            <span class="section-label">Who We Are</span>
            <h2 class="section-title">Meet the Team</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="about-grid">
            {% for member in site.data.team %}
            {% assign github_username = member[1].social.github | split: "/" | last %}
            <article class="person-card">
                <div class="person-header">
                    <img src="https://github.com/{{ github_username }}.png" alt="{{ member[1].name }}" class="person-avatar">
                    <div class="person-info">
                        <h3 class="person-name">{{ member[1].name }}</h3>
                        <p class="person-title">{{ member[1].title }}</p>
                    </div>
                </div>
                <p class="person-bio">{{ member[1].bio }}</p>
                <div class="person-creds">
                    {% for credential in member[1].credentials %}
                    <span class="cred">{{ credential }}</span>
                    {% endfor %}
                </div>
                <div class="person-links">
                    {% if member[1].social.blog %}
                    <a href="{{ member[1].social.blog }}" class="person-link">Blog</a>
                    {% endif %}
                    {% if member[1].social.github %}
                    <a href="{{ member[1].social.github }}" class="person-link">GitHub</a>
                    {% endif %}
                    {% if member[1].social.bluesky %}
                    <a href="{{ member[1].social.bluesky }}" class="person-link">Bluesky</a>
                    {% endif %}
                </div>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<section class="craft">
    <div class="container">
        <header class="section-header">
            <span class="section-label">Our Expertise</span>
            <h2 class="section-title">What We Conjure</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="about-grid">
            {% for member in site.data.team %}
            <article class="craft-card">
                <h3>{{ member[1].name }}'s Craft</h3>
                <ul style="list-style: none; padding: 0;">
                    {% for skill in member[1].expertise %}
                    <li style="padding: 0.25rem 0; color: var(--text-secondary);">✦ {{ skill }}</li>
                    {% endfor %}
                </ul>
            </article>
            {% endfor %}
        </div>
    </div>
</section>

<section class="cta">
    <div class="container">
        <p class="cta-text">Want to work with us?</p>
        <a href="/contact" class="btn btn-primary">Summon Us</a>
    </div>
</section>
