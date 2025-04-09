'use client';

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FooterLink {
  title: string;
  href: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationLinks: FooterLink[] = [
    { title: 'דף הבית', href: '/' },
    { title: 'אודות', href: '/about' },
    { title: 'שירותים', href: '/services' },
    { title: 'הזמנת פגישה', href: '/booking' },
    { title: 'צור קשר', href: '/contact' },
    { title: 'מאמרים', href: '/articles' },
  ];

  const legalLinks: FooterLink[] = [
    { title: 'תנאי שימוש', href: '/terms' },
    { title: 'מדיניות פרטיות', href: '/privacy' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: 'https://facebook.com', label: 'פייסבוק' },
    { icon: <FaTwitter />, href: 'https://twitter.com', label: 'טוויטר' },
    { icon: <FaInstagram />, href: 'https://instagram.com', label: 'אינסטגרם' },
    { icon: <FaLinkedinIn />, href: 'https://linkedin.com', label: 'לינקדאין' },
  ];

  const contactInfo = [
    { icon: <FaPhone />, text: '03-1234567', href: 'tel:+97231234567' },
    { icon: <FaEnvelope />, text: 'info@betalaw.co.il', href: 'mailto:info@betalaw.co.il' },
    { icon: <FaMapMarkerAlt />, text: 'רחוב הרצל 123, תל אביב', href: 'https://maps.google.com/?q=הרצל+123+תל+אביב' },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 text-right rtl" dir="rtl">
      {/* Glassmorphism decorative elements */}
      <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="glassmorphism-card mb-8 rounded-2xl bg-white/40 p-8 backdrop-blur-md">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo and about */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">משרד עורכי דין ביתא</h2>
              <p className="text-gray-600">
                אנו מספקים ייעוץ משפטי מקצועי ואיכותי בתחומים מגוונים, תוך שימת דגש על יחס אישי ומסירות לכל לקוח.
              </p>
              
              {/* Social links */}
              <div className="mt-4 flex space-x-3 space-x-reverse">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="neumorphic-button flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-700 transition-all hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Navigation links */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">ניווט מהיר</h3>
              <ul className="space-y-2">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="nav-link relative inline-block text-gray-600 transition-all hover:text-primary"
                      whileHover={{ x: 5 }}
                    >
                      {link.title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact information */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">צור קשר</h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 space-x-reverse">
                    <span className="text-primary">{item.icon}</span>
                    <a href={item.href} className="text-gray-600 hover:text-primary">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-800">הרשמה לעדכונים</h3>
              <p className="mb-4 text-gray-600">הירשמו לניוזלטר שלנו לקבלת עדכונים ומאמרים משפטיים</p>
              
              <form className="mt-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="כתובת אימייל"
                    className="neumorphic-input w-full rounded-lg border border-gray-200 bg-white/70 px-4 py-2 text-right focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                  />
                  <motion.button
                    type="submit"
                    className="glassmorphism-button mt-2 w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-white transition-all hover:from-primary/90 hover:to-primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    הרשמה
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="flex flex-col items-center justify-between border-t border-gray-200 pt-6 md:flex-row">
          <div className="mb-4 flex space-x-4 space-x-reverse md:mb-0">
            {legalLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="text-sm text-gray-500 hover:text-primary"
              >
                {link.title}
              </a>
            ))}
          </div>
          
          <p className="text-center text-sm text-gray-500">
            © {currentYear} משרד עורכי דין ביתא. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;