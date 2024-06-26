// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Design and develop by{' '}
        <FooterLink href='https://divpro.netlify.app' target='_blank' rel='noopener noreferrer'>
          Divepro
        </FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
