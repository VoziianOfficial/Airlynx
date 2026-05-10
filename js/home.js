"use strict";

/* ==========================================================
   AIRLYNX — HOME PAGE LOGIC
   File: /js/home.js
   ========================================================== */

(function () {
    const cfg = window.SITE_CONFIG;

    if (!cfg) {
        return;
    }

    const doc = document;

    const qs = (selector, scope = doc) => scope.querySelector(selector);
    const qsa = (selector, scope = doc) => Array.from(scope.querySelectorAll(selector));

    const escapeHTML = (value) => {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    };

    const prefersReducedMotion = () => {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    };

    const highlightAccent = (text, accentWord) => {
        const safeText = escapeHTML(text);
        const safeAccent = escapeHTML(accentWord);

        if (!safeAccent || !safeText.includes(safeAccent)) {
            return safeText;
        }

        return safeText.replace(
            safeAccent,
            `<span class="text-accent">${safeAccent}</span>`
        );
    };

    const initHeroSlideshow = () => {
        const hero = qs("[data-home-hero]");
        const slides = qsa("[data-hero-slide]");
        const dots = qsa("[data-hero-dot]");
        const slideData = cfg.heroSlides || [];

        if (!hero || !slides.length || !slideData.length) {
            return;
        }

        const kicker = qs("[data-hero-kicker]");
        const title = qs("[data-hero-title]");
        const text = qs("[data-hero-text]");
        const primary = qs("[data-hero-primary]");
        const secondary = qs("[data-hero-secondary]");

        let activeIndex = 0;
        let timer = null;
        let isPaused = false;

        const updateContent = (index) => {
            const current = slideData[index];

            if (!current) return;

            if (kicker) {
                kicker.textContent = current.kicker || "";
            }

            if (title) {
                title.innerHTML = highlightAccent(current.title || "", current.accentWord || "");
            }

            if (text) {
                text.textContent = current.text || "";
            }

            if (primary) {
                primary.textContent = current.primaryCta || "Compare Services";
                primary.setAttribute("href", current.primaryHref || "services.html");
            }

            if (secondary) {
                secondary.textContent = current.secondaryCta || "Start Request";
                secondary.setAttribute("href", current.secondaryHref || "contact.html");
            }
        };

        const setSlide = (index) => {
            if (!slideData[index]) return;

            activeIndex = index;

            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle("is-active", slideIndex === activeIndex);
            });

            dots.forEach((dot, dotIndex) => {
                const isActive = dotIndex === activeIndex;

                dot.classList.toggle("is-active", isActive);
                dot.setAttribute("aria-pressed", String(isActive));
            });

            updateContent(activeIndex);
        };

        const nextSlide = () => {
            const nextIndex = (activeIndex + 1) % slideData.length;
            setSlide(nextIndex);
        };

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        const start = () => {
            stop();

            if (prefersReducedMotion() || isPaused || doc.hidden) {
                return;
            }

            timer = window.setInterval(nextSlide, 5400);
        };

        dots.forEach((dot) => {
            dot.addEventListener("click", () => {
                const index = Number(dot.getAttribute("data-hero-dot"));

                if (Number.isNaN(index)) return;

                setSlide(index);
                start();
            });
        });

        hero.addEventListener("mouseenter", () => {
            isPaused = true;
            stop();
        });

        hero.addEventListener("mouseleave", () => {
            isPaused = false;
            start();
        });

        hero.addEventListener("focusin", () => {
            isPaused = true;
            stop();
        });

        hero.addEventListener("focusout", (event) => {
            if (!hero.contains(event.relatedTarget)) {
                isPaused = false;
                start();
            }
        });

        doc.addEventListener("visibilitychange", () => {
            if (doc.hidden) {
                stop();
            } else {
                start();
            }
        });

        window
            .matchMedia("(prefers-reduced-motion: reduce)")
            .addEventListener?.("change", () => {
                if (prefersReducedMotion()) {
                    stop();
                } else {
                    start();
                }
            });

        setSlide(0);
        start();
    };

    const initThermometerReadout = () => {
        const thermometer = qs("[data-thermometer]");
        const readout = qs("[data-thermometer-readout]");

        if (!thermometer || !readout) return;

        const values = [42, 48, 56, 64, 72, 80, 76, 68, 58, 46];
        let index = 0;
        let timer = null;

        const update = () => {
            const value = values[index % values.length];

            readout.textContent = `${value}°F`;
            thermometer.style.setProperty("--thermo-value", String(value));

            index += 1;
        };

        const start = () => {
            if (prefersReducedMotion()) {
                update();
                return;
            }

            update();
            timer = window.setInterval(update, 1700);
        };

        const stop = () => {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        };

        doc.addEventListener("visibilitychange", () => {
            if (doc.hidden) {
                stop();
            } else {
                start();
            }
        });

        start();
    };

    const initHome = () => {
        if (!doc.body.classList.contains("home-page")) {
            return;
        }

        initHeroSlideshow();
        initThermometerReadout();
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initHome);
    } else {
        initHome();
    }
})();