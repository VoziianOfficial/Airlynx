"use strict";

/* ==========================================================
   AIRLYNX — ABOUT PAGE LOGIC
   File: /js/about.js
   ========================================================== */

(function () {
    const doc = document;

    const initAboutPage = () => {
        if (!doc.body.classList.contains("about-page")) {
            return;
        }

        // Page-specific logic can be added here later.
        // Shared rendering is handled by /js/main.js.
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initAboutPage);
    } else {
        initAboutPage();
    }
})();