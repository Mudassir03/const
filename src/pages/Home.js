// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';

const HeroSection = styled.section`
  background-color: #f5f5f5;
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

const Home = () => {
  return (
    <>
      <HeroSection>
        <Title>Welcome to Construction Co.</Title>
        <Subtitle>We build dreams into reality.</Subtitle>
        <Button>Contact Us</Button>
      </HeroSection>

      <ServicesSection>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServiceGrid>
          <ServiceItem>
            <ServiceImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUAtNXUp93BmI651NW9FJ9glRwrRvhjJdBw&usqp=CAU" alt="Construction" />
            <ServiceTitle>Construction</ServiceTitle>
            <ServiceDescription>We specialize in quality construction services.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage src="data:image/jpeg;base64,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" alt="Renovation" />
            <ServiceTitle>Renovation</ServiceTitle>
            <ServiceDescription>Transform your space with our renovation expertise.</ServiceDescription>
          </ServiceItem>
          <ServiceItem>
            <ServiceImage src="data:image/jpeg;base64,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" alt="Design" />
            <ServiceTitle>Design</ServiceTitle>
            <ServiceDescription>Create stunning designs for your dream projects.</ServiceDescription>
          </ServiceItem>
        </ServiceGrid>
      </ServicesSection>

      <Footer />
    </>
  );
};

export default Home;
