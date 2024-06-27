import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import Project from './pages/Project';
import Estimator from './pages/Estimator';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyle from './globalStyles';
import ContactFormModal from './components/ContactFormModal'; // Ensure you import the ContactFormModal component
import './transitions.css'; // Import the CSS file for transitions

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <GlobalStyle />
      <div>
        <Navbar />
        <RouteChangeTransition>
          <Routes>
            {/* Route for Home */}
            <Route path="/" element={<Home openModal={openModal} />} />
            {/* Other routes */}
            <Route path="/project" element={<Project />} />
            <Route path="/estimator" element={<Estimator />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RouteChangeTransition>
        <Footer />

        {/* Render ContactFormModal conditionally based on isModalOpen state */}
        {isModalOpen && <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />}
      </div>
    </Router>
  );
};

const RouteChangeTransition = ({ children }) => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
