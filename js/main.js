"use strict";

(function () {
  const config = window.SITE_CONFIG;
  if (!config) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const currentPage = (window.location.pathname.split("/").pop() || "index.html");

  const iconMap = {
    snowflake: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1L19.1 4.9"/><path d="M8 4l4 4 4-4M8 20l4-4 4 4M4 8l4 4-4 4M20 8l-4 4 4 4"/>',
    flame: '<path d="M8.5 14.5A4.5 4.5 0 0 0 13 19c3 0 5-2 5-5 0-4-4-6-4-10-2.5 1.5-4 4-4 6.5C8.5 9.5 7 8 7 6c-2 2-3 4-3 7a8 8 0 0 0 8 8"/>',
    airflow: '<path d="M3 8h10a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
    filter: '<path d="M3 5h18M6 12h12M10 19h4"/><path d="M7 5l3 7v7M17 5l-3 7v7"/>',
    clipboard: '<path d="M9 5h6M9 3h6v4H9z"/><path d="M7 5H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><path d="m9 14 2 2 4-5"/>',
    gauge: '<path d="M12 14l4-4"/><path d="M4 19a8 8 0 1 1 16 0"/><path d="M12 19h.01"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-5"/>',
    map: '<path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/>',
    home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
    grid: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.05 19.39 19.39 0 0 1-6-6A19.7 19.7 0 0 1 2.18 4.18 2 2 0 0 1 4.16 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.7a16 16 0 0 0 6.2 6.2l1.24-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>',
    mail: '<path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-3-3 2.4-2.4Z"/>'
  };

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
  }

  function svgIcon(name) {
    const body = iconMap[name] || iconMap.grid;
    return `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
  }

  function applyMeta() {
    const meta = config.pageMeta[currentPage] || config.pageMeta["index.html"];
    if (meta?.title) document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.name = "description";
      document.head.append(desc);
    }
    desc.content = meta?.description || config.brand.tagline;
  }

  function injectText() {
    $$('[data-company-name]').forEach((el) => { el.textContent = config.companyName; });
    $$('[data-brand-name]').forEach((el) => { el.textContent = config.brand.shortName; });
    $$('[data-company-id]').forEach((el) => { el.textContent = config.companyId; });
    $$('[data-phone-text]').forEach((el) => { el.textContent = config.phone; });
    $$('[data-phone-button-text]').forEach((el) => { el.textContent = config.phoneButtonText; });
    $$('[data-email-text]').forEach((el) => { el.textContent = config.email; });
    $$('[data-address-text]').forEach((el) => { el.textContent = config.address.full; });
    $$('[data-service-area]').forEach((el) => { el.textContent = config.serviceArea; });
    $$('[data-footer-text]').forEach((el) => { el.textContent = config.footerText; });
    $$('[data-disclaimer]').forEach((el) => { el.textContent = config.disclaimer; });
    $$('[data-legal-notice]').forEach((el) => { el.textContent = config.legalNotice; });
    $$('[data-phone-link]').forEach((el) => { el.setAttribute("href", config.phoneHref); el.setAttribute("aria-label", config.phoneLabel); });
    $$('[data-email-link]').forEach((el) => { el.setAttribute("href", `mailto:${config.email}`); });
  }

  function renderHeader() {
    const mount = $('[data-site-header]');
    if (!mount) return;
    const navLinks = config.navigation.map((item) => {
      const active = item.href === currentPage ? " is-active" : "";
      if (item.href === "services.html") {
        const services = config.services.map((service) => `
          <a class="dropdown-service" href="${service.href}">
            <strong>${escapeHTML(service.title)}</strong>
            <span>${escapeHTML(service.summary)}</span>
          </a>`).join("");
        return `<div class="nav-dropdown">
          <a class="nav-link${active}" href="${item.href}">${escapeHTML(item.label)} <span aria-hidden="true">⌄</span></a>
          <div class="nav-dropdown-menu" aria-label="Service categories">${services}</div>
        </div>`;
      }
      return `<a class="nav-link${active}" href="${item.href}">${escapeHTML(item.label)}</a>`;
    }).join("");

    mount.innerHTML = `
      <div class="site-header" role="banner">
        <div class="header-inner">
          <a class="logo-link" href="index.html" aria-label="${escapeHTML(config.brand.logoLabel)}">
            <img src="./assets/icons/logo-thermometer.svg" alt="" width="32" height="44">
            <span data-brand-name>${escapeHTML(config.brand.logoText)}</span>
          </a>
          <nav class="desktop-nav" aria-label="Primary navigation">${navLinks}</nav>
          <div class="header-actions">
            <a class="header-phone" data-phone-link href="${config.phoneHref}" aria-label="${escapeHTML(config.phoneLabel)}"><span class="phone-icon" aria-hidden="true">☎</span><span data-phone-text>${escapeHTML(config.phone)}</span></a>
            <a class="btn btn-warm" href="contact.html">Get Free Quote</a>
            <button class="menu-toggle" type="button" aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu"><span></span><span></span><span></span></button>
          </div>
        </div>
      </div>`;
  }

  function renderMobileMenu() {
    const mount = $('[data-mobile-menu]');
    if (!mount) return;
    const nav = config.navigation.map((item) => `<a href="${item.href}">${escapeHTML(item.label)}</a>`).join("");
    const services = config.services.map((item) => `<a href="${item.href}">${svgIcon(item.icon)} ${escapeHTML(item.title)}</a>`).join("");
    mount.innerHTML = `
      <aside class="mobile-panel" id="mobileMenu" aria-modal="true" aria-label="Mobile menu" tabindex="-1" hidden inert>
        <div class="mobile-panel-head">
          <a class="logo-link" href="index.html" aria-label="${escapeHTML(config.brand.logoLabel)}">
            <img src="./assets/icons/logo-thermometer.svg" alt="" width="32" height="44"><span>${escapeHTML(config.brand.logoText)}</span>
          </a>
          <button class="mobile-close" type="button" aria-label="Close menu">×</button>
        </div>
        <div class="mobile-panel-body">
          <nav class="mobile-nav" aria-label="Mobile navigation">${nav}</nav>
          <div class="mobile-services-title">Service categories</div>
          <div class="mobile-services">${services}</div>
          <div class="mobile-contact">
            <a data-phone-link href="${config.phoneHref}">${svgIcon("phone")} ${escapeHTML(config.phone)}</a>
            <a data-email-link href="mailto:${config.email}">${svgIcon("mail")} ${escapeHTML(config.email)}</a>
          </div>
          <p class="mobile-note">${escapeHTML(config.legalNotice)}</p>
        </div>
      </aside>`;
  }

  function setupMobileMenu() {
    const panel = $("#mobileMenu");
    const openButton = $(".menu-toggle");
    const closeButton = $(".mobile-close");
    if (!panel || !openButton || !closeButton) return;
    const focusable = () => $$('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])', panel).filter((el) => !el.disabled);
    let lastFocus = null;
    const open = () => {
      lastFocus = document.activeElement;
      panel.hidden = false;
      panel.inert = false;
      requestAnimationFrame(() => panel.classList.add("is-open"));
      document.body.classList.add("menu-open");
      openButton.setAttribute("aria-expanded", "true");
      closeButton.focus();
    };
    const close = () => {
      panel.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      openButton.setAttribute("aria-expanded", "false");
      panel.inert = true;
      setTimeout(() => { panel.hidden = true; }, 260);
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    };
    openButton.addEventListener("click", open);
    closeButton.addEventListener("click", close);
    panel.addEventListener("click", (event) => { if (event.target.matches("a")) close(); });
    document.addEventListener("keydown", (event) => {
      if (!panel.classList.contains("is-open")) return;
      if (event.key === "Escape") close();
      if (event.key === "Tab") {
        const items = focusable();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
  }

  function renderFooter() {
    const mount = $('[data-site-footer]');
    if (!mount) return;
    const nav = config.navigation.map((item) => `<a href="${item.href}">${escapeHTML(item.label)}</a>`).join("");
    const services = config.services.map((item) => `<a href="${item.href}">${escapeHTML(item.shortTitle)}</a>`).join("");
    mount.innerHTML = `
      <footer class="footer" role="contentinfo">
        <div class="container-wide">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="logo-link" href="index.html" aria-label="${escapeHTML(config.brand.logoLabel)}"><img src="./assets/icons/logo-thermometer.svg" alt="" width="32" height="44"><span data-brand-name>${escapeHTML(config.brand.logoText)}</span></a>
              <p data-footer-text>${escapeHTML(config.footerText)}</p>
              <p><strong data-company-id>${escapeHTML(config.companyId)}</strong></p>
            </div>
            <div><h2 class="footer-title">Navigation</h2><nav class="footer-links" aria-label="Footer navigation">${nav}</nav></div>
            <div><h2 class="footer-title">Services</h2><nav class="footer-links" aria-label="Footer services">${services}</nav></div>
            <div class="footer-contact"><h2 class="footer-title">Contact</h2><a data-phone-link href="${config.phoneHref}">${escapeHTML(config.phone)}</a><a data-email-link href="mailto:${config.email}">${escapeHTML(config.email)}</a><span>${escapeHTML(config.address.full)}</span><span>${escapeHTML(config.serviceArea)}</span></div>
          </div>
          <div class="disclaimer-box" data-disclaimer>${escapeHTML(config.disclaimer)}</div>
          <div class="footer-bottom"><span>© <span data-year></span> <span data-company-name>${escapeHTML(config.companyName)}</span>. All rights reserved.</span><span><a href="privacy-policy.html">Privacy</a> · <a href="cookie-policy.html">Cookies</a> · <a href="terms-of-service.html">Terms</a></span></div>
        </div>
      </footer>`;
    $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
  }

  function renderServicesCards() {
    $$('[data-service-cards]').forEach((mount) => {
      const slice = mount.dataset.slice;
      let items = config.services;
      if (slice && slice.includes(':')) {
        const [start, end] = slice.split(':').map((value) => Number(value));
        items = config.services.slice(start, end);
      }
      mount.innerHTML = items.map((service) => `
        <a class="service-card reveal" href="${service.href}" data-card-image="${service.image}">
          <span class="service-card-icon">${svgIcon(service.icon)}</span>
          <div class="service-card-content">
            <h3>${escapeHTML(service.shortTitle)}</h3>
            <p>${escapeHTML(service.cardText)}</p>
            <span>Compare Now →</span>
          </div>
        </a>`).join("");
      mount.querySelectorAll('[data-card-image]').forEach((card) => {
        card.style.setProperty('--card-image', `url('${card.dataset.cardImage}')`);
      });
    });
    $$('[data-services-list]').forEach((mount) => {
      mount.innerHTML = config.services.map((service) => `
        <article class="service-row reveal">
          <div class="service-row-media" data-row-image="${service.image}"></div>
          <div class="service-row-content">
            <p class="kicker">${escapeHTML(service.kicker)}</p>
            <h2>${escapeHTML(service.title)}</h2>
            <p>${escapeHTML(service.summary)}</p>
            <a class="btn btn-primary" href="${service.href}">View category</a>
          </div>
        </article>`).join("");
      mount.querySelectorAll('[data-row-image]').forEach((row) => {
        row.style.setProperty('--row-image', `url('${row.dataset.rowImage}')`);
      });
    });
  }

  function renderMetrics() {
    $$('[data-metrics]').forEach((mount) => {
      mount.innerHTML = config.metrics.map((item) => `
        <article class="metric-card reveal">
          <span class="metric-icon">${svgIcon(item.icon)}</span>
          <span><strong data-counter data-value="${item.value}" data-suffix="${escapeHTML(item.suffix)}">0</strong><span>${escapeHTML(item.label)}</span></span>
        </article>`).join("");
    });
  }

  function renderTestimonials() {
    $$('[data-testimonials]').forEach((mount) => {
      const cards = config.testimonials.concat(config.testimonials).map((item) => `
        <article class="testimonial-card">
          <p>“${escapeHTML(item.text)}”</p>
          <strong>${escapeHTML(item.name)}</strong>
          <span>${escapeHTML(item.location)}</span>
        </article>`).join("");
      mount.innerHTML = cards;
    });
  }

  function renderFAQ() {
    $$('[data-faq-list]').forEach((mount) => {
      const pageServiceId = document.body.dataset.serviceId;
      const faq = config.faq;
      mount.innerHTML = faq.map((item, index) => `
        <article class="faq-item${index === 0 ? " is-open" : ""}">
          <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}"><span>${escapeHTML(item.q)}</span><span aria-hidden="true">+</span></button>
          <div class="faq-answer"><div><p>${escapeHTML(item.a)}</p></div></div>
        </article>`).join("");
      if (pageServiceId) mount.dataset.serviceContext = pageServiceId;
    });

    document.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-question");
      if (!button) return;
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });

    const schemaMount = $('[data-faq-schema]');
    if (schemaMount) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": config.faq.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        }))
      });
      schemaMount.replaceWith(script);
    }
  }

  function renderFormOptions() {
    $$('[data-service-select]').forEach((select) => {
      select.innerHTML = `<option value="">Select a category</option>` + config.services.map((service) => `<option value="${service.id}">${escapeHTML(service.title)}</option>`).join("");
    });
    $$('[data-form-agreement]').forEach((el) => { el.textContent = config.forms.agreement; });
  }

  function setupForms() {
    $$('[data-match-form]').forEach((form) => {
      const message = $('[data-form-message]', form);
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let valid = true;
        $$('[data-required]', form).forEach((field) => {
          const wrapper = field.closest(".form-field") || field.closest(".check-field");
          const error = wrapper ? $(".field-error", wrapper) : null;
          const empty = field.type === "checkbox" ? !field.checked : !String(field.value || "").trim();
          if (empty) {
            valid = false;
            field.setAttribute("aria-invalid", "true");
            if (error) error.textContent = field.dataset.error || "This field is required.";
          } else {
            field.removeAttribute("aria-invalid");
            if (error) error.textContent = "";
          }
        });
        const email = $('[type="email"]', form);
        if (email && email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
          valid = false;
          email.setAttribute("aria-invalid", "true");
          const error = $(".field-error", email.closest(".form-field"));
          if (error) error.textContent = "Enter a valid email address.";
        }
        if (!valid) return;
        if (message) {
          message.textContent = `${config.forms.successTitle}: ${config.forms.successMessage}`;
          message.classList.add("is-visible");
          message.focus?.();
        }
        form.reset();
      });
    });
  }

  function setupCounters() {
    const counters = $$('[data-counter]');
    if (!counters.length) return;
    const animate = (el) => {
      const end = Number(el.dataset.value || 0);
      const suffix = el.dataset.suffix || "";
      const duration = 1100;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const value = Math.floor(end * (1 - Math.pow(1 - progress, 3)));
        el.textContent = value.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animate(entry.target); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.3 });
    counters.forEach((counter) => observer.observe(counter));
  }

  function setupReveals() {
    const items = $$('.reveal');
    if (!items.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  function renderPolicyBanner() {
    const mount = $('[data-policy-banner]');
    if (!mount || localStorage.getItem(config.cookieBanner.storageKey)) return;
    const links = config.cookieBanner.links.map((link) => `<a href="${link.href}">${escapeHTML(link.label)}</a>`).join("");
    mount.innerHTML = `<div class="policy-banner is-visible" role="region" aria-label="${escapeHTML(config.cookieBanner.title)}">
      <div><strong>${escapeHTML(config.cookieBanner.title)}</strong><p>${escapeHTML(config.cookieBanner.text)}</p><div class="policy-links">${links}</div></div>
      <div class="policy-actions"><button type="button" data-policy-decline>${escapeHTML(config.cookieBanner.decline)}</button><button type="button" data-policy-accept>${escapeHTML(config.cookieBanner.accept)}</button></div>
    </div>`;
    const banner = $('.policy-banner', mount);
    const choose = (value) => { localStorage.setItem(config.cookieBanner.storageKey, value); banner.classList.remove('is-visible'); };
    $('[data-policy-accept]', mount)?.addEventListener('click', () => choose('accepted'));
    $('[data-policy-decline]', mount)?.addEventListener('click', () => choose('declined'));
  }

  function setupPageHeroBackgrounds() {
    const pageHero = $('[data-page-hero]');
    if (!pageHero) return;
    const map = {
      "services.html": "./assets/images/services-hero.jpg",
      "about.html": "./assets/images/about-hero.jpg",
      "contact.html": "./assets/images/contact-hero.jpg",
      "privacy-policy.html": "./assets/images/legal-hero.jpg",
      "cookie-policy.html": "./assets/images/legal-hero.jpg",
      "terms-of-service.html": "./assets/images/legal-hero.jpg"
    };
    let image = map[currentPage];
    const serviceId = document.body.dataset.serviceId;
    if (serviceId) image = config.services.find((service) => service.id === serviceId)?.heroImage;
    if (image) pageHero.style.setProperty('--hero-image', `linear-gradient(180deg, rgba(3,8,18,.38), rgba(3,8,18,.86)), url('${image}')`);
  }

  function renderServicePage() {
    const serviceId = document.body.dataset.serviceId;
    if (!serviceId) return;
    const service = config.services.find((item) => item.id === serviceId);
    if (!service) return;
    $$('[data-service-title]').forEach((el) => { el.textContent = service.title; });
    $$('[data-service-kicker]').forEach((el) => { el.textContent = service.kicker; });
    $$('[data-service-intro]').forEach((el) => { el.textContent = service.pageIntro; });
    $$('[data-service-summary]').forEach((el) => { el.textContent = service.summary; });
    $$('[data-service-factors]').forEach((el) => {
      el.innerHTML = service.evaluationPoints.map((point) => `<li>${escapeHTML(point)}</li>`).join("");
    });
    $$('[data-service-prepare]').forEach((el) => {
      el.innerHTML = service.prepare.map((point) => `<li>${escapeHTML(point)}</li>`).join("");
    });
  }

  applyMeta();
  renderHeader();
  renderMobileMenu();
  renderFooter();
  injectText();
  renderServicesCards();
  renderMetrics();
  renderTestimonials();
  renderFAQ();
  renderFormOptions();
  setupPageHeroBackgrounds();
  renderServicePage();
  setupMobileMenu();
  setupForms();
  setupCounters();
  setupReveals();
  renderPolicyBanner();
})();
