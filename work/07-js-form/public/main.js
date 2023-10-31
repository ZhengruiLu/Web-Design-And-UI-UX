"use strict";
(function() {
  // sample - add event listener
  // const usernameEl = document.querySelector('.register-name__input');
  // usernameEl.addEventListener('input',(e) => {
  //   console.log(e.target.value);
  // });

  // sample - innerText
  // let count = 0;
  // const buttonEl = document.querySelector('.button__add');
  // const demoEl = document.querySelector('.demo');
  // buttonEl.addEventListener('click', () => {
  //   count += 1;
  //   demoEl.innerText = count;
  // });

  // sample - validation
  // name validation

  // const nameErrorEl = document.querySelector('.register-name__error');
  
  // validation will occur when user attempts to submit the form

  // validation will occur when the "input" event occurs on the field
  // nameEl.addEventListener('input',(e) => {
  //   const name = e.target.value;

  //   if (!name) {
  //     nameErrorEl.innerText = "Name is required";
  //   } else {
  //     nameErrorEl.innerText = "";
  //   }
  // });


  // name validation
  const registerFormEl = document.querySelector('.register-form');
  const nameEl = document.querySelector('.register-name__input');
  const nameGroupEl = document.querySelector('.register-name__error');
  console.log("after setting ", nameGroupEl);
  // const emailEl = document.querySelector('.register-email__input')
  // const emailErrorEl = document.querySelector('.register-email__error');
  registerFormEl.addEventListener('submit', (e) => {
    let isNameInvalid = false;
    console.log("before remove invalid class ", nameGroupEl);
    nameGroupEl.classList.remove('register-name--invalid');
    console.log("after remove invalid class " ,nameGroupEl);

    const name = nameEl.value;
    console.log("name: ", name);
    if (!name) {
      console.log(nameGroupEl);
      nameGroupEl.classList.add('register-name--invalid');
      isNameInvalid = true;
      // nameErrorEl.innerText = "Name is required";
      console.log('bad name');
    }

    if (isNameInvalid) {
      e.preventDefault();
      // Todo: inform user
    }

    // let isEmailInvalid = false;

    // const email = emailEl.value;
    // if (!email) {
    //   isEmailInvalid = true;
    //   emailErrorEl.innerText = "Email is required";
    //   console.log('bad email');
    // }

    // if (isEmailInvalid) {
    //   e.preventDefault();
    //   // Todo: inform user
    // }
  })

  // emailEl.addEventListener('input',(e) => {
  //   const email = e.target.value;

  //   if (!email) {
  //     emailErrorEl.innerText = "Email is required";
  //     console.log("email input test");
  //   } else {
  //     emailErrorEl.innerText = "";
  //   }
  // });



  // const formEl = document.querySelector('.register');
  // console.log(formEl);
  // const emailGroupEl = document.querySelector('.register__email');
  // const confirmGroupEl = document.querySelector('.register__confirm');
  // const emailInputEl = document.querySelector('.register-email__input');
  // const confirmInputEl = document.querySelector('.register-confirm__input');

  // formEl.addEventListener('submit', (event) => {
  //   let isInvalid = false;
  //   emailGroupEl.classList.remove('.register-email__error');
  //   // emailGroupEl.classList.remove('.register-email--invalid');
  //   confirmGroupEl.classList.remove('.register-confirm--invalid');

  //   if( !emailInputEl.value ) {
  //     emailGroupEl.classList.add('.register-email__error');
  //     // emailGroupEl.classList.add('.register-email--invalid');
  //     isInvalid = true;
  //   }

  //   if( !confirmInputEl.value ) {
  //     confirmGroupEl.classList.add('.register-confirm--invalid');
  //     isInvalid = true;
  //   }

  //   if( isInvalid ) {
  //     event.preventDefault();
  //   }
  // })


})();