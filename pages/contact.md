---
layout: default
title: Summon Us
description: Speaking engagements and how to reach the ScopeCreep team
permalink: /contact/
---

<section class="hero">
    <div class="container">
        <div class="hero-ornament">✦ ✦ ✦</div>
        <h1 class="hero-title">Summon Us</h1>
        <p class="hero-text">Speaking engagements, collaborations, and ways to reach us</p>
    </div>
</section>

<section class="about">
    <div class="container">
        <header class="section-header">
            <span class="section-label">The Coven</span>
            <h2 class="section-title">Reach Out & Speaking Topics</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="coven-carousel-container">
            <button class="carousel-nav carousel-nav--prev contact-nav" aria-label="Previous">
                <span>‹</span>
            </button>

            <div class="coven-carousel contact-carousel">
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
                            <ul class="speaking-topics">
                                {% for topic in member[1].expertise limit:4 %}
                                <li>✦ {{ topic }}</li>
                                {% endfor %}
                            </ul>
                            <div class="person-links">
                                {% if member[1].social.bluesky %}
                                <a href="{{ member[1].social.bluesky }}" class="person-link" target="_blank">Bluesky</a>
                                {% endif %}
                                {% if member[1].social.twitter %}
                                <a href="{{ member[1].social.twitter }}" class="person-link" target="_blank">Twitter</a>
                                {% endif %}
                                {% if member[1].social.github %}
                                <a href="{{ member[1].social.github }}" class="person-link" target="_blank">GitHub</a>
                                {% endif %}
                                {% if member[1].social.blog %}
                                <a href="{{ member[1].social.blog }}" class="person-link" target="_blank">Blog</a>
                                {% endif %}
                            </div>
                        </article>
                    </div>
                    {% endfor %}
                </div>
            </div>

            <button class="carousel-nav carousel-nav--next contact-nav" aria-label="Next">
                <span>›</span>
            </button>
        </div>

        <div class="carousel-indicators contact-indicators">
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
            <span class="section-label">Available For</span>
            <h2 class="section-title">Types of Events</h2>
            <div class="section-divider">⟡</div>
        </header>

        <div class="craft-grid">
            <article class="craft-card">
                <h3>Conferences</h3>
                <p>Keynotes, technical talks, and panel discussions at security and DevOps conferences.</p>
            </article>
            <article class="craft-card">
                <h3>Collaborations</h3>
                <p>Joint projects, content partnerships, and cross-team technical adventures.</p>
            </article>
            <article class="craft-card">
                <h3>Podcasts</h3>
                <p>Guest appearances to discuss security, infrastructure, and tech culture.</p>
            </article>
            <article class="craft-card">
                <h3>Meetups</h3>
                <p>Local community talks and lightning presentations.</p>
            </article>
        </div>
    </div>
</section>

<script>
// Contact Carousel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.contact-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.coven-track');
    const slides = Array.from(track.querySelectorAll('.coven-slide'));
    const prevButton = document.querySelector('.contact-nav.carousel-nav--prev');
    const nextButton = document.querySelector('.contact-nav.carousel-nav--next');
    const indicators = document.querySelectorAll('.contact-indicators .carousel-indicator');

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
