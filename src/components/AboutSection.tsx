'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaBalanceScale, FaUtensils, FaAward, FaHandshake } from 'react-icons/fa';
import CountUp from 'react-countup';

interface StatisticProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay: number;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glassmorphism p-6 rounded-xl text-center flex flex-col items-center"
    >
      <div className="text-primary text-3xl mb-3">{icon}</div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-3xl md:text-4xl font-bold mb-1 text-gray-800"
      >
        <CountUp end={value} duration={2.5} />+
      </motion.div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    })
  };

  return (
    <section dir="rtl" className="py-16 md:py-24 px-4 relative overflow-hidden" id="about">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 -mr-32 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/10 -ml-40 -mb-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="neumorphic-container p-2 rounded-2xl relative">
              <div className="glassmorphism rounded-xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="משרד עורכי דין ביתא - מומחים בתעשיית המזון"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 neumorphic p-4 rounded-xl bg-white/90 backdrop-blur-sm">
                <FaBalanceScale className="text-4xl text-primary" />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="md:w-1/2"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 relative inline-block"
              variants={fadeInUpVariants}
              custom={0}
            >
              אודות משרד עורכי דין ביתא
              <div className="h-1 w-3/4 bg-primary mt-2 rounded-full"></div>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              variants={fadeInUpVariants}
              custom={1}
            >
              משרד עורכי דין ביתא מתמחה בייעוץ משפטי לחברות בתעשיית המזון והמשקאות. עם ניסיון של למעלה מ-15 שנה, אנו מספקים פתרונות משפטיים מקיפים המותאמים לצרכים הייחודיים של עסקים בתחום המזון.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeInUpVariants}
              custom={2}
            >
              הצוות המקצועי שלנו מורכב ממומחים בתחומי הרגולציה, בטיחות מזון, קניין רוחני, חוזים מסחריים וליטיגציה. אנו מלווים את לקוחותינו בכל שלב, מהקמת העסק ועד לפתרון סכסוכים מורכבים.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={fadeInUpVariants}
              custom={3}
            >
              <div className="neumorphic-button px-4 py-2 rounded-lg flex items-center gap-2">
                <FaUtensils className="text-primary" />
                <span>רגולציית מזון</span>
              </div>
              <div className="neumorphic-button px-4 py-2 rounded-lg flex items-center gap-2">
                <FaHandshake className="text-primary" />
                <span>חוזים מסחריים</span>
              </div>
              <div className="neumorphic-button px-4 py-2 rounded-lg flex items-center gap-2">
                <FaAward className="text-primary" />
                <span>קניין רוחני</span>
              </div>
            </motion.div>

            <motion.button
              className="glassmorphism-button px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUpVariants}
              custom={4}
            >
              צור קשר לייעוץ
            </motion.button>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            המספרים מדברים בעד עצמם
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Statistic 
              value={15} 
              label="שנות ניסיון" 
              icon={<FaBalanceScale />} 
              delay={0.1} 
            />
            <Statistic 
              value={200} 
              label="לקוחות מרוצים" 
              icon={<FaHandshake />} 
              delay={0.3} 
            />
            <Statistic 
              value={50} 
              label="תיקים משפטיים" 
              icon={<FaAward />} 
              delay={0.5} 
            />
            <Statistic 
              value={95} 
              label="אחוזי הצלחה" 
              icon={<FaUtensils />} 
              delay={0.7} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;