import RegisterForm from "./RegisterForm";
import {useState} from 'react';

function Register() {
    const [username, setUsername] = useState('');

  function onRegister(name) {
    setUsername(name)
  }

    return (
        <>
        <h2>{username && <p>Hello {username}</p>}</h2>
        <RegisterForm onRegister={onRegister}></RegisterForm>
        </>
    );
  }
  
  export default Register;