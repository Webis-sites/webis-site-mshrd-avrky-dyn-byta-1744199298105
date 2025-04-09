'use client';

import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import clsx from 'clsx';

// Placeholder components - replace with your actual components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-lg bg-white/70 dark:bg-dark/70 border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm">
    <div className="container mx-auto flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-2xl font-bold text-primary"
      >
        משרד עורכי דין ביתא
      </motion.div>
      <div className="hidden md:flex space-x-6 space-x-reverse">
        <a href="/" className="neumorphic-link">דף הבית</a>
        <a href="/about" className="neumorphic-link">אודות</a>
        <a href="/services" className="neumorphic-link">שירותים</a>
        <a href="/team" className="neumorphic-link">הצוות שלנו</a>
        <a href="/contact" className="neumorphic-link">צור קשר</a>
      </div>
      <div className="md:hidden">
        <button className="neumorphic-button p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="mt-auto py-8 px-6 backdrop-blur-lg bg-white/70 dark:bg-dark/70 border-t border-gray-200/30 dark:border-gray-700/30">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">משרד עורכי דין ביתא</h3>
          <p className="text-gray-600 dark:text-gray-300">
            אנו מספקים ייעוץ משפטי מקצועי ואיכותי בתחומים מגוונים.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">צור קשר</h3>
          <p className="text-gray-600 dark:text-gray-300">
            רחוב הדוגמה 123, תל אביב<br />
            טלפון: 03-1234567<br />
            דוא"ל: info@beta-law.co.il
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">שעות פעילות</h3>
          <p className="text-gray-600 dark:text-gray-300">
            ימים א'-ה': 9:00-18:00<br />
            יום ו': 9:00-13:00<br />
            שבת: סגור
          </p>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-200/30 dark:border-gray-700/30 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} משרד עורכי דין ביתא. כל הזכויות שמורות.</p>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'משרד עורכי דין ביתא',
  description = 'משרד עורכי דין מוביל המתמחה בדיני משפחה, נדל"ן, ליטיגציה ומשפט מסחרי',
  keywords = 'עורך דין, משרד עורכי דין, ייעוץ משפטי, דיני משפחה, נדל"ן, ליטיגציה, משפט מסחרי',
}) => {
  const router = useRouter();
  
  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background-light to-background dark:from-background-dark dark:to-background-darker" dir="rtl" lang="he">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://beta-law.co.il${router.asPath}`} />
        <meta property="og:image" content="https://beta-law.co.il/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 container mx-auto">
        <motion.div
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="glass-container p-8 rounded-2xl"
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
      
      {/* Floating contact button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="/contact" 
          className="glass-button flex items-center justify-center w-14 h-14 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary transition-all duration-300"
          aria-label="צור קשר"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Layout;