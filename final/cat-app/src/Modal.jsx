import RegisterForm from "./RegisterForm";

function Modal({
    modalRef
    }) 
    {
    return (
        <dialog className="modal" ref={modalRef}>
        <h3>Subscribe to the Latest Events!</h3>
          <RegisterForm onClick={() => modalRef.current.close()}></RegisterForm>
        </dialog>
    )
}

export default Modal;