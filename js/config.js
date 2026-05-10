"use strict";

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
    line1: "200 S Biscayne Blvd, Suite 2790",
    city: "Miami",
    state: "FL",
    zip: "33131",
    country: "USA",
    full: "200 S Biscayne Blvd, Suite 2790, Miami, FL 33131, USA"
  },
  serviceArea: "USA HVAC provider matching platform",
  footerText: "Independent HVAC provider matching platform for homeowners comparing local options in the United States.",
  disclaimer: "Disclaimer: This site is a free service to assist homeowners in connecting with local service providers. All contractors/providers are independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not contractors listed on this site.",
  legalNotice: "This website is an independent provider matching platform. Provider availability, response times, pricing, licenses, insurance, warranties, and quote details are determined by independent providers and should be verified by the homeowner before hiring.",
  navigation: [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "services.html" },
    { label: "About Us", href: "about.html" },
    { label: "Contact", href: "contact.html" }
  ],
  services: [
    {
      id: "cooling",
      title: "Cooling Provider Matching",
      shortTitle: "Cooling Matching",
      href: "cooling-provider-matching.html",
      icon: "snowflake",
      image: "./assets/images/cooling-card.jpg",
      heroImage: "./assets/images/cooling-hero.jpg",
      kicker: "Cooling provider comparison",
      summary: "Compare local cooling provider options for AC replacement, seasonal tune-up discussions, and comfort planning.",
      cardText: "Explore AC provider options for cooling projects, quotes, and fit.",
      heroTitle: "Compare cooling provider options with clearer project details.",
      pageIntro: "Cooling projects can vary by home size, equipment age, duct condition, and provider availability. This category helps homeowners organize their request before reviewing independent local provider options.",
      evaluationPoints: ["Ask about equipment options, efficiency ratings, and quote scope.", "Verify licensing, insurance, warranties, and permit expectations.", "Compare availability, communication quality, and written estimate details."],
      prepare: ["Current system age and model if known", "Cooling concerns and rooms affected", "Preferred timing and ZIP code", "Photos or notes about existing outdoor/indoor equipment"]
    },
    {
      id: "heating",
      title: "Heating Provider Matching",
      shortTitle: "Heating Matching",
      href: "heating-provider-matching.html",
      icon: "flame",
      image: "./assets/images/heating-card.jpg",
      heroImage: "./assets/images/heating-hero.jpg",
      kicker: "Heating provider comparison",
      summary: "Review provider options for furnace, heat pump, or seasonal heating project discussions.",
      cardText: "Compare heating provider options for colder months and system planning.",
      heroTitle: "Review local heating provider options before requesting quotes.",
      pageIntro: "Heating needs may involve comfort, efficiency, safety checks, replacement planning, or quote comparisons. This page keeps the wording aggregator-safe and focused on independent providers.",
      evaluationPoints: ["Clarify whether the provider evaluates furnace, heat pump, or hybrid needs.", "Ask how written estimates handle labor, parts, equipment, and warranties.", "Verify credentials, insurance, and service area before choosing."],
      prepare: ["Heating system type and approximate age", "Comfort issues or rooms that feel colder", "Any prior inspection notes", "Preferred quote timing and contact details"]
    },
    {
      id: "ductwork",
      title: "Ductwork & Ventilation",
      shortTitle: "Ductwork",
      href: "ductwork-ventilation.html",
      icon: "airflow",
      image: "./assets/images/ductwork-card.jpg",
      heroImage: "./assets/images/ductwork-hero.jpg",
      kicker: "Airflow and ventilation comparison",
      summary: "Compare independent providers for airflow, ventilation, duct evaluation, or improvement discussions.",
      cardText: "Organize airflow concerns and review ductwork provider fit.",
      heroTitle: "Compare ventilation and ductwork provider options without confusion.",
      pageIntro: "Ductwork and ventilation conversations often depend on layout, access, airflow balance, filtration, and provider inspection process. Homeowners should compare written details carefully.",
      evaluationPoints: ["Ask how the provider evaluates airflow, access, and scope limitations.", "Review whether duct sealing, replacement, cleaning, or balancing is being discussed.", "Confirm license, insurance, photos, quote detail, and warranty terms."],
      prepare: ["Rooms with weak airflow", "Known duct access points", "Home age and system layout notes", "Photos of vents, returns, or visible duct areas"]
    },
    {
      id: "indoor-air",
      title: "Indoor Air Quality",
      shortTitle: "Indoor Air",
      href: "indoor-air-quality.html",
      icon: "filter",
      image: "./assets/images/indoor-air-card.jpg",
      heroImage: "./assets/images/indoor-air-hero.jpg",
      kicker: "Indoor air provider comparison",
      summary: "Review provider options for filtration, humidity, ventilation, and indoor air quality discussions.",
      cardText: "Compare provider options for cleaner, fresher indoor air planning.",
      heroTitle: "Explore indoor air quality provider options with confidence.",
      pageIntro: "Indoor air quality provider discussions may include filtration, humidity, airflow, ventilation, or equipment compatibility. Homeowners should ask clear questions before selecting any provider.",
      evaluationPoints: ["Ask what products or evaluations are recommended and why.", "Compare maintenance requirements, warranty language, and compatibility notes.", "Verify provider credentials and written quote scope before hiring."],
      prepare: ["Main concerns such as dust, odors, humidity, or allergies", "Current filter size or equipment type if known", "Home size and problem areas", "Questions about maintenance or product options"]
    }
  ],
  forms: {
    primaryCta: "Compare HVAC provider options",
    secondaryCta: "See how it works",
    submitLabel: "Start matching request",
    successTitle: "Request prepared",
    successMessage: "Thanks — your demo request has been validated. In a real setup this form would connect to your CRM or lead endpoint.",
    agreement: "I agree to the privacy policy and understand this platform helps compare independent providers."
  },
  cookieBanner: {
    storageKey: "airlynx-policy-choice-v1",
    title: "Policy preferences",
    text: "We use a simple local preference to remember your policy choice. Review our Privacy Policy, Cookie Policy, and Terms of Service.",
    accept: "Accept",
    decline: "Decline",
    links: [
      { label: "Privacy Policy", href: "privacy-policy.html" },
      { label: "Cookie Policy", href: "cookie-policy.html" },
      { label: "Terms", href: "terms-of-service.html" }
    ]
  },
  faq: [
    { q: "How does Airlynx help compare local HVAC providers?", a: "Airlynx helps homeowners organize project details and review independent local HVAC provider options. It does not perform HVAC work directly." },
    { q: "Is Airlynx an HVAC contractor?", a: "No. Airlynx is an independent provider matching platform, not an HVAC contractor, installer, repair company, or technician dispatch service." },
    { q: "What should I ask before choosing an HVAC provider?", a: "Ask about licensing, insurance, quote scope, warranties, timing, permit expectations, equipment details, and service area availability." },
    { q: "Are quotes from providers usually free?", a: "Quote policies vary by independent provider. Homeowners should confirm any consultation, diagnostic, or estimate fees before scheduling." },
    { q: "How do I know if a provider serves my area?", a: "Provider availability may vary by ZIP code, service category, season, and project details. Always verify availability directly with the provider." }
  ],
  metrics: [
    { value: 12458, suffix: "+", label: "Project details organized", icon: "clipboard" },
    { value: 4, suffix: "", label: "Provider categories", icon: "grid" },
    { value: 18, suffix: "+", label: "Comparison factors", icon: "gauge" },
    { value: 50, suffix: " states", label: "USA-focused matching", icon: "map" }
  ],
  testimonials: [
    { name: "Maya R.", location: "Austin, TX", text: "The platform helped me understand what to ask before comparing cooling replacement quotes. It felt organized without pushing one company." },
    { name: "Daniel P.", location: "Tampa, FL", text: "I liked that it explained the provider matching model clearly. I compared options and verified details before choosing." },
    { name: "Erin S.", location: "Phoenix, AZ", text: "The service categories made it easier to separate ductwork questions from indoor air quality questions." },
    { name: "Marcus L.", location: "Charlotte, NC", text: "Clean, fast, and clear. The reminders about license, insurance, and written quotes were helpful." }
  ],
  heroSlides: [
    { image: "./assets/images/hvac-hero-01.jpg", kicker: "Independent HVAC comparison", title: "Find the Best HVAC Services Near You", accent: "HVAC", text: "Compare local HVAC companies, check provider fit, and get matched with the right independent pros." },
    { image: "./assets/images/hvac-hero-02.jpg", kicker: "Cooling clarity", title: "Compare AC Options With Confidence", accent: "AC", text: "Organize your cooling request before reviewing local provider options and quote details." },
    { image: "./assets/images/hvac-hero-03.jpg", kicker: "Heating project planning", title: "Review Heating Providers Near You", accent: "Heating", text: "Prepare the right questions before comparing heating provider availability and estimates." },
    { image: "./assets/images/hvac-hero-04.jpg", kicker: "Smart provider matching", title: "Better HVAC Choices Start Here", accent: "Choices", text: "Use a clean, aggregator-safe platform built around clarity, not contractor pressure." },
    { image: "./assets/images/hvac-hero-05.jpg", kicker: "Indoor comfort", title: "Explore Indoor Air Options", accent: "Air", text: "Compare provider categories for filtration, airflow, humidity, and ventilation conversations." },
    { image: "./assets/images/hvac-hero-06.jpg", kicker: "Ductwork and ventilation", title: "Plan Airflow Questions First", accent: "Airflow", text: "Make ductwork and ventilation quote discussions easier to compare." }
  ],
  pageMeta: {
    "index.html": { title: "Airlynx | HVAC Provider Matching Platform", description: "Compare local HVAC provider options for cooling, heating, ductwork, ventilation, and indoor air quality projects." },
    "services.html": { title: "HVAC Service Categories | Airlynx", description: "Explore four HVAC provider matching categories and compare independent local provider options." },
    "about.html": { title: "About Airlynx | HVAC Provider Matching", description: "Learn how Airlynx helps homeowners organize HVAC project details and compare independent local provider options." },
    "contact.html": { title: "Contact Airlynx | Start an HVAC Matching Request", description: "Contact Airlynx to prepare an HVAC provider matching request and compare local provider options." },
    "cooling-provider-matching.html": { title: "Cooling Provider Matching | Airlynx", description: "Compare independent cooling provider options for AC projects and quote conversations." },
    "heating-provider-matching.html": { title: "Heating Provider Matching | Airlynx", description: "Review local heating provider options and prepare quote questions for furnace or heat pump projects." },
    "ductwork-ventilation.html": { title: "Ductwork & Ventilation Provider Matching | Airlynx", description: "Compare ductwork and ventilation provider options with clearer project details." },
    "indoor-air-quality.html": { title: "Indoor Air Quality Provider Matching | Airlynx", description: "Explore indoor air quality provider options for filtration, humidity, ventilation, and airflow discussions." },
    "privacy-policy.html": { title: "Privacy Policy | Airlynx", description: "Read the privacy policy for the Airlynx HVAC provider matching platform." },
    "cookie-policy.html": { title: "Cookie Policy | Airlynx", description: "Read the cookie policy for the Airlynx HVAC provider matching platform." },
    "terms-of-service.html": { title: "Terms of Service | Airlynx", description: "Read the terms of service for the Airlynx HVAC provider matching platform." }
  }
};
