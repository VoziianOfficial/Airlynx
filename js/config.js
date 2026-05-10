"use strict";

/* ==========================================================
   AIRLYNX — GLOBAL CONFIG
   File: /js/config.js
   ========================================================== */

window.SITE_CONFIG = {
    companyName: "Airlynx",
    companyId: "Airlynx Provider Matching LLC",

    brand: {
        shortName: "Airlynx",
        tagline: "Compare local HVAC provider options with clarity.",
        logoLabel: "Airlynx home",
        logoText: "Airlynx"
    },

    phone: "(305) 555-0198",
    phoneHref: "tel:+13055550198",
    phoneLabel: "Call Airlynx at (305) 555-0198",
    phoneButtonText: "(305) 555-0198",

    email: "hello@airlynxmatch.com",

    address: {
        line1: "1395 Brickell Avenue, Suite 820",
        city: "Miami",
        state: "FL",
        zip: "33131",
        country: "USA",
        full: "1395 Brickell Avenue, Suite 820, Miami, FL 33131, USA"
    },

    serviceArea: "USA HVAC provider matching platform",

    footerText:
        "Airlynx helps homeowners organize HVAC project details and compare independent local provider options across cooling, heating, ductwork, ventilation, and indoor air quality categories.",

    disclaimer:
        "Disclaimer: This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.",

    legalNotice:
        "Airlynx is an independent provider matching platform. Airlynx does not install, repair, inspect, maintain, or perform HVAC, heating, cooling, ductwork, ventilation, or indoor air quality services directly. Provider availability, quotes, licensing, insurance, warranties, and service details should be verified by the homeowner before hiring any independent provider.",

    navigation: [
        {
            label: "Home",
            href: "index.html"
        },
        {
            label: "Services",
            href: "services.html",
            hasDropdown: true
        },
        {
            label: "About",
            href: "about.html"
        },
        {
            label: "Contact",
            href: "contact.html"
        }
    ],

    legalLinks: [
        {
            label: "Privacy Policy",
            href: "privacy-policy.html"
        },
        {
            label: "Cookie Policy",
            href: "cookie-policy.html"
        },
        {
            label: "Terms of Service",
            href: "terms-of-service.html"
        }
    ],

    heroSlideIntervalMs: 4800,

    heroSlides: [
        {
            image: "./assets/images/hvac-hero-01.jpg",
            kicker: "Independent HVAC provider matching",
            title: "Compare local HVAC provider options.",
            accentWord: "HVAC",
            text:
                "Organize your project details, review service categories, and compare independent local HVAC provider options with more clarity.",
            primaryCta: "Compare Services",
            primaryHref: "services.html",
            secondaryCta: "Start Request",
            secondaryHref: "contact.html"
        },
        {
            image: "./assets/images/hvac-hero-02.jpg",
            kicker: "Cooling and heating comparison",
            title: "Find provider options for comfort projects.",
            accentWord: "comfort",
            text:
                "Explore cooling, heating, airflow, and indoor air quality categories before requesting provider quotes.",
            primaryCta: "View Categories",
            primaryHref: "services.html",
            secondaryCta: "How It Works",
            secondaryHref: "about.html"
        },
        {
            image: "./assets/images/hvac-hero-03.jpg",
            kicker: "Project details organized",
            title: "Prepare your HVAC request before comparing quotes.",
            accentWord: "request",
            text:
                "Airlynx helps homeowners collect the details providers commonly need before discussing scope, availability, and pricing.",
            primaryCta: "Start Matching",
            primaryHref: "contact.html",
            secondaryCta: "Learn More",
            secondaryHref: "about.html"
        },
        {
            image: "./assets/images/hvac-hero-04.jpg",
            kicker: "Aggregator-safe platform",
            title: "A matching platform, not an HVAC contractor.",
            accentWord: "platform",
            text:
                "Airlynx does not install, repair, or send technicians. The platform helps compare independent provider options.",
            primaryCta: "About Airlynx",
            primaryHref: "about.html",
            secondaryCta: "Contact",
            secondaryHref: "contact.html"
        },
        {
            image: "./assets/images/hvac-hero-05.jpg",
            kicker: "Cold, warm, airflow, air quality",
            title: "Compare HVAC categories with a cleaner process.",
            accentWord: "cleaner",
            text:
                "Use one focused platform to understand category fit, provider questions, and verification reminders.",
            primaryCta: "Explore Services",
            primaryHref: "services.html",
            secondaryCta: "Request Options",
            secondaryHref: "contact.html"
        },
        {
            image: "./assets/images/hvac-hero-06.jpg",
            kicker: "USA-focused provider matching",
            title: "Review local provider options by project type.",
            accentWord: "local",
            text:
                "Provider availability may vary by ZIP code, category, scope, and local requirements.",
            primaryCta: "Compare Now",
            primaryHref: "services.html",
            secondaryCta: "Start Request",
            secondaryHref: "contact.html"
        }
    ],

    services: [
        {
            id: "cooling",
            title: "Cooling Provider",
            shortTitle: "Cooling",
            href: "cooling-provider-matching.html",
            icon: "snowflake",
            accent: "cold",
            image: "./assets/images/cooling-card.jpg",
            heroImage: "./assets/images/cooling-hero.jpg",
            summary:
                "Compare independent local provider options for AC replacement, cooling system requests, and quote discussions.",
            cardText:
                "Compare cooling provider options for AC projects, replacement requests.",
            pageKicker: "Cooling provider matching",
            pageTitle: "Compare local cooling provider options.",
            pageIntro:
                "Airlynx helps homeowners organize cooling project details and compare independent local provider options. Homeowners should verify licensing, insurance, quote scope, warranties, timelines, and availability before hiring.",
            evaluationPoints: [
                "Cooling system type and property size",
                "Provider licensing and insurance",
                "Quote scope and equipment details",
                "Timeline, warranty language, and availability"
            ],
            prepareDetails: [
                "Current system age if known",
                "Approximate square footage",
                "Cooling issues or comfort concerns",
                "Preferred timing for provider contact"
            ],
            faq: [
                {
                    question: "Does Airlynx install AC systems?",
                    answer:
                        "No. Airlynx does not install, repair, or service AC systems directly. The platform helps homeowners compare independent local cooling provider options."
                },
                {
                    question: "What should I compare before choosing a cooling provider?",
                    answer:
                        "Compare licensing, insurance, quote scope, equipment details, warranty language, availability, and communication."
                },
                {
                    question: "Can cooling provider availability vary by ZIP code?",
                    answer:
                        "Yes. Availability, quote policies, and service categories may vary by city, ZIP code, provider, and project type."
                }
            ]
        },
        {
            id: "heating",
            title: "Heating Provider",
            shortTitle: "Heating",
            href: "heating-provider-matching.html",
            icon: "flame",
            accent: "warm",
            image: "./assets/images/heating-card.jpg",
            heroImage: "./assets/images/heating-hero.jpg",
            summary:
                "Compare independent provider options for heating systems, furnace projects, heat pumps, and quote requests.",
            cardText:
                "Review heating provider options for furnace, heat pump.",
            pageKicker: "Heating provider matching",
            pageTitle: "Compare local heating provider options.",
            pageIntro:
                "Airlynx helps homeowners prepare heating project information and compare independent local provider options. Airlynx does not perform heating work directly.",
            evaluationPoints: [
                "Heating system type and project goal",
                "Provider experience with similar systems",
                "Quote scope, exclusions, and warranty terms",
                "License, insurance, and scheduling availability"
            ],
            prepareDetails: [
                "Heating system type",
                "Uneven heat or comfort concerns",
                "Property size and number of levels",
                "Preferred contact method"
            ],
            faq: [
                {
                    question: "Is Airlynx a heating contractor?",
                    answer:
                        "No. Airlynx is not a heating contractor and does not send technicians. It helps homeowners compare independent provider options."
                },
                {
                    question: "What affects heating project pricing?",
                    answer:
                        "Pricing may depend on system type, equipment needs, labor scope, access conditions, permits, property size, and provider-specific quote details."
                },
                {
                    question: "Should I verify provider credentials?",
                    answer:
                        "Yes. Homeowners should verify licensing, insurance, warranties, quote details, and local requirements before hiring any provider."
                }
            ]
        },
        {
            id: "ductwork",
            title: "Ductwork & Ventilation",
            shortTitle: "Ductwork",
            href: "ductwork-ventilation.html",
            icon: "airflow",
            accent: "fresh",
            image: "./assets/images/ductwork-card.jpg",
            heroImage: "./assets/images/ductwork-hero.jpg",
            summary:
                "Compare provider options for ductwork, ventilation, airflow concerns, and related HVAC project categories.",
            cardText:
                "Organize airflow concerns and compare ductwork or ventilation provider options.",
            pageKicker: "Ductwork & ventilation matching",
            pageTitle: "Compare ductwork and ventilation provider options.",
            pageIntro:
                "Airlynx helps homeowners outline airflow concerns, ductwork needs, and ventilation goals before comparing independent local provider options.",
            evaluationPoints: [
                "Airflow concerns and affected rooms",
                "Duct access, layout, and property age",
                "Provider evaluation approach",
                "Quote scope, warranty terms, and availability"
            ],
            prepareDetails: [
                "Rooms with weak airflow",
                "Known duct damage or leakage concerns",
                "Recent HVAC changes or renovations",
                "Notes about accessible duct areas"
            ],
            faq: [
                {
                    question: "Does Airlynx perform ductwork?",
                    answer:
                        "No. Airlynx does not perform ductwork or ventilation services. It helps homeowners compare independent provider options."
                },
                {
                    question: "What details help with ductwork quote requests?",
                    answer:
                        "Helpful details include airflow concerns, affected rooms, property layout, duct access, and any prior HVAC evaluations."
                },
                {
                    question: "Can ductwork providers recommend different solutions?",
                    answer:
                        "Yes. Recommendations may vary based on inspection approach, materials, property conditions, scope, and local requirements."
                }
            ]
        },
        {
            id: "indoor-air",
            title: "Indoor Air Quality",
            shortTitle: "Air Quality",
            href: "indoor-air-quality.html",
            icon: "filter",
            accent: "fresh",
            image: "./assets/images/indoor-air-card.jpg",
            heroImage: "./assets/images/indoor-air-hero.jpg",
            summary:
                "Compare provider options for filtration, humidity, purification, ventilation support, and indoor air quality categories.",
            cardText:
                "Review provider options for filtration, humidity, purification, and air quality questions.",
            pageKicker: "Indoor air quality matching",
            pageTitle: "Compare indoor air quality provider options.",
            pageIntro:
                "Airlynx helps homeowners organize indoor air quality concerns and compare independent local provider options for filtration, humidity, purification, and ventilation-related categories.",
            evaluationPoints: [
                "Air quality concerns and comfort goals",
                "Existing HVAC system compatibility",
                "Product details and quote scope",
                "Maintenance needs and warranty language"
            ],
            prepareDetails: [
                "Dust, humidity, odor, or allergy-related concerns",
                "Existing filter type or system notes",
                "Property size and HVAC system age",
                "Preferred timing for provider comparison"
            ],
            faq: [
                {
                    question: "Does Airlynx install air quality products?",
                    answer:
                        "No. Airlynx does not install or service indoor air quality products. It helps homeowners compare independent provider options."
                },
                {
                    question: "What indoor air quality options can providers discuss?",
                    answer:
                        "Independent providers may discuss filtration, purification, humidity control, ventilation, and system compatibility."
                },
                {
                    question: "Should I compare maintenance details?",
                    answer:
                        "Yes. Compare product type, maintenance needs, warranty terms, quote scope, and provider credentials."
                }
            ]
        }
    ],

    marqueeItems: [
        {
            icon: "snowflake",
            label: "Cooling provider options"
        },
        {
            icon: "flame",
            label: "Heating quote requests"
        },
        {
            icon: "airflow",
            label: "Ductwork and ventilation"
        },
        {
            icon: "filter",
            label: "Indoor air quality categories"
        },
        {
            icon: "clipboard-check",
            label: "Project details organized"
        },
        {
            icon: "shield-check",
            label: "Verify license and insurance"
        },
        {
            icon: "map-pin",
            label: "Availability may vary by area"
        }
    ],

    metrics: [
        {
            value: 4,
            suffix: "",
            label: "HVAC provider categories",
            icon: "grid"
        },
        {
            value: 18,
            suffix: "+",
            label: "Comparison factors",
            icon: "gauge"
        },
        {
            value: 100,
            suffix: "%",
            label: "USA-focused matching",
            icon: "map-pin"
        },
        {
            value: 24,
            suffix: "/7",
            label: "Request form access",
            icon: "clipboard-check"
        }
    ],

    processSteps: [
        {
            number: "01",
            icon: "clipboard-check",
            title: "Share basic details",
            text:
                "Choose the HVAC category, add your ZIP code, and describe the project concern."
        },
        {
            number: "02",
            icon: "workflow",
            title: "Review categories",
            text:
                "Compare cooling, heating, ductwork, ventilation, and indoor air quality options."
        },
        {
            number: "03",
            icon: "shield-check",
            title: "Check provider fit",
            text:
                "Look at quote scope, licensing, insurance, warranty terms, and availability."
        },
        {
            number: "04",
            icon: "phone",
            title: "Request options",
            text:
                "Use your organized details when discussing quotes with independent providers."
        }
    ],

    benefits: [
        {
            icon: "scan-search",
            title: "Clearer comparison",
            text:
                "Compare provider options by category, project scope, availability, and quote details."
        },
        {
            icon: "clipboard-check",
            title: "Prepared requests",
            text:
                "Organize the details providers often need before discussing your HVAC project."
        },
        {
            icon: "shield-check",
            title: "Verification reminders",
            text:
                "Remember to verify license, insurance, warranties, and written quote details."
        },
        {
            icon: "home",
            title: "Homeowner-first flow",
            text:
                "Designed for comparing options without presenting the platform as a contractor."
        }
    ],

    testimonials: [
        {
            name: "Megan R.",
            location: "Austin, TX",
            text:
                "Airlynx helped me organize my cooling project details before comparing provider options."
        },
        {
            name: "Daniel K.",
            location: "Orlando, FL",
            text:
                "The platform made it clearer what to verify before choosing a heating provider."
        },
        {
            name: "Priya S.",
            location: "Phoenix, AZ",
            text:
                "I liked seeing cooling and airflow categories separated instead of mixed together."
        },
        {
            name: "Marcus T.",
            location: "Charlotte, NC",
            text:
                "Airlynx helped me think through quote scope, warranty details, and provider availability."
        }
    ],

    faq: [
        {
            question: "How does Airlynx help compare local HVAC providers?",
            answer:
                "Airlynx helps homeowners organize project details, review HVAC service categories, and compare independent local provider options. Airlynx does not perform HVAC work directly."
        },
        {
            question: "Is Airlynx an HVAC contractor?",
            answer:
                "No. Airlynx is not an HVAC contractor, does not install HVAC systems, does not repair systems, and does not send technicians."
        },
        {
            question: "What should I ask before choosing an HVAC provider?",
            answer:
                "Homeowners should ask about licensing, insurance, quote scope, equipment details, warranties, permits, timelines, and service availability."
        },
        {
            question: "Are quotes from providers usually free?",
            answer:
                "Quote policies may vary by provider, project type, and location. Homeowners should confirm any consultation, diagnostic, or quote-related costs directly with the provider."
        }
    ],

    forms: {
        request: {
            title: "Start your HVAC provider matching request",
            eyebrow: "Quick request",
            text:
                "Share a few details and compare independent local HVAC provider options.",
            successMessage:
                "Thanks! Your request details were captured for this demo. No real submission was sent.",
            errorMessage:
                "Please complete the required fields before continuing.",
            submitLabel: "Request Provider Options",
            policyLabel:
                "I agree to the Privacy Policy, Cookie Policy, and Terms of Service.",
            note:
                "Airlynx is a provider matching platform. It does not perform HVAC work directly, and all providers are independent."
        },
        serviceCategories: [
            {
                label: "Cooling Provider Matching",
                value: "cooling-provider-matching"
            },
            {
                label: "Heating Provider Matching",
                value: "heating-provider-matching"
            },
            {
                label: "Ductwork & Ventilation",
                value: "ductwork-ventilation"
            },
            {
                label: "Indoor Air Quality",
                value: "indoor-air-quality"
            },
            {
                label: "Not sure yet",
                value: "not-sure"
            }
        ]
    },

    cookieBanner: {
        storageKey: "airlynx_policy_choice_v2",
        title: "Privacy preferences",
        text:
            "Airlynx uses basic local storage for this policy banner and standard website technologies to improve the browsing experience.",
        accept: "Accept",
        decline: "Decline",
        links: [
            {
                label: "Privacy Policy",
                href: "privacy-policy.html"
            },
            {
                label: "Cookie Policy",
                href: "cookie-policy.html"
            },
            {
                label: "Terms",
                href: "terms-of-service.html"
            }
        ]
    },

    pageHeroes: {
        services: {
            kicker: "HVAC provider categories",
            title: "Compare HVAC provider options by project type.",
            text:
                "Explore four focused HVAC categories designed to help homeowners organize details and compare independent local provider options.",
            image: "./assets/images/services-hero.jpg"
        },
        about: {
            kicker: "About Airlynx",
            title: "A clearer way to compare HVAC provider options.",
            text:
                "Airlynx is an independent provider matching platform built for homeowners who want clarity before requesting HVAC quotes.",
            image: "./assets/images/about-hero.jpg"
        },
        contact: {
            kicker: "Contact Airlynx",
            title: "Start with a few HVAC project details.",
            text:
                "Use the form to organize your request and compare independent provider options by category and location.",
            image: "./assets/images/contact-hero.jpg"
        }
    },

    serviceDetails: {
        comparisonFactors: [
            "Provider licensing and insurance",
            "Quote scope and exclusions",
            "Equipment or product details",
            "Timeline and scheduling availability",
            "Warranty terms and maintenance expectations",
            "Local reviews and communication quality"
        ],
        homeownerChecklist: [
            "Project category and main concern",
            "ZIP code and property type",
            "Existing system age if known",
            "Photos or notes if helpful",
            "Preferred timeline",
            "Questions about quote, warranty, or permits"
        ],
        safeReminder:
            "Before hiring any independent provider, homeowners should verify licensing, insurance, quote details, warranty language, timelines, and local requirements."
    },

    pageMeta: {
        "index.html": {
            title: "Airlynx | Compare Local HVAC Provider Options",
            description:
                "Airlynx helps homeowners compare independent local HVAC provider options for cooling, heating, ductwork, ventilation, and indoor air quality."
        },
        "services.html": {
            title: "HVAC Provider Matching Services | Airlynx",
            description:
                "Explore Airlynx HVAC provider matching categories including cooling, heating, ductwork, ventilation, and indoor air quality."
        },
        "about.html": {
            title: "About Airlynx | Independent HVAC Provider Matching",
            description:
                "Learn how Airlynx helps homeowners organize HVAC project details and compare independent local provider options."
        },
        "contact.html": {
            title: "Contact Airlynx | Start an HVAC Provider Matching Request",
            description:
                "Contact Airlynx to organize HVAC project details and compare independent local provider options."
        },
        "cooling-provider-matching.html": {
            title: "Cooling Provider Matching | Airlynx",
            description:
                "Compare independent local cooling provider options for AC-related quote requests."
        },
        "heating-provider-matching.html": {
            title: "Heating Provider Matching | Airlynx",
            description:
                "Compare independent local heating provider options for furnace, heat pump, and heating system categories."
        },
        "ductwork-ventilation.html": {
            title: "Ductwork & Ventilation Provider Matching | Airlynx",
            description:
                "Compare independent local provider options for ductwork, ventilation, and airflow categories."
        },
        "indoor-air-quality.html": {
            title: "Indoor Air Quality Provider Matching | Airlynx",
            description:
                "Compare independent local provider options for indoor air quality, filtration, humidity, and ventilation-related categories."
        },
        "privacy-policy.html": {
            title: "Privacy Policy | Airlynx",
            description:
                "Read the Airlynx Privacy Policy for this independent HVAC provider matching platform."
        },
        "cookie-policy.html": {
            title: "Cookie Policy | Airlynx",
            description:
                "Read the Airlynx Cookie Policy for this independent HVAC provider matching platform."
        },
        "terms-of-service.html": {
            title: "Terms of Service | Airlynx",
            description:
                "Read the Airlynx Terms of Service for this independent HVAC provider matching platform."
        }
    }
};
