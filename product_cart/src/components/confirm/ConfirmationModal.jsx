import React from 'react';
import './confirmationModal.css';

const ConfirmationModal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Your Order is Confirmed!</h2>
                <button className="ok-button" onClick={onClose}>OK</button>
            </div>
        </div>
    );
};

export default ConfirmationModal;
