// src/components/ContactFormModal.js
import React, { useState, useEffect } from 'react';
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



const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ModalSubtitle = styled.p`
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #d47756;
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

const CloseIcon = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

const IPAddress = () => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{display:'none'}}>
      <h1>Your IP Address is: {ipAddress}</h1>
    </div>
  );
};

const ContactFormModal = ({ isOpen, onClose }) => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    mobileNo: '',
    plotLocation: '',
    date: '',
    time: '',
    ipAddress: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchIpAddress();
    }
  }, [isOpen]);

  const fetchIpAddress = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setFormValues(prevValues => ({
        ...prevValues,
        ipAddress: data.ip,
      }));
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { fullName, mobileNo, plotLocation, date, time, ipAddress } = formValues;

    if (mobileNo.length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    const formData = {
      data: {
        fullName: fullName,
        mobileNo: mobileNo,
        plotLocation: plotLocation,
        date: date,
        time: time,
        ipAddress: ipAddress,
      },
    };

    try {
      await axios.post('https://sheetdb.io/api/v1/dt2pqqze9w85a', formData);
      setFormValues({
        fullName: '',
        mobileNo: '',
        plotLocation: '',
        date: '',
        time: '',
        ipAddress: '',
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
        <CloseIcon onClick={onClose}>&times;</CloseIcon>
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
            type="text"
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
          <IPAddress />
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