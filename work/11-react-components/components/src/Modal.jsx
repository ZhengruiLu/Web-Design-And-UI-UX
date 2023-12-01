function Modal({
    modalRef
    }) 
    {
    return (
        <dialog className="modal" ref={modalRef}>
        This is my modal Content
        <button onClick={() => modalRef.current.close()}>Close</button>
        </dialog>
    )
}

export default Modal;