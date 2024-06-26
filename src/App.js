// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ContactFormModal from './components/ContactFormModal';
import GlobalStyle from './globalStyles';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home openModal={openModal} />
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
      <Footer />
    </>
  );
}

export default App;
