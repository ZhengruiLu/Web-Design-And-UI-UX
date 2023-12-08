/* eslint-disable react/prop-types */
import Modal from './Modal';
import { useRef} from 'react';
import './header.css';


function Header({ toggleTheme }) {
    const modalRef = useRef();
    return (
        <header className="header"> 
            <div className='header-btn-div'>
                {/* Theme toggle button */}
            <button className="theme-toggle" onClick={toggleTheme}>
                Theme-
            </button>
            
            <button 
            className="register-modal-btn" 
            onClick={() => modalRef.current.showModal()}>
                Sign Up
            </button>
            </div>
            
            <Modal modalRef={modalRef}></Modal>
            <div className="header-logo">
                  <img src="/image/logo.jpg" alt="logo"/>
                  <h1>How to Throw a Birthday Party? ...For Your Cat</h1>
            </div>
        </header>
    )
}

export default Header;