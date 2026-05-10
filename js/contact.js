"use strict";

/* ==========================================================
   AIRLYNX — CONTACT PAGE LOGIC
   File: /js/contact.js
   ========================================================== */

(function () {
    const doc = document;

    const initContactPage = () => {
        if (!doc.body.classList.contains("contact-page")) {
            return;
        }

        // Contact form behavior is handled globally by /js/main.js.
        // Page-specific contact enhancements can be added here later.
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initContactPage);
    } else {
        initContactPage();
    }
})();