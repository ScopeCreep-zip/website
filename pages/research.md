---
layout: default
title: Deep Magicks
description: Technical writings and research from the ScopeCreep team
permalink: /research/
---

<section class="hero">
    <div class="container">
        <div class="hero-ornament">✦ ✦ ✦</div>
        <h1 class="hero-title">Deep Magicks</h1>
        <p class="hero-text">Technical writings, research, and arcane knowledge from our personal grimoires</p>
    </div>
</section>

<section class="about">
    <div class="container">
        <header class="section-header">
            <span class="section-label">Our Writings</span>
            <h2 class="section-title">Personal Blogs</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="coven-carousel-container">
            <button class="carousel-nav carousel-nav--prev research-nav" aria-label="Previous">
                <span>‹</span>
            </button>

            <div class="coven-carousel research-carousel">
                <div class="coven-track">
                    {% for member in site.data.team %}
                    {% assign github_username = member[1].social.github | split: "/" | last %}
                    <div class="coven-slide">
                        <article class="person-card">
                            <div class="person-header">
                                {% if member[1].avatar %}
                                <img src="{{ member[1].avatar }}" alt="{{ member[1].name }}" class="person-avatar" style="object-position: center 15%;">
                                {% else %}
                                <img src="https://github.com/{{ github_username }}.png" alt="{{ member[1].name }}" class="person-avatar">
                                {% endif %}
                                <div class="person-name-group">
                                    <h3 class="person-name">{{ member[1].name }}</h3>
                                    <span class="person-pronouns">({{ member[1].pronouns }})</span>
                                </div>
                            </div>
                            <p class="person-title">{{ member[1].title }}</p>
                            <p class="person-bio">{{ member[1].bio }}</p>
                            <div class="person-creds">
                                {% for credential in member[1].credentials %}
                                <span class="cred">{{ credential }}</span>
                                {% endfor %}
                            </div>
                            <div class="person-links">
                                {% if member[1].social.blog %}
                                <a href="{{ member[1].social.blog }}" class="person-link" target="_blank">Visit Blog →</a>
                                {% else %}
                                <a href="{{ member[1].social.github }}" class="person-link" target="_blank">Visit GitHub →</a>
                                {% endif %}
                            </div>
                        </article>
                    </div>
                    {% endfor %}
                </div>
            </div>

            <button class="carousel-nav carousel-nav--next research-nav" aria-label="Next">
                <span>›</span>
            </button>
        </div>

        <div class="carousel-indicators research-indicators">
            {% for member in site.data.team %}
            <button class="carousel-indicator {% if forloop.first %}active{% endif %}"
                    data-slide="{{ forloop.index0 }}"
                    aria-label="View {{ member[1].name }}">
            </button>
            {% endfor %}
        </div>
    </div>
</section>

<section class="craft">
    <div class="container">
        <header class="section-header">
            <span class="section-label">ScopeCreep</span>
            <h2 class="section-title">Organization Links</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="craft-grid">
            <article class="craft-card">
                <h3><a href="https://github.com/ScopeCreep-zip" target="_blank">GitHub</a></h3>
                <p>Open source projects and collaborative work from the ScopeCreep organization.</p>
            </article>
            <article class="craft-card">
                <h3><a href="/podcasts">Grimoire's</a></h3>
                <p>Audio content and podcast episodes discussing security and infrastructure topics.</p>
            </article>
        </div>
    </div>
</section>

<script>
// Research Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.research-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.coven-track');
    const slides = Array.from(track.querySelectorAll('.coven-slide'));
    const prevButton = document.querySelector('.research-nav.carousel-nav--prev');
    const nextButton = document.querySelector('.research-nav.carousel-nav--next');
    const indicators = document.querySelectorAll('.research-indicators .carousel-indicator');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function getVisibleSlides() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function getMaxIndex() {
        const visible = getVisibleSlides();
        return Math.max(0, totalSlides - visible);
    }

    function updateTrackPosition() {
        const slideWidth = 100 / getVisibleSlides();
        const offset = -currentIndex * slideWidth;
        track.style.transform = `translateX(${offset}%)`;
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function updateButtonStates() {
        const maxIndex = getMaxIndex();
        prevButton.style.opacity = currentIndex === 0 ? '0.3' : '1';
        prevButton.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';
        nextButton.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        nextButton.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }

    function goToSlide(index) {
        const maxIndex = getMaxIndex();
        if (index < 0) {
            currentIndex = 0;
        } else if (index > maxIndex) {
            currentIndex = maxIndex;
        } else {
            currentIndex = index;
        }

        updateTrackPosition();
        updateIndicators();
        updateButtonStates();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < getMaxIndex()) goToSlide(currentIndex + 1);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goToSlide(currentIndex + 1);
            else goToSlide(currentIndex - 1);
        }
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const maxIndex = getMaxIndex();
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            updateTrackPosition();
            updateButtonStates();
        }, 250);
    });

    updateTrackPosition();
    updateIndicators();
    updateButtonStates();
});
</script>
