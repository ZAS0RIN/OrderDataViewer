import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const Error = ({ message, onClose}) => {
  if (!message) return null;

  return (
     <ToastContainer
          className="p-3"
          position={'middle-center'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={() => onClose()}>
              <Toast.Header>
                <strong className="me-auto">Ошибка</strong>
              </Toast.Header>
              <Toast.Body>{message}</Toast.Body>
            </Toast>
    </ToastContainer>
  )
}

export default Error;
