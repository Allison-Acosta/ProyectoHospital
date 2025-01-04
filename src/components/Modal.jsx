import React from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, onClose }) {
    return ReactDOM.createPortal(
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
            }}>
                {children}
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.getElementById('modal-root') // Nodo del portal
    );
}

export default Modal;