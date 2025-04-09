'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const glassCardRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the glass card
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glassCardRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / 50;
      const moveY = (clientY - innerHeight / 2) / 50;
      
      glassCardRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 rtl" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="משרד עורכי דין ביתא"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 py-20 md:px-8 lg:px-12">
        <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
          {/* Text Content */}
          <motion.div 
            className="max-w-2xl text-center lg:text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="mb-6 font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              משרד עורכי דין מוביל <span className="text-secondary">בישראל</span>
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button 
                className="neumorphic-button relative overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
              >
                <span className="relative z-10">קבע תור עכשיו</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
              </button>
            </motion.div>
          </motion.div>

          {/* Glass Card */}
          <motion.div 
            ref={glassCardRef}
            className="glassmorphic-card w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">משרד עורכי דין ביתא</h3>
              <div className="h-10 w-10 rounded-full bg-secondary"></div>
            </div>
            
            <ul className="mb-6 space-y-3">
              {['ייעוץ משפטי מקצועי', 'ליווי אישי', 'ניסיון רב שנים', 'זמינות גבוהה'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center gap-2 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/50 text-xs">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-4 flex justify-center">
              <motion.div 
                className="neumorphic-small-button rounded-lg bg-white/20 px-4 py-2 text-sm text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                למידע נוסף
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements for Visual Interest */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-20 w-20 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-md"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50, 0],
                x: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;