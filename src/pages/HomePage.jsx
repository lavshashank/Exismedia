import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/hero';
import StarsCanvas from '../components/starCanvas';
import CustomCursor from '../components/customCusor';
import PortfolioClients from '../components/portfolio-section';

// Additional decorative elements components
const GeometricShapes = () => {
  return (
    <>
      {/* Triangle shape top left */}
      <div className="absolute top-1/4 left-10 w-40 h-40 opacity-5 animate-rotate-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0L100 100H0L50 0Z" fill="white" />
        </svg>
      </div>
      
      {/* Circle shape bottom right */}
      <div className="absolute bottom-40 right-20 w-56 h-56 opacity-5 animate-pulse-slow">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="white" />
        </svg>
      </div>
    </>
  );
};

function HomePage() {
  // Disable right-click to prevent context menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', handleContextMenu);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark">
      {/* Background elements */}
      <StarsCanvas />
      <GeometricShapes />
      
      {/* Custom cursor */}
      <CustomCursor />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <PortfolioClients />
      </div>
    </div>
  );
}

export default HomePage;