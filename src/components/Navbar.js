// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaCalculator, FaInfoCircle } from 'react-icons/fa';

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
    align-items: center;
    background-color: #373A40;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.2rem 0.6rem 0rem 0.6rem;
    margin:0rem 0.5rem 1rem 0.5rem;
    z-index: 1000;
    border-radius:10rem 10rem 10rem 10rem;
    
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
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
`;

const NavLink = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #fff;
  padding: 0.5rem; /* Add padding around each NavLink */
  text-align: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-bottom: 0rem; /* Adjust spacing between icon and text */
  }
`;

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Logo>Ek Saath co.</Logo>
        <NavLinks>
          <NavLink>
            <Link to="/">
              <span>Home</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/project">
              <span>Project</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/estimator">
              <span>Estimator</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/about">
              <span>About</span>
            </Link>
          </NavLink>
        </NavLinks>
      </NavbarContainer>

      <MobileNavbarContainer>
        <Logo>Ek Saath co.</Logo>
      </MobileNavbarContainer>

      <BottomNavbarContainer>
        <BottomNavLinks>
          <NavLink>
            <Link to="/">
              <FaHome size={22} />
              <span>Home</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/project">
              <FaBuilding size={22} />
              <span>Project</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/estimator">
              <FaCalculator size={22} />
              <span>Estimator</span>
            </Link>
          </NavLink>
          <NavLink>
            <Link to="/about">
              <FaInfoCircle size={22} />
              <span>About</span>
            </Link>
          </NavLink>
        </BottomNavLinks>
      </BottomNavbarContainer>
    </>
  );
};

export default Navbar;
