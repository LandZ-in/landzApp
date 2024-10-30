import React, { useEffect, useRef } from 'react'
import '../profile.css'

const DialogComponent = ({ title, action, detail, isOpen, onClose }) => {
    const dialogRef = useRef(null);

    // Open dialog when the component mounts if it's supposed to be open
    useEffect(() => {
        if (isOpen && dialogRef.current) {
            dialogRef.current.showModal();
        } else if (!isOpen && dialogRef.current) {
            dialogRef.current.close();
        }
    }, [isOpen]);

    // Close dialog
    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
        onClose();  // Call the parent close handler
    };

    return (
        <dialog ref={dialogRef} className="component-modal-dialog" onClose={onClose}>
            <div className="modal-header">
                <h2>{title}</h2>
            </div>

            <div className="modal-body">
                {detail}
            </div>

            <div className="modal-footer">
                <button onClick={handleClose}>Cancel</button>
                <button>{action}</button>
            </div>
        </dialog>
    )
}

export default DialogComponent