// import Button from "./Button";
import {useId, useState} from 'react';

function usernameIsValid(name) {
  return !!name;
}

function RegisterForm({
    onClick, onRegister
    }) {
        const [username, setUsername] = useState('');
        const id = useId();
        const [usernameIsMissing, setUsernameIsMissing] = useState(false);
    return (
        <form 
        className="register-form" 
        onSubmit={(e) => {
            e.preventDefault();
            setUsernameIsMissing(!usernameIsValid(username));
            if (usernameIsValid(username)) {
              onRegister(username);
              setUsername('');
            }  
        }}
        >
        {/* name */}
          <div className="register__name">
            <label htmlFor={`${id}-username`}>
                Name: <span className="form-reminder">*</span>
            </label>
            <span>* = required</span>
            {usernameIsMissing && <div>
              Name is required
            </div>}
            <input 
            className = "register-name__input" 
            id={`${id}-username`} 
            onInput={(e) => {
              setUsername(e.target.value);
              setUsernameIsMissing(!usernameIsValid(e.target.value));
            }}
            value={username}
            // type="text" name="name" 
            // placeholder="this field is required"
            />
          </div>
        {/*  */}
        <div className="register__email register-email">
          <label htmlFor={`${id}-email`}>Email: <span className="form-reminder">*required</span></label>
          <div className="register-email__error"></div>
          <input name="email" className="register-email__input" id={`${id}-email`} type="text" />
        </div>

        {/* <div className="register__confirm register-confirm">
          <label htmlFor="confirm">Confirm Email: <span className="form-reminder">*required</span></label>
          <span className="register-confirm__error">
          </span>
          <input name="confirm" className="register-confirm__input" id="confirm" type="text"/>
        </div> */}
        <button type="submit" className="register__submit" >Register</button>

      </form>
    );
}

export default RegisterForm;