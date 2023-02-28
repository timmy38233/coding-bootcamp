import './Modal.scss';


function Modal({ children, setModalPageId }) {

    return (
        <div className="Modal">
            <button className="Modal__close" onClick={e => setModalPageId(null)}>✕</button>
            <div className="Modal__children">
                {children}
            </div>
        </div>
    )
}

export default Modal