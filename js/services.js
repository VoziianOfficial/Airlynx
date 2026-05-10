"use strict";

/* ==========================================================
   AIRLYNX — SERVICES PAGE LOGIC
   File: /js/services.js
   ========================================================== */

(function () {
    const doc = document;

    const initServicesPage = () => {
        if (!doc.body.classList.contains("services-page")) {
            return;
        }

        // Page-specific logic can be added here later.
        // Shared rendering is handled by /js/main.js.
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initServicesPage);
    } else {
        initServicesPage();
    }
})();