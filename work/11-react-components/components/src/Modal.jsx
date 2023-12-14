import Button from "./Button";

function Modal({
    modalRef
    }) 
    {
    return (
        <dialog className="modal" ref={modalRef}>
        <h3>Subscribe to the Latest Events!</h3>
                <form className="register-form" action="/subscribe" method="POST">
                  <div className="register__email register-email">
                    <label htmlFor="email">Email: <span className="form-reminder">*required</span></label>
                    <div className="register-email__error"></div>
                    <input name="email" className="register-email__input" id="email" type="text" />
                  </div>
        
                  <div className="register__confirm register-confirm">
                    <label htmlFor="confirm">Confirm Email: <span className="form-reminder">*required</span></label>
                    <span className="register-confirm__error">
                    </span>
                    <input name="confirm" className="register-confirm__input" id="confirm" type="text"/>
                  </div>
                  <Button type="submit" visual="link" className="register__submit" >Register</Button>
                  <Button type="button" visual="link" className="close" id="register__close" onClick={() => modalRef.current.close()}>Close</Button>
                </form>
        </dialog>
    )
}

export default Modal;