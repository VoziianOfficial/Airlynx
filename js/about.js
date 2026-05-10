"use strict";

(function () {
    const doc = document;

    const initAboutPage = () => {
        if (!doc.body.classList.contains("about-page")) {
            return;
        }

    };

    if (doc.readyState === "loading") {
        doc.addEventListener("DOMContentLoaded", initAboutPage);
    } else {
        initAboutPage();
    }
})();