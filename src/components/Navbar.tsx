'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';

interface NavbarProps {
  logo?: string;
  logoAlt?: string;
}

const Navbar: React.FC<NavbarProps> = ({ 
  logo = '/logo-placeholder.svg', 
  logoAlt = 'משרד עורכי דין ביתא' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'שירותים', href: '/services' },
    { name: 'הזמנת תור', href: '/booking' },
  ];

  return (
    <nav 
      className={`
        fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300
        ${scrolled ? 'glassmorphism-scrolled py-2' : 'glassmorphism py-4'}
        rtl
      `}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="relative z-10 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={logo} 
              alt={logoAlt} 
              className="h-10 md:h-12 w-auto" 
            />
            <span className="font-heading mr-2 text-lg md:text-xl font-bold text-primary">
              משרד עורכי דין ביתא
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="neumorphic-link px-4 py-2 mx-1 rounded-lg text-gray-700 font-medium hover:text-primary transition-all"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
            
            <motion.a
              href="/booking"
              className="neumorphic-button mr-4 px-6 py-2 rounded-lg bg-primary text-white flex items-center font-bold"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(212, 165, 165, 0.3), 0 4px 6px -2px rgba(212, 165, 165, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt className="ml-2" />
              קבע תור עכשיו
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden neumorphic-button p-2 rounded-lg"
            onClick={toggleMenu}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <IoMdClose className="h-6 w-6 text-primary" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6 text-primary" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-full right-0 left-0 glassmorphism-mobile py-4 px-4 shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : -10,
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col space-y-3">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="neumorphic-link-mobile px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-primary transition-all"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </motion.a>
          ))}
          
          <motion.a
            href="/booking"
            className="neumorphic-button-mobile mt-2 px-6 py-3 rounded-lg bg-primary text-white flex items-center justify-center font-bold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsOpen(false)}
          >
            <FaCalendarAlt className="ml-2" />
            קבע תור עכשיו
          </motion.a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;