"use strict";
(function() {
  // this file is for shared ele in all pages
  // hamburger
  const menu = document.querySelector(".menu");
  const hamburger= document.querySelector(".hamburger");

  hamburger.addEventListener("click", function() {
    console.log("toggle open ham")
    menu.classList.toggle("open");
  })
})();