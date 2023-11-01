"use strict";
(function() {
  // name validation
  const registerFormEl = document.querySelector('.register-form');
  const nameEl = document.querySelector('.register-name__input');
  const nameGroupEl = document.querySelector('.register-name__error');

  const emailEl = document.querySelector('.register-email__input')
  const emailErrorEl = document.querySelector('.register-email__error');
  
  const confirmInputEl = document.querySelector('.register-confirm__input');
  const confirmErrorEl = document.querySelector('.register-confirm__error');

  registerFormEl.addEventListener('submit', (e) => {
    //Name validation - This error text will be always present in the HTML but the styling will make it shown/not shown
    let isNameInvalid = false;
    nameGroupEl.classList.remove('register-name--invalid');

    const name = nameEl.value;
    if (!name) {
      nameGroupEl.classList.add('register-name--invalid');
      isNameInvalid = true;
    }

    // Email Validation - This error text will NOT be present in the HTML, it is added/removed using .innerText when the validation fails
    let isEmailInvalid = false;
    let isConfirmEmailInvalid = false;

    const email = emailEl.value;
    const confirmEmail = confirmInputEl.value;

    if (!email) {
      isEmailInvalid = true;
      emailErrorEl.innerText = "Email is required";
    }

    if(!confirmEmail || email !== confirmEmail) {
      isConfirmEmailInvalid = true;
      confirmErrorEl.innerText = "This field must match confirm email";
    }

    if (isNameInvalid || isEmailInvalid || isConfirmEmailInvalid) {
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
  confirmErrorEl.addEventListener('input',(e) => {
    const confirmEmail = confirmInputEl.value;

    if (!confirmEmail) {
      confirmErrorEl.innerText = "This field must match confirm email";
      console.log("email input test");
    } else {
      confirmErrorEl.innerText = "";
    }
  });
})();