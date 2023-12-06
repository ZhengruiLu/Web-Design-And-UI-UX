import RegisterForm from "./RegisterForm";
import Button from "./Button";

function Modal({
    onClick
    }) 
    {
    return (
        <dialog className="modal" ref={modalRef}>
        <h3>Subscribe to the Latest Events!</h3>
          <RegisterForm></RegisterForm>
          <Button type="button" visual="button" className="close" id="register__close" onClick={onClick}>Close</Button>
        </dialog>
    )
}

export default Modal;