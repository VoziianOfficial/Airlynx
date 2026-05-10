"use strict";

(function () {
    const doc = document;

    const initServicesPage = () => {
        if (!doc.body.classList.contains("services-page")) {
            return;
        }

    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initServicesPage);
    } else {
        initServicesPage();
    }
})();