import RegisterForm from "./RegisterForm";
import {useState} from 'react';
import './modal.css';
function Modal({
    modalRef
    }) 
    {

  const [username, setUsername] = useState('');

  function onRegister(name) {
    setUsername(name)
  }
    return (
      <dialog className="modal" ref={modalRef}>
        <button className="close-button" onClick={() => modalRef.current.close()}>
          Close
        </button>
        <h2>{username && <p>Hello {username}</p>}</h2>
        <RegisterForm onRegister={onRegister}></RegisterForm>
      </dialog>
    )
}

export default Modal;