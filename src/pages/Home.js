// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';


const HeroSection = styled.section`
  background-color: rgba(245, 245, 245, 0.8);
  padding: 4rem 0;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #f7c08a;
  color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f57c00;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ServicesSection = styled.section`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 4rem 0;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const ServiceItem = styled.div`
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #777;
`;

const Home = ({ openModal }) => {
  return (
    <>
      <HeroSection>
        <Title>Welcome to Construction Co.</Title>
        <Subtitle>We build dreams into reality.</Subtitle>
        <Button onClick={openModal}>Contact Us</Button>
      </HeroSection>

      <ServicesSection>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServiceGrid>
          <ServiceItem>
            <ServiceImage src="/images/construction.jpg" alt="Construction" />
            <ServiceTitle>Construction</ServiceTitle>
            <ServiceDescription>We specialize in quality construction services.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage src="/images/renovation.jpg" alt="Renovation" />
            <ServiceTitle>Renovation</ServiceTitle>
            <ServiceDescription>Transform your space with our renovation expertise.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage src="/images/design.jpg" alt="Design" />
            <ServiceTitle>Design</ServiceTitle>
            <ServiceDescription>Create stunning designs for your dream projects.</ServiceDescription>
          </ServiceItem>
        </ServiceGrid>
      </ServicesSection>
    </>
  );
};

export default Home;
