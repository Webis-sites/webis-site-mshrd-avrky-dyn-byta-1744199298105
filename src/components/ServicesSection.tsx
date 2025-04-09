'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaFileContract, FaShieldAlt, FaTrademark, FaGavel, FaHandshake } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white/20 p-6 h-full
                shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex justify-end">
          <div className="text-4xl text-primary mb-4 glassmorphic-icon">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-right text-gray-800 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-right text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaShieldAlt />,
      title: "תאימות רגולטורית",
      description: "ייעוץ משפטי בנושא עמידה בתקנות המזון, תקני בטיחות, ותהליכי אישור מוצרים חדשים."
    },
    {
      icon: <FaTrademark />,
      title: "קניין רוחני",
      description: "הגנה על מותגים, פטנטים, סימני מסחר ומתכונים סודיים בתעשיית המזון."
    },
    {
      icon: <FaFileContract />,
      title: "חוזים עסקיים",
      description: "ניסוח וסקירת חוזים עם ספקים, מפיצים ושותפים עסקיים בתעשיית המזון והמשקאות."
    },
    {
      icon: <FaBalanceScale />,
      title: "תביעות אחריות מוצר",
      description: "ייצוג משפטי בתביעות הקשורות לאיכות מוצר, סימון לא נכון או נזקי בריאות."
    },
    {
      icon: <FaGavel />,
      title: "ליטיגציה מסחרית",
      description: "ייצוג בסכסוכים משפטיים, תביעות נזיקין והליכים משפטיים בתעשיית המזון."
    },
    {
      icon: <FaHandshake />,
      title: "מיזוגים ורכישות",
      description: "ליווי משפטי בעסקאות מיזוג, רכישה והשקעות בחברות בתעשיית המזון."
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 rtl" dir="rtl">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 relative inline-block"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">השירותים המשפטיים שלנו</span>
            <span className="absolute -bottom-2 right-0 w-full h-3 bg-secondary/30 -z-10 skew-x-3"></span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            משרד עורכי דין ביתא מתמחה במתן פתרונות משפטיים מקיפים לעסקים בתעשיית המזון
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;