// src/components/ContactModal.js
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: 'none',
    padding: '2rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#root');

const ModalContent = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #777;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input[type='text'],
    input[type='tel'] {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: #f7c08a;
      }
    }

    button {
      width: 100%;
      padding: 1rem;
      background-color: #f7c08a;
      color: #333;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background-color: #f57c00;
      }
    }

    .privacy-policy {
      font-size: 0.8rem;
      color: #777;
      margin-top: 1rem;
      text-align: left;
    }
  }
`;

const ContactModal = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Book Free Appointment"
    >
      <ModalContent>
        <h2>Book Free Appointment</h2>
        <p>Quality construction at affordable price</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Mobile No." required />
          <input type="text" placeholder="Plot Location" required />
          <button type="submit">Submit</button>
        </form>
        <p className="privacy-policy">
          By submitting, you accept our{' '}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>
          .
        </p>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
