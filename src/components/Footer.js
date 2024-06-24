// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FooterSection = styled.div`
  margin: 1rem 0;

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FooterLink = styled.a`
  color: #f7c08a;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f57c00;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <p>We are a leading construction company providing top-notch services.</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <p>Email: info@constructionco.com</p>
          <p>Phone: +123 456 7890</p>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Follow Us</FooterTitle>
          <p>
            <FooterLink href="#">Facebook</FooterLink> | <FooterLink href="#">Twitter</FooterLink> | <FooterLink href="#">Instagram</FooterLink>
          </p>
          
        </FooterSection>
       
      </FooterContent>
      <p >
            Design and develop by <a href='divpro.netlify.app' style={{color:'white'}} >Divepro</a>
          </p>
    </FooterContainer>
  );
};

export default Footer;
