import Modal from './Modal';
import { useRef} from 'react';


function Header() {
    const modalRef = useRef();
    return (
        <header className="header"> 
            <button 
            className="register-modal-btn" 
            onClick={() => modalRef.current.showModal()}>
                Register Here
            </button>
            <Modal modalRef={modalRef}></Modal>
            <div className="header-logo">
                  <img src="/image/logo.jpg" alt="logo"/>
                  <h1>How to Throw a Birthday Party? ...For Your Cat</h1>
            </div>
        </header>
    )
}

export default Header;