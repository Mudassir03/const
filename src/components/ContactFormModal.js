// src/components/ContactFormModal.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ModalSubtitle = styled.p`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #d9745c;
  }
`;

const PrivacyPolicy = styled.p`
  font-size: 0.8rem;
  color: #777;
  margin-top: 1rem;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    mobileNo: '',
    plotLocation: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, mobileNo, plotLocation } = formValues;

    // Validate mobile number length
    if (mobileNo.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    // Prepare data object for SheetDB API
    const formData = {
      data: {
        fullName: fullName,
        mobileNo: mobileNo,
        plotLocation: plotLocation,
      },
    };

    try {
      // Send POST request to SheetDB API
      await axios.post('https://sheetdb.io/api/v1/dt2pqqze9w85a', formData);
      // Reset form values and close modal on successful submission
      setFormValues({
        fullName: '',
        mobileNo: '',
        plotLocation: '',
      });
      setError('');
      onClose();
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Book Free Appointment</ModalTitle>
        <ModalSubtitle>Quality construction at affordable price</ModalSubtitle>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formValues.fullName}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="mobileNo"
            placeholder="Mobile No."
            value={formValues.mobileNo}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="plotLocation"
            placeholder="Plot Location"
            value={formValues.plotLocation}
            onChange={handleChange}
            required
          />
          {error && <ErrorText>{error}</ErrorText>}
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <PrivacyPolicy>
          By submitting this form, you accept our privacy policy.
        </PrivacyPolicy>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactFormModal;
