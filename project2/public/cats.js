"use strict";
(function() {
  // this file is for shared ele in all pages
  // validation
    const registerFormEl = document.querySelector('.register-form');
  
    const emailEl = document.querySelector('.register-email__input')
    const emailErrorEl = document.querySelector('.register-email__error');
    
    const confirmInputEl = document.querySelector('.register-confirm__input');
    const confirmErrorEl = document.querySelector('.register-confirm__error');
  
    registerFormEl.addEventListener('submit', (e) => {
      // Email Validation - This error text will NOT be present in the HTML, it is added/removed using .innerText when the validation fails
      let isEmailInvalid = false;
      let isConfirmEmailInvalid = false;
  
      const email = emailEl.value;
      const confirmEmail = confirmInputEl.value;
  
      if (!email) {
        isEmailInvalid = true;
        emailErrorEl.innerText = "Email is required";
      }

      if (!email.includes("@")) {
        console.log("Input string not contains '@'."); 
        emailErrorEl.innerText = "This field be a valid email address including a @";
      }
  
      if(!confirmEmail || email !== confirmEmail) {
        isConfirmEmailInvalid = true;
        confirmErrorEl.innerText = "This field must match confirm email";
      }
  
      if (isEmailInvalid || isConfirmEmailInvalid) {
        e.preventDefault();
        // Todo: inform user
      }
    })
  
    // Email Validation for invalid input
    emailEl.addEventListener('input',(e) => {
      const email = e.target.value;
  
      if (!email) {
        emailErrorEl.innerText = "Email is required";
      } else {
        emailErrorEl.innerText = "";
      }
    });
  
    // Confirm Email Validation for invalid input
    confirmInputEl.addEventListener('input',(e) => {
      const confirmEmail = confirmInputEl.value;
  
      if (!confirmEmail) {
        confirmErrorEl.innerText = "This field must match confirm email";
        console.log("email input test");
      } else {
        confirmErrorEl.innerText = "";
      }
    });

  // test modal
  const modalEl = document.querySelector('.modal');
  const subEl = document.querySelector('.sub');
  const closeEl = document.querySelector('.close');
  subEl.addEventListener('click', () => {
    modalEl.showModal();
  });
  closeEl.addEventListener('click', () => {
    modalEl.close();
  });
})();