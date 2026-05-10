# Airlynx HVAC Aggregator Website

Static, config-driven HVAC provider matching website.

## Structure

```text
/css/style.css
/css/home.css
/css/services.css
/css/about.css
/css/contact.css
/css/service-page.css
/css/legal.css
/js/config.js
/js/main.js
/js/home.js
/js/services.js
/js/about.js
/js/contact.js
/js/service-page.js
/js/legal.js
/assets/images/
/assets/icons/
```

## Rebrand

Edit `/js/config.js` first. Repeated business values are injected from the config:
company name, brand text, phone, email, address, service cards, metrics, testimonials, FAQ, page meta, footer text, legal notice, and disclaimer.

## Local preview

Open `index.html` directly or run a local server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
