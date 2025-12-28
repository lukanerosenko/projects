
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PriceCalculator from './components/PriceCalculator';
import ReadyProjects from './components/ReadyProjects';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero onOrderClick={openModal} />
        <About />
        <PriceCalculator onOrderClick={openModal} />
        <ReadyProjects onOrderClick={openModal} />
      </main>
      
      <Footer />
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default App;
