// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const ContactButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f7c08a;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f57c00;
  }
`;

const Navbar = ({ openModal }) => {
  return (
    <Nav>
      <Logo>Construction Co.</Logo>
      <ContactButton onClick={openModal}>Contact Us</ContactButton>
    </Nav>
  );
};

export default Navbar;
