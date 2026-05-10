"use strict";

(function () {
    const doc = document;

    const initContactPage = () => {
        if (!doc.body.classList.contains("contact-page")) {
            return;
        }

    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initContactPage);
    } else {
        initContactPage();
    }
})();