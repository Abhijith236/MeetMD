import React from 'react';

const Modal =({open,onClose})=> {
    if(!open) return null;
    return(
        <div className="overlay">
            <div className="modalContainer">
                Hi
            </div>
        </div>
    )
}
export default Modal;