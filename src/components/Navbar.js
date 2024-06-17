// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContactModal from './ContactModal';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContactButton = styled.button`
  background: #f7c08a;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: #f57c00;
  }
`;

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Nav>
        <Logo>EK SATH Co.</Logo>
        <ContactButton onClick={openModal}>Contact Us</ContactButton>
      </Nav>
      <ContactModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Navbar;
