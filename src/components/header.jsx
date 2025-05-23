import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo-white.png'; // Adjust the path if needed
import '../components/styles/header.css';
export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${scrolled ? 'bg-black/20 backdrop-blur-sm' : ''}`}>
      <div className="header max-w-[1240px] mx-auto px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Navigation */}
        <motion.div 
          className="bg-transparent border border-white/20 px-8 py-3 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="nav-link flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className=" relative text-white text-sm font-semibold uppercase tracking-wide cursor-pointer flex items-center group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className='nav-link'> SERVICES </div>  <svg className="ml-1 w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>

              {isServicesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-4 bg-black/90 backdrop-blur-sm rounded-md min-w-[160px] z-50 text-white"
              >
                  <div className="nav-link hover:text-[#6B70FF] text-center">Podcast Production</div>
                  <div className="nav-link hover:text-[#6B70FF] text-center ">Content Strategy</div>
                  <div className="nav-link hover:text-[#6B70FF] text-center">Marketing</div>
                </motion.div>
              )}
            </div>

            {/* Static Links */}
            <Link to="/about" className="nav-link text-white text-sm font-semibold uppercase tracking-wide">
              ABOUT US
            </Link>
            <Link to="/case-studies" className="nav-link text-white text-sm font-semibold uppercase tracking-wide">
              CASE STUDIES
            </Link>
          </nav>
        </motion.div>

        {/* Book a Call CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="contact-header-btn border border-white text-white text-sm font-semibold uppercase tracking-wide px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all"
          >
            BOOK A CALL
          </Link>
        </motion.div>
      </div>
    </header>
  );
}