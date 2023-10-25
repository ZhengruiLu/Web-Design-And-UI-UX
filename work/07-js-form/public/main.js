"use strict";
(function() {
  const formEl = document.querySelector('.register');
  console.log(formEl);
  const emailGroupEl = document.querySelector('.register__email');
  const confirmGroupEl = document.querySelector('.register__confirm');
  const emailInputEl = document.querySelector('.register-email__input');
  const confirmInputEl = document.querySelector('.register-confirm__input');

  formEl.addEventListener('submit', (event) => {
    let isInvalid = false;
    emailGroupEl.classList.remove('.register-email__error');
    // emailGroupEl.classList.remove('.register-email--invalid');
    confirmGroupEl.classList.remove('.register-confirm--invalid');

    if( !emailInputEl.value ) {
      emailGroupEl.classList.add('.register-email__error');
      // emailGroupEl.classList.add('.register-email--invalid');
      isInvalid = true;
    }

    if( !confirmInputEl.value ) {
      confirmGroupEl.classList.add('.register-confirm--invalid');
      isInvalid = true;
    }

    if( isInvalid ) {
      event.preventDefault();
    }
  })

  // const registerFormEl = document.querySelector('.register-form');
  // const nameEl = document.querySelector('.register__name');
  // const nameErrorEl = document.querySelector('.register-name__error');
  // registerFormEl.addEventListener('submit', (e) => {
  //   let isInvalid = false;

  //   const name = nameEl.value;
  //   if (!name) {
  //     isInvalid = true;
  //     nameErrorEl.innerText = "Username is required";
  //     console.log('bad username');
  //   }

  //   if (isInvalid) {
  //     e.preventDefault();
  //   }
  // })
})();