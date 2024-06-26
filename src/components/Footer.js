// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  text-align: center;
  padding: 1rem 0;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Design and develop by <a href='https://divpro.netlify.app' style={{color: 'white'}}>Divepro</a></p>
    </FooterContainer>
  );
};

export default Footer;
