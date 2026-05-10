"use strict";

(function () {
    const doc = document;

    const initLegalPage = () => {
        if (!doc.body.classList.contains("legal-page")) {
            return;
        }

    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initLegalPage);
    } else {
        initLegalPage();
    }
})();