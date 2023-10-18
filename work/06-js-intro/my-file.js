"use strict";
(function() {
    let toggleStatus = 0;
    const toggleEl = document.querySelector(".dropbtn");
    const navEl = document.querySelector(".dropdown-content");


    toggleEl.addEventListener("click", function() {
        if (toggleStatus === 1) {
            navEl.classList.toggle("open");
            toggleStatus = 0;
        }
        else if (toggleStatus === 0) {
            navEl.classList.toggle("close");
            toggleStatus = 1;
        }
    })
})();