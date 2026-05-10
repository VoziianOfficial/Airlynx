"use strict";

/* ==========================================================
   AIRLYNX — SERVICE DETAIL PAGE LOGIC
   File: /js/service-page.js
   ========================================================== */

(function () {
    const doc = document;

    const initServiceDetailPage = () => {
        if (!doc.body.classList.contains("service-detail-page")) {
            return;
        }

        // Individual service page data is injected by /js/main.js
        // using body[data-service-id].
    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initServiceDetailPage);
    } else {
        initServiceDetailPage();
    }
})();