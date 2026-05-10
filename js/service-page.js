"use strict";

(function () {
    const doc = document;

    const initServiceDetailPage = () => {
        if (!doc.body.classList.contains("service-detail-page")) {
            return;
        }

    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initServiceDetailPage);
    } else {
        initServiceDetailPage();
    }
})();