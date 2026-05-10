"use strict";

(function () {
  const config = window.SITE_CONFIG;
  if (!config || document.body.dataset.page !== "home") return;

  const slidesMount = document.querySelector('[data-hero-slides]');
  const dotsMount = document.querySelector('[data-hero-dots]');
  const kicker = document.querySelector('[data-hero-kicker]');
  const title = document.querySelector('[data-hero-title]');
  const text = document.querySelector('[data-hero-text]');
  const primary = document.querySelector('[data-hero-primary]');
  const secondary = document.querySelector('[data-hero-secondary]');
  const note = document.querySelector('[data-hero-note]');
  if (!slidesMount || !dotsMount) return;

  const escapeHTML = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  const slides = config.heroSlides;
  let active = 0;
  let timer = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  slidesMount.innerHTML = slides.map((slide, index) => `<div class="hero-slide${index === 0 ? ' is-active' : ''}" data-slide-image="${slide.image}" aria-hidden="${index === 0 ? 'false' : 'true'}"></div>`).join("");
  slidesMount.querySelectorAll('[data-slide-image]').forEach((slide) => {
    slide.style.backgroundImage = `url('${slide.dataset.slideImage}')`;
  });
  dotsMount.innerHTML = slides.map((_, index) => `<button class="hero-dot${index === 0 ? ' is-active' : ''}" type="button" aria-label="Show slide ${index + 1}" data-slide-dot="${index}"></button>`).join("");
  if (primary) { primary.textContent = config.forms.primaryCta; primary.href = "services.html"; }
  if (secondary) { secondary.textContent = config.forms.secondaryCta; secondary.href = "about.html"; }
  if (note) note.textContent = config.legalNotice;

  function renderContent(index) {
    const slide = slides[index];
    if (kicker) kicker.textContent = slide.kicker;
    if (text) text.textContent = slide.text;
    if (title) title.innerHTML = escapeHTML(slide.title).replace(escapeHTML(slide.accent), `<span class="warm">${escapeHTML(slide.accent)}</span>`);
  }

  function setActive(index) {
    active = index;
    document.querySelectorAll('.hero-slide').forEach((el, idx) => {
      el.classList.toggle('is-active', idx === active);
      el.setAttribute('aria-hidden', String(idx !== active));
    });
    document.querySelectorAll('.hero-dot').forEach((el, idx) => el.classList.toggle('is-active', idx === active));
    renderContent(active);
  }

  dotsMount.addEventListener('click', (event) => {
    const button = event.target.closest('[data-slide-dot]');
    if (!button) return;
    setActive(Number(button.dataset.slideDot));
    if (timer) { clearInterval(timer); startTimer(); }
  });

  function startTimer() {
    if (reducedMotion) return;
    timer = setInterval(() => setActive((active + 1) % slides.length), 5200);
  }

  renderContent(0);
  startTimer();
})();
