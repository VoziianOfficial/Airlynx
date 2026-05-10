"use strict";

/* ==========================================================
   AIRLYNX — GLOBAL SITE LOGIC
   File: /js/main.js
   ========================================================== */

(function () {
    const cfg = window.SITE_CONFIG;

    if (!cfg) {
        return;
    }

    const doc = document;
    const body = doc.body;
    const root = doc.documentElement;

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

    const currentPage = (() => {
        const file = window.location.pathname.split("/").pop();
        return file || "index.html";
    })();

    const getServiceById = (id) => {
        return cfg.services.find((service) => service.id === id);
    };

    const getServiceByHref = (href) => {
        return cfg.services.find((service) => service.href === href);
    };

    const icon = (name, className = "ui-icon") => {
        const icons = {
            thermometer: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M10 14.35V5.75a2 2 0 1 1 4 0v8.6a5 5 0 1 1-4 0Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 7.3v7.75" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"/>
                    <path d="M12 20.2a2.15 2.15 0 1 0 0-4.3 2.15 2.15 0 0 0 0 4.3Z" fill="currentColor"/>
                </svg>
            `,
            snowflake: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 2.8v18.4M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4M4 12h16M8.2 3.9 12 7.7l3.8-3.8M8.2 20.1l3.8-3.8 3.8 3.8M3.9 8.2 7.7 12l-3.8 3.8M20.1 8.2 16.3 12l3.8 3.8" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            flame: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M13 2.8c.55 3.25 3.7 4.7 4.85 7.55 1.38 3.4-.45 7.9-4.2 9.35-4.15 1.6-8.7-1.2-8.7-5.85 0-2.75 1.5-4.55 3.35-6.35.15 1.95 1.25 3.15 2.7 3.85-.5-3.05.6-5.85 2-8.55Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.15 20.25c-1.8-.45-3.1-1.85-3.1-3.55 0-1.35.65-2.25 1.55-3.1.28 1.35 1.15 2.1 2.2 2.5-.2-1.65.38-3.05 1.1-4.2 1.25 1.65 2.35 2.75 2.35 4.65 0 2.15-1.75 3.75-4.1 3.7Z" fill="currentColor"/>
                </svg>
            `,
            airflow: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M3.2 7.4h10.7c1.4 0 2.4-.78 2.4-1.95 0-1.08-.82-1.85-1.9-1.85-.88 0-1.52.43-1.92 1.15M3.2 12h15.3c1.72 0 2.9 1.02 2.9 2.45 0 1.38-1.05 2.35-2.5 2.35-1.12 0-1.95-.55-2.42-1.45M3.2 16.6h8.1c1.27 0 2.15.75 2.15 1.82 0 1.02-.78 1.78-1.82 1.78-.82 0-1.43-.4-1.8-1.02" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            filter: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M5.1 3.8h13.8a1.2 1.2 0 0 1 1.02 1.84l-6.5 9.74a1.5 1.5 0 0 0-.25.83v2.74a1.1 1.1 0 0 1-.62.99l-1.45.72a1.1 1.1 0 0 1-1.58-.99v-4.46a1.5 1.5 0 0 0-.25-.83L4.08 5.64A1.2 1.2 0 0 1 5.1 3.8Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                    <path d="M7.4 8.2h9.2M8.9 11.5h6.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
            `,
            gauge: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4.2 15.8a8.1 8.1 0 1 1 15.6 0" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round"/>
                    <path d="M12 13.7l4.05-4.05" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
                    <path d="M7.2 15.8h9.6M6.1 12.1h1.5M16.4 12.1h1.5M12 7.3v1.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                    <path d="M12 16.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z" fill="currentColor"/>
                </svg>
            `,
            "shield-check": `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 2.9 19.2 5v5.95c0 4.58-2.95 8.42-7.2 10.15-4.25-1.73-7.2-5.57-7.2-10.15V5L12 2.9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                    <path d="m8.7 12.1 2.05 2.05 4.75-5.05" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            "clipboard-check": `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M9 4.7h6M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5v1.1H8V4.5A1.5 1.5 0 0 1 9.5 3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                    <path d="M7.2 5.2H5.9a1.7 1.7 0 0 0-1.7 1.7v12.2a1.7 1.7 0 0 0 1.7 1.7h12.2a1.7 1.7 0 0 0 1.7-1.7V6.9a1.7 1.7 0 0 0-1.7-1.7h-1.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
                    <path d="m8.1 13.25 2.35 2.35 5.45-5.75" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            "map-pin": `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 21.2s6.45-5.5 6.45-11.1A6.45 6.45 0 0 0 5.55 10.1c0 5.6 6.45 11.1 6.45 11.1Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                    <path d="M12 12.55a2.45 2.45 0 1 0 0-4.9 2.45 2.45 0 0 0 0 4.9Z" fill="none" stroke="currentColor" stroke-width="1.7"/>
                </svg>
            `,
            phone: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8.1 4.1 10 8.45 7.85 10.1c1.22 2.55 3.5 4.83 6.05 6.05L15.55 14l4.35 1.9c.62.28.95.95.78 1.62l-.55 2.18c-.18.72-.84 1.22-1.58 1.18C10.35 20.38 3.62 13.65 3.12 5.45c-.04-.74.46-1.4 1.18-1.58l2.18-.55c.67-.17 1.34.16 1.62.78Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            mail: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4.4 6.2h15.2a1.9 1.9 0 0 1 1.9 1.9v7.8a1.9 1.9 0 0 1-1.9 1.9H4.4a1.9 1.9 0 0 1-1.9-1.9V8.1a1.9 1.9 0 0 1 1.9-1.9Z" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/>
                    <path d="m3.3 7.5 8.7 6 8.7-6" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            home: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M3.5 11.2 12 4l8.5 7.2" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.8 10.4v9.1h4.4v-5.2h3.6v5.2h4.4v-9.1" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            workflow: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6 7.2h5.2a3.3 3.3 0 0 1 3.3 3.3 3.3 3.3 0 0 0 3.3 3.3H18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                    <path d="M6 16.8h4.8a3.3 3.3 0 0 0 3.3-3.3 3.3 3.3 0 0 1 3.3-3.3H18" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                    <path d="M4.6 9.1a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM19.4 12.1a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM19.4 18.7a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Z" fill="currentColor"/>
                </svg>
            `,
            "scan-search": `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4.2 8.2V5.7a1.5 1.5 0 0 1 1.5-1.5h2.5M15.8 4.2h2.5a1.5 1.5 0 0 1 1.5 1.5v2.5M19.8 15.8v2.5a1.5 1.5 0 0 1-1.5 1.5h-2.5M8.2 19.8H5.7a1.5 1.5 0 0 1-1.5-1.5v-2.5" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                    <path d="M10.9 15.2a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6Z" fill="none" stroke="currentColor" stroke-width="1.75"/>
                    <path d="m14.1 14.1 3.25 3.25" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
                </svg>
            `,
            grid: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4.4 4.4h6.1v6.1H4.4V4.4Zm9.1 0h6.1v6.1h-6.1V4.4Zm-9.1 9.1h6.1v6.1H4.4v-6.1Zm9.1 0h6.1v6.1h-6.1v-6.1Z" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linejoin="round"/>
                </svg>
            `,
            chevron: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="m7 9.5 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `,
            menu: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M4.5 7h15M4.5 12h15M4.5 17h15" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
                </svg>
            `,
            close: `
                <svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>
                </svg>
            `
        };

        return icons[name] || icons.thermometer;
    };

    const logoMark = () => {
        return `
            <span class="brand-mark" aria-hidden="true">
                <svg class="brand-thermometer" viewBox="0 0 34 44" focusable="false">
                    <path class="brand-thermometer-shell" d="M13.8 24.6V7.8a5.2 5.2 0 0 1 10.4 0v16.8a11.9 11.9 0 1 1-10.4 0Z" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="brand-thermometer-cold" d="M19 8.4v18.9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                    <path class="brand-thermometer-warm" d="M19 34.8a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" fill="currentColor"/>
                    <path class="brand-thermometer-glint" d="M22.2 5.8c1.1.85 1.6 1.95 1.6 3.4v6.4" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" opacity=".6"/>
                </svg>
            </span>
        `;
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

    const applyPageMeta = () => {
        const meta = cfg.pageMeta?.[currentPage];

        if (!meta) return;

        if (meta.title) {
            doc.title = meta.title;
        }

        if (meta.description) {
            let description = qs('meta[name="description"]');

            if (!description) {
                description = doc.createElement("meta");
                description.setAttribute("name", "description");
                doc.head.appendChild(description);
            }

            description.setAttribute("content", meta.description);
        }
    };

    const setText = (selector, value) => {
        qsa(selector).forEach((node) => {
            node.textContent = value || "";
        });
    };

    const injectBusinessData = () => {
        setText("[data-company-name]", cfg.companyName);
        setText("[data-company-id]", cfg.companyId);
        setText("[data-brand-name]", cfg.brand?.shortName || cfg.companyName);
        setText("[data-brand-text]", cfg.brand?.logoText || cfg.companyName);
        setText("[data-phone-text]", cfg.phone);
        setText("[data-phone-button-text]", cfg.phoneButtonText || cfg.phone);
        setText("[data-email-text]", cfg.email);
        setText("[data-address-text]", cfg.address?.full);
        setText("[data-service-area]", cfg.serviceArea);
        setText("[data-footer-text]", cfg.footerText);
        setText("[data-disclaimer]", cfg.disclaimer);
        setText("[data-legal-notice]", cfg.legalNotice);

        qsa("[data-phone-link]").forEach((link) => {
            link.setAttribute("href", cfg.phoneHref || "#");
            link.setAttribute("aria-label", cfg.phoneLabel || cfg.phone || "Call");
        });

        qsa("[data-email-link]").forEach((link) => {
            link.setAttribute("href", `mailto:${cfg.email}`);
            link.setAttribute("aria-label", `Email ${cfg.email}`);
        });
    };

    const renderHeader = () => {
        qsa("[data-site-header]").forEach((mount) => {
            const nav = cfg.navigation.map((item) => {
                if (item.hasDropdown) {
                    const services = cfg.services.map((service) => {
                        return `
                            <a class="dropdown-service-link" href="${escapeHTML(service.href)}" data-nav-link>
                                <span class="dropdown-service-icon">${icon(service.icon)}</span>
                                <span>
                                    <strong>${escapeHTML(service.shortTitle)}</strong>
                                    <small>${escapeHTML(service.title)}</small>
                                </span>
                            </a>
                        `;
                    }).join("");

                    return `
                        <div class="nav-item nav-item-dropdown" data-services-dropdown>
                            <a class="nav-link nav-link-dropdown" href="${escapeHTML(item.href)}" data-nav-link>
                                <span>${escapeHTML(item.label)}</span>
                                ${icon("chevron", "nav-chevron")}
                            </a>

                            <div class="services-dropdown-panel" data-dropdown-panel>
                                <div class="dropdown-panel-inner">
                                    <p class="dropdown-kicker">HVAC categories</p>
                                    <div class="dropdown-service-grid">
                                        ${services}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                return `
                    <a class="nav-link" href="${escapeHTML(item.href)}" data-nav-link>
                        ${escapeHTML(item.label)}
                    </a>
                `;
            }).join("");

            const mobileNav = cfg.navigation.map((item) => {
                return `
                    <a class="mobile-nav-link" href="${escapeHTML(item.href)}" data-mobile-close>
                        ${icon(item.label === "Home" ? "home" : item.hasDropdown ? "grid" : item.label === "Contact" ? "phone" : "workflow")}
                        <span>${escapeHTML(item.label)}</span>
                    </a>
                `;
            }).join("");

            const mobileServices = cfg.services.map((service) => {
                return `
                    <a class="mobile-service-link" href="${escapeHTML(service.href)}" data-mobile-close>
                        <span class="mobile-service-icon">${icon(service.icon)}</span>
                        <span>
                            <strong>${escapeHTML(service.shortTitle)}</strong>
                            <small>${escapeHTML(service.title)}</small>
                        </span>
                    </a>
                `;
            }).join("");

            mount.innerHTML = `
                <header class="site-header" data-header>
                    <div class="container site-header-inner">
                        <a class="site-brand" href="index.html" aria-label="${escapeHTML(cfg.brand.logoLabel)}">
                            ${logoMark()}
                            <span class="site-brand-text" data-brand-text>${escapeHTML(cfg.brand.logoText)}</span>
                        </a>

                        <nav class="desktop-nav" aria-label="Primary navigation">
                            ${nav}
                        </nav>

                        <div class="header-actions">
                            <a class="header-phone" href="${escapeHTML(cfg.phoneHref)}" data-phone-link>
                                ${icon("phone")}
                                <span data-phone-button-text>${escapeHTML(cfg.phoneButtonText || cfg.phone)}</span>
                            </a>

                            <a class="btn btn-primary header-cta" href="contact.html">Start Request</a>

                            <button class="mobile-menu-toggle" type="button" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false" data-mobile-menu-open>
                                ${icon("menu")}
                            </button>
                        </div>
                    </div>
                </header>

                <div class="mobile-menu" id="mobileMenu" hidden data-mobile-menu>
                        <button class="mobile-menu-backdrop" type="button" aria-label="Close menu" data-mobile-close></button>

                        <div class="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
                            <div class="mobile-menu-head">
                                <a class="site-brand mobile-menu-brand" href="index.html" data-mobile-close aria-label="${escapeHTML(cfg.brand.logoLabel)}">
                                    ${logoMark()}
                                    <span class="site-brand-text" data-brand-text>${escapeHTML(cfg.brand.logoText)}</span>
                                </a>

                                <button class="mobile-menu-close" type="button" aria-label="Close menu" data-mobile-close>
                                    ${icon("close")}
                                </button>
                            </div>

                            <div class="mobile-menu-body">
                                <div class="mobile-menu-block">
                                    <p class="mobile-menu-label">Navigation</p>
                                    <nav class="mobile-nav" aria-label="Mobile navigation">
                                        ${mobileNav}
                                    </nav>
                                </div>

                                <div class="mobile-menu-block">
                                    <p class="mobile-menu-label">Services</p>
                                    <div class="mobile-services-list">
                                        ${mobileServices}
                                    </div>
                                </div>

                                <div class="mobile-contact-card">
                                    <a href="${escapeHTML(cfg.phoneHref)}" data-phone-link>
                                        ${icon("phone")}
                                        <span data-phone-text>${escapeHTML(cfg.phone)}</span>
                                    </a>

                                    <a href="mailto:${escapeHTML(cfg.email)}" data-email-link>
                                        ${icon("mail")}
                                        <span data-email-text>${escapeHTML(cfg.email)}</span>
                                    </a>
                                </div>

                                <p class="mobile-menu-note" data-legal-notice>${escapeHTML(cfg.legalNotice)}</p>
                            </div>
                        </div>
                    </div>
            `;
        });
    };

    const renderFooter = () => {
        qsa("[data-site-footer]").forEach((mount) => {
            const navLinks = cfg.navigation.map((item) => {
                return `<a href="${escapeHTML(item.href)}">${escapeHTML(item.label)}</a>`;
            }).join("");

            const serviceLinks = cfg.services.map((service) => {
                return `<a href="${escapeHTML(service.href)}">${escapeHTML(service.title)}</a>`;
            }).join("");

            const legalLinks = cfg.legalLinks.map((link) => {
                return `<a href="${escapeHTML(link.href)}">${escapeHTML(link.label)}</a>`;
            }).join("");

            mount.innerHTML = `
                <footer class="site-footer">
                    <div class="container footer-main">
                        <div class="footer-brand-column">
                            <a class="site-brand footer-brand" href="index.html" aria-label="${escapeHTML(cfg.brand.logoLabel)}">
                                ${logoMark()}
                                <span class="site-brand-text" data-brand-text>${escapeHTML(cfg.brand.logoText)}</span>
                            </a>

                            <p class="footer-text" data-footer-text>${escapeHTML(cfg.footerText)}</p>

                            <div class="footer-contact">
                                <a href="${escapeHTML(cfg.phoneHref)}" data-phone-link>
                                    ${icon("phone")}
                                    <span data-phone-text>${escapeHTML(cfg.phone)}</span>
                                </a>

                                <a href="mailto:${escapeHTML(cfg.email)}" data-email-link>
                                    ${icon("mail")}
                                    <span data-email-text>${escapeHTML(cfg.email)}</span>
                                </a>

                                <span>
                                    ${icon("map-pin")}
                                    <span data-address-text>${escapeHTML(cfg.address.full)}</span>
                                </span>
                            </div>
                        </div>

                        <div class="footer-column">
                            <h2>Navigation</h2>
                            <div class="footer-links">${navLinks}</div>
                        </div>

                        <div class="footer-column">
                            <h2>Services</h2>
                            <div class="footer-links">${serviceLinks}</div>
                        </div>

                        <div class="footer-column">
                            <h2>Legal</h2>
                            <div class="footer-links">${legalLinks}</div>
                        </div>
                    </div>

                    <div class="container footer-bottom">
                        <div class="footer-company-line">
                            <span data-company-name>${escapeHTML(cfg.companyName)}</span>
                            <span aria-hidden="true">•</span>
                            <span data-company-id>${escapeHTML(cfg.companyId)}</span>
                            <span aria-hidden="true">•</span>
                            <span data-service-area>${escapeHTML(cfg.serviceArea)}</span>
                        </div>

                        <p class="footer-disclaimer" data-disclaimer>${escapeHTML(cfg.disclaimer)}</p>
                    </div>
                </footer>
            `;
        });
    };

    const setActiveNavigation = () => {
        const activeService = getServiceByHref(currentPage);

        qsa("[data-nav-link]").forEach((link) => {
            const href = link.getAttribute("href");

            if (href === currentPage || (activeService && href === "services.html")) {
                link.classList.add("is-active");
                link.setAttribute("aria-current", "page");
            }
        });
    };

    const initHeaderState = () => {
        const header = qs("[data-header]");

        if (!header) return;

        const syncHeader = () => {
            header.classList.toggle("is-scrolled", window.scrollY > 8);
            root.style.setProperty("--header-height", `${header.offsetHeight}px`);
        };

        syncHeader();

        window.addEventListener("scroll", syncHeader, { passive: true });
        window.addEventListener("resize", syncHeader);
    };

    const initDropdowns = () => {
        qsa("[data-services-dropdown]").forEach((dropdown) => {
            let closeTimer = null;

            const openDropdown = () => {
                window.clearTimeout(closeTimer);
                dropdown.classList.add("is-open");
            };

            const closeDropdown = () => {
                closeTimer = window.setTimeout(() => {
                    dropdown.classList.remove("is-open");
                }, 180);
            };

            dropdown.addEventListener("mouseenter", openDropdown);
            dropdown.addEventListener("mouseleave", closeDropdown);
            dropdown.addEventListener("focusin", openDropdown);
            dropdown.addEventListener("focusout", (event) => {
                if (!dropdown.contains(event.relatedTarget)) {
                    closeDropdown();
                }
            });
        });
    };

    const initMobileMenu = () => {
        const menu = qs("[data-mobile-menu]");
        const openBtn = qs("[data-mobile-menu-open]");

        if (!menu || !openBtn) return;

        let lastFocused = null;

        const setInert = (state) => {
            qsa("main, [data-site-footer]").forEach((node) => {
                if ("inert" in node) {
                    node.inert = state;
                }
            });
        };

        const openMenu = () => {
            lastFocused = doc.activeElement;
            menu.hidden = false;
            openBtn.setAttribute("aria-expanded", "true");
            body.classList.add("menu-open");
            setInert(true);

            window.requestAnimationFrame(() => {
                menu.classList.add("is-open");
                qs(".mobile-menu-panel a, .mobile-menu-panel button", menu)?.focus({ preventScroll: true });
            });
        };

        const closeMenu = () => {
            menu.classList.remove("is-open");
            openBtn.setAttribute("aria-expanded", "false");
            body.classList.remove("menu-open");
            setInert(false);

            window.setTimeout(() => {
                menu.hidden = true;

                if (lastFocused && typeof lastFocused.focus === "function") {
                    lastFocused.focus({ preventScroll: true });
                }
            }, 240);
        };

        openBtn.addEventListener("click", () => {
            if (menu.hidden) {
                openMenu();
            } else {
                closeMenu();
            }
        });

        qsa("[data-mobile-close]", menu).forEach((target) => {
            target.addEventListener("click", closeMenu);
        });

        doc.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && !menu.hidden) {
                closeMenu();
            }
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024 && !menu.hidden) {
                closeMenu();
            }
        });
    };

    const selectServicesForContainer = (mode) => {
        if (mode === "left" || mode === "home-left") {
            return cfg.services.slice(0, 2);
        }

        if (mode === "right" || mode === "home-right") {
            return cfg.services.slice(2, 4);
        }

        return cfg.services;
    };

    const renderServiceCards = () => {
        qsa("[data-service-cards]").forEach((container) => {
            const mode = container.getAttribute("data-service-cards") || "all";
            const services = selectServicesForContainer(mode);

            container.innerHTML = services.map((service, index) => {
                const globalIndex = cfg.services.findIndex((item) => item.id === service.id);
                const number = String(globalIndex + 1 || index + 1).padStart(2, "0");

                return `
                    <article class="service-card" data-service-card data-accent="${escapeHTML(service.accent)}">
                        <a class="service-card-link" href="${escapeHTML(service.href)}" aria-label="${escapeHTML(service.title)}">
                            <span class="service-card-media">
                                <img src="${escapeHTML(service.image)}" alt="" loading="lazy">
                            </span>

                            <span class="service-card-overlay"></span>

                            <span class="service-card-icon">
                                ${icon(service.icon)}
                            </span>

                            <span class="service-card-content">
                                <span class="service-card-number">${number}</span>
                                <span class="service-card-title">${escapeHTML(service.title)}</span>
                                <span class="service-card-text">${escapeHTML(service.cardText || service.summary)}</span>
                                <span class="service-card-cta">Compare option <span aria-hidden="true">→</span></span>
                            </span>
                        </a>
                    </article>
                `;
            }).join("");
        });
    };

    const renderHeroSlides = () => {
        qsa("[data-hero-slides]").forEach((container) => {
            container.innerHTML = cfg.heroSlides.map((slide, index) => {
                return `
                    <article class="hero-slide ${index === 0 ? "is-active" : ""}" data-hero-slide>
                        <img class="hero-slide-image" src="${escapeHTML(slide.image)}" alt="">
                        <span class="hero-slide-overlay"></span>
                    </article>
                `;
            }).join("");
        });

        qsa("[data-hero-content]").forEach((container) => {
            const slide = cfg.heroSlides[0];

            if (!slide) return;

            container.innerHTML = `
                <p class="section-kicker hero-kicker" data-hero-kicker>${escapeHTML(slide.kicker)}</p>
                <h1 data-hero-title>${highlightAccent(slide.title, slide.accentWord)}</h1>
                <p class="hero-text" data-hero-text>${escapeHTML(slide.text)}</p>

                <div class="hero-actions">
                    <a class="btn btn-primary" href="${escapeHTML(slide.primaryHref)}" data-hero-primary>${escapeHTML(slide.primaryCta)}</a>
                    <a class="btn btn-secondary" href="${escapeHTML(slide.secondaryHref)}" data-hero-secondary>${escapeHTML(slide.secondaryCta)}</a>
                </div>

                <p class="hero-note" data-legal-notice>${escapeHTML(cfg.legalNotice)}</p>
            `;
        });

        qsa("[data-hero-dots]").forEach((container) => {
            container.innerHTML = cfg.heroSlides.map((_, index) => {
                return `
                    <button class="hero-dot ${index === 0 ? "is-active" : ""}" type="button" data-hero-dot="${index}" aria-label="Show hero slide ${index + 1}" aria-pressed="${index === 0 ? "true" : "false"}"></button>
                `;
            }).join("");
        });
    };

    const renderMarquee = () => {
        qsa("[data-marquee-items]").forEach((container) => {
            const items = [...cfg.marqueeItems, ...cfg.marqueeItems];

            container.innerHTML = items.map((item) => {
                return `
                    <span class="marquee-item">
                        ${icon(item.icon)}
                        <span>${escapeHTML(item.label)}</span>
                    </span>
                `;
            }).join("");
        });
    };

    const renderMetrics = () => {
        qsa("[data-metrics]").forEach((container) => {
            container.innerHTML = cfg.metrics.map((metric) => {
                return `
                    <article class="metric-card">
                        <span class="metric-icon">${icon(metric.icon)}</span>
                        <strong><span data-counter="${Number(metric.value) || 0}">0</span>${escapeHTML(metric.suffix || "")}</strong>
                        <p>${escapeHTML(metric.label)}</p>
                    </article>
                `;
            }).join("");
        });
    };

    const initCounters = () => {
        const counters = qsa("[data-counter]");

        if (!counters.length) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const animate = (counter) => {
            const target = Number(counter.getAttribute("data-counter")) || 0;
            const duration = 2600;
            const start = performance.now();

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(target * eased);

                counter.textContent = value.toLocaleString("en-US");

                if (progress < 1) {
                    window.requestAnimationFrame(tick);
                } else {
                    counter.textContent = target.toLocaleString("en-US");
                    counter.classList.add("is-counted");
                }
            };

            if (prefersReduced) {
                counter.textContent = target.toLocaleString("en-US");
                counter.classList.add("is-counted");
                return;
            }

            window.requestAnimationFrame(tick);
        };

        if (!("IntersectionObserver" in window)) {
            counters.forEach(animate);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting || entry.target.dataset.counted === "true") return;

                entry.target.dataset.counted = "true";
                animate(entry.target);
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.35
        });

        counters.forEach((counter) => observer.observe(counter));
    };

    const renderProcessSteps = () => {
        qsa("[data-process-steps]").forEach((container) => {
            container.innerHTML = cfg.processSteps.map((step) => {
                return `
                    <article class="process-step">
                        <span class="process-step-number">${escapeHTML(step.number)}</span>
                        <span class="process-step-icon">${icon(step.icon)}</span>
                        <h3>${escapeHTML(step.title)}</h3>
                        <p>${escapeHTML(step.text)}</p>
                    </article>
                `;
            }).join("");
        });
    };

    const renderBenefits = () => {
        qsa("[data-benefits]").forEach((container) => {
            container.innerHTML = cfg.benefits.map((benefit) => {
                return `
                    <article class="benefit-card">
                        <span class="benefit-icon">${icon(benefit.icon)}</span>
                        <h3>${escapeHTML(benefit.title)}</h3>
                        <p>${escapeHTML(benefit.text)}</p>
                    </article>
                `;
            }).join("");
        });
    };

    const renderTestimonials = () => {
        qsa("[data-testimonials]").forEach((container) => {
            const items = [...cfg.testimonials, ...cfg.testimonials];

            container.innerHTML = items.map((item) => {
                return `
                    <article class="testimonial-card">
                        <p>${escapeHTML(item.text)}</p>
                        <footer>
                            <strong>${escapeHTML(item.name)}</strong>
                            <span>${escapeHTML(item.location)}</span>
                        </footer>
                    </article>
                `;
            }).join("");
        });
    };

    const getFaqItems = (node) => {
        const explicitServiceId = node.getAttribute("data-service-faq");
        const bodyServiceId = body.getAttribute("data-service-id");
        const serviceId = explicitServiceId || bodyServiceId;

        if (serviceId) {
            const service = getServiceById(serviceId);
            if (service?.faq?.length) {
                return service.faq;
            }
        }

        return cfg.faq || [];
    };

    const renderFaq = () => {
        qsa("[data-faq-list]").forEach((container) => {
            const faqItems = getFaqItems(container);

            container.innerHTML = faqItems.map((item, index) => {
                const id = `faq-${currentPage.replace(".html", "")}-${index}`;

                return `
                    <div class="faq-item">
                        <button class="faq-question" type="button" aria-expanded="false" aria-controls="${escapeHTML(id)}">
                            <span>${escapeHTML(item.question)}</span>
                            ${icon("chevron", "faq-chevron")}
                        </button>

                        <div class="faq-answer" id="${escapeHTML(id)}" hidden>
                            <p>${escapeHTML(item.answer)}</p>
                        </div>
                    </div>
                `;
            }).join("");
        });

        qsa("[data-faq-schema]").forEach((node) => {
            const faqItems = getFaqItems(node);
            const schema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer
                    }
                }))
            };

            node.textContent = JSON.stringify(schema);
        });
    };

    const initFaq = () => {
        qsa(".faq-question").forEach((button) => {
            button.addEventListener("click", () => {
                const expanded = button.getAttribute("aria-expanded") === "true";
                const answer = doc.getElementById(button.getAttribute("aria-controls"));

                button.setAttribute("aria-expanded", String(!expanded));

                if (answer) {
                    answer.hidden = expanded;
                }
            });
        });
    };

    const populateFormSelects = () => {
        qsa("[data-service-select]").forEach((select) => {
            const selected = select.value;

            select.innerHTML = `
                <option value="">Choose a category</option>
                ${cfg.forms.serviceCategories.map((item) => {
                return `<option value="${escapeHTML(item.value)}">${escapeHTML(item.label)}</option>`;
            }).join("")}
            `;

            if (selected) {
                select.value = selected;
            }
        });
    };

    const initForms = () => {
        qsa("[data-request-form]").forEach((form) => {
            const status = qs("[data-form-status]", form);

            const setStatus = (message, type) => {
                if (!status) return;

                status.textContent = message;
                status.className = `form-status is-${type}`;
            };

            form.setAttribute("novalidate", "true");

            qsa("input, select, textarea", form).forEach((field) => {
                field.addEventListener("input", () => {
                    field.closest(".form-field, .checkbox-field")?.classList.remove("is-invalid");
                });

                field.addEventListener("change", () => {
                    field.closest(".form-field, .checkbox-field")?.classList.remove("is-invalid");
                });
            });

            form.addEventListener("submit", (event) => {
                event.preventDefault();

                let valid = true;

                qsa("input, select, textarea", form).forEach((field) => {
                    field.closest(".form-field, .checkbox-field")?.classList.remove("is-invalid");

                    if (!field.checkValidity()) {
                        valid = false;
                        field.closest(".form-field, .checkbox-field")?.classList.add("is-invalid");
                    }
                });

                if (!valid) {
                    setStatus(cfg.forms.request.errorMessage, "error");
                    qs(":invalid", form)?.focus({ preventScroll: false });
                    return;
                }

                setStatus(cfg.forms.request.successMessage, "success");
                form.reset();
            });
        });
    };

    const renderPageHero = () => {
        qsa("[data-page-hero]").forEach((hero) => {
            const key = hero.getAttribute("data-page-hero");
            const data = cfg.pageHeroes?.[key];

            if (!data) return;

            qs("[data-page-hero-kicker]", hero) && (qs("[data-page-hero-kicker]", hero).textContent = data.kicker);
            qs("[data-page-hero-title]", hero) && (qs("[data-page-hero-title]", hero).textContent = data.title);
            qs("[data-page-hero-text]", hero) && (qs("[data-page-hero-text]", hero).textContent = data.text);

            const image = qs("[data-page-hero-image]", hero);
            if (image) {
                image.setAttribute("src", data.image);
                image.setAttribute("alt", "");
            }
        });
    };

    const renderServicePageData = () => {
        const serviceId = body.getAttribute("data-service-id");
        if (!serviceId) return;

        const service = getServiceById(serviceId);
        if (!service) return;

        setText("[data-service-title]", service.title);
        setText("[data-service-short-title]", service.shortTitle);
        setText("[data-service-page-title]", service.pageTitle);
        setText("[data-service-page-intro]", service.pageIntro);
        setText("[data-service-summary]", service.summary);

        qsa("[data-service-hero-image]").forEach((image) => {
            image.setAttribute("src", service.heroImage || service.image);
            image.setAttribute("alt", "");
        });

        qsa("[data-service-evaluation-points]").forEach((container) => {
            container.innerHTML = service.evaluationPoints.map((point) => {
                return `
                    <li>
                        ${icon("shield-check")}
                        <span>${escapeHTML(point)}</span>
                    </li>
                `;
            }).join("");
        });

        qsa("[data-service-prepare-details]").forEach((container) => {
            container.innerHTML = service.prepareDetails.map((point) => {
                return `
                    <li>
                        ${icon("clipboard-check")}
                        <span>${escapeHTML(point)}</span>
                    </li>
                `;
            }).join("");
        });
    };

    const renderComparisonLists = () => {
        qsa("[data-comparison-factors]").forEach((container) => {
            container.innerHTML = cfg.serviceDetails.comparisonFactors.map((item) => {
                return `
                    <li>
                        ${icon("gauge")}
                        <span>${escapeHTML(item)}</span>
                    </li>
                `;
            }).join("");
        });

        qsa("[data-homeowner-checklist]").forEach((container) => {
            container.innerHTML = cfg.serviceDetails.homeownerChecklist.map((item) => {
                return `
                    <li>
                        ${icon("clipboard-check")}
                        <span>${escapeHTML(item)}</span>
                    </li>
                `;
            }).join("");
        });

        setText("[data-safe-reminder]", cfg.serviceDetails.safeReminder);
    };

    const initImageFallbacks = () => {
        qsa("img").forEach((image) => {
            image.addEventListener("error", () => {
                const parent = image.closest(".hero-slide, .service-card-media, .page-hero-media, .image-panel, .cta-media, .about-media");

                image.removeAttribute("src");
                image.classList.add("is-image-missing");

                if (parent) {
                    parent.classList.add("has-image-fallback");
                }
            }, { once: true });
        });
    };

    const renderCookieBanner = () => {
        const data = cfg.cookieBanner;

        if (!data?.storageKey) return;

        let stored = null;

        try {
            stored = window.localStorage.getItem(data.storageKey);
        } catch (error) {
            stored = null;
        }

        if (stored) return;

        const banner = doc.createElement("div");
        banner.className = "policy-banner";
        banner.setAttribute("data-policy-banner", "");

        const links = data.links.map((link) => {
            return `<a href="${escapeHTML(link.href)}">${escapeHTML(link.label)}</a>`;
        }).join("");

        banner.innerHTML = `
            <div class="policy-banner-inner">
                <div class="policy-banner-copy">
                    <strong>${escapeHTML(data.title)}</strong>
                    <p>${escapeHTML(data.text)}</p>
                    <div class="policy-banner-links">${links}</div>
                </div>

                <div class="policy-banner-actions">
                    <button class="btn btn-secondary btn-small" type="button" data-policy-decline>${escapeHTML(data.decline)}</button>
                    <button class="btn btn-primary btn-small" type="button" data-policy-accept>${escapeHTML(data.accept)}</button>
                </div>
            </div>
        `;

        body.appendChild(banner);

        const save = (choice) => {
            try {
                window.localStorage.setItem(data.storageKey, choice);
            } catch (error) {
                return;
            }

            banner.classList.add("is-hiding");

            window.setTimeout(() => {
                banner.remove();
            }, 220);
        };

        qs("[data-policy-accept]", banner)?.addEventListener("click", () => save("accepted"));
        qs("[data-policy-decline]", banner)?.addEventListener("click", () => save("declined"));
    };

    const initReducedMotion = () => {
        const media = window.matchMedia("(prefers-reduced-motion: reduce)");

        const sync = () => {
            root.classList.toggle("reduced-motion", media.matches);
        };

        sync();
        media.addEventListener?.("change", sync);
    };

    const init = () => {
        applyPageMeta();

        renderHeader();
        renderFooter();

        injectBusinessData();

        renderHeroSlides();
        renderPageHero();
        renderServicePageData();
        renderServiceCards();
        renderMarquee();
        renderMetrics();
        renderProcessSteps();
        renderBenefits();
        renderTestimonials();
        renderComparisonLists();
        renderFaq();

        populateFormSelects();

        setActiveNavigation();
        initHeaderState();
        initDropdowns();
        initMobileMenu();
        initCounters();
        initFaq();
        initForms();
        initImageFallbacks();
        initReducedMotion();
        renderCookieBanner();

        injectBusinessData();

        window.AIRLYNX = {
            config: cfg,
            icon,
            getServiceById,
            getServiceByHref
        };
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();