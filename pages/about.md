---
layout: default
title: The Coven
permalink: /about/
description: Meet the witches behind ScopeCreep.zip
---

<section class="hero">
    <div class="container">
        <div class="hero-ornament">✦ ✦ ✦</div>
        <h1 class="hero-title">The Coven</h1>
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

        <div class="coven-carousel-container">
            <button class="carousel-nav carousel-nav--prev about-nav" aria-label="Previous">
                <span>‹</span>
            </button>

            <div class="coven-carousel about-carousel">
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
                    </div>
                    {% endfor %}
                </div>
            </div>

            <button class="carousel-nav carousel-nav--next about-nav" aria-label="Next">
                <span>›</span>
            </button>
        </div>

        <div class="carousel-indicators about-indicators">
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
            <span class="section-label">Our Expertise</span>
            <h2 class="section-title">What We Conjure</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="craft-grid">
            {% for member in site.data.team %}
            <article class="craft-card">
                <h3>{{ member[1].name }}'s Craft</h3>
                <ul class="expertise-list">
                    {% for skill in member[1].expertise %}
                    <li>✦ {{ skill }}</li>
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

<script>
// About Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.about-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.coven-track');
    const slides = Array.from(track.querySelectorAll('.coven-slide'));
    const prevButton = document.querySelector('.about-nav.carousel-nav--prev');
    const nextButton = document.querySelector('.about-nav.carousel-nav--next');
    const indicators = document.querySelectorAll('.about-indicators .carousel-indicator');

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
