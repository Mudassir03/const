// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FaHome, FaProjectDiagram, FaCalculator, FaInfoCircle } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--primary-color);
  color: #fff;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavbarContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    z-index: 1000;
  }
`;

const BottomNavbarContainer = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    background-color: var(--primary-color);
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 0;
    z-index: 1000;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000; /* Black color for the logo text */
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomNavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #fff;
  padding: 0.5rem; /* Add padding around each NavLink */

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-bottom: 0.5rem; /* Adjust spacing between icon and text */
  }
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo>Ek Saath co.</Logo>
        <NavLinks>
          <NavLink>
            <FaHome size={24} />
            <span>Home</span>
          </NavLink>
          <NavLink>
            <FaProjectDiagram size={24} />
            <span>Our Project</span>
          </NavLink>
          <NavLink>
            <FaCalculator size={24} />
            <span>Cost Estimator</span>
          </NavLink>
          <NavLink>
            <FaInfoCircle size={24} />
            <span>About Us</span>
          </NavLink>
        </NavLinks>
      </NavbarContainer>

      <MobileNavbarContainer>
        <Logo>Ek Saath co.</Logo>
      </MobileNavbarContainer>

      <BottomNavbarContainer>
        <BottomNavLinks>
          <NavLink>
            <FaHome size={24} />
            <span>Home</span>
          </NavLink>
          <NavLink>
            <FaProjectDiagram size={24} />
            <span>Our Project</span>
          </NavLink>
          <NavLink>
            <FaCalculator size={24} />
            <span>Cost Estimator</span>
          </NavLink>
          <NavLink>
            <FaInfoCircle size={24} />
            <span>About Us</span>
          </NavLink>
        </BottomNavLinks>
      </BottomNavbarContainer>
    </>
  );
};

export default Navbar;
