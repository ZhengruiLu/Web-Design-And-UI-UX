"use strict";
(function() {
  // hamburger
  const menu = document.querySelector(".menu");
  const hamburger= document.querySelector(".hamburger");

  hamburger.addEventListener("click", function() {
    menu.classList.toggle("open");
  })

  // open modal
  const modal = document.querySelector(".modal");
  const subscribeBtn = document.querySelector(".sub-button");
  const closeBtn = document.querySelector(".close-button");
  console.log("closeBtn: ",  closeBtn);

  subscribeBtn.addEventListener("click", function() {
    console.log("open modal");
    modal.classList.remove("close")
  })

  closeBtn.addEventListener("click", function() {
    modal.classList.remove("open");
  })
})();