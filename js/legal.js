"use strict";

/* ==========================================================
   AIRLYNX — LEGAL PAGE LOGIC
   File: /js/legal.js
   ========================================================== */

(function () {
    const doc = document;

    const initLegalPage = () => {
        if (!doc.body.classList.contains("legal-page")) {
            return;
        }

        // Legal pages currently use shared header, footer,
        // config injection, and cookie banner from /js/main.js.
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initLegalPage);
    } else {
        initLegalPage();
    }
})();