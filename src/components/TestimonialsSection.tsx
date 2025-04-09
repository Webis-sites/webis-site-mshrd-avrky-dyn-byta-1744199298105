'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

interface TestimonialProps {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
}

const testimonials: TestimonialProps[] = [
  {
    id: 1,
    quote: "משרד עורכי דין ביתא סייע לנו בהתמודדות עם סוגיות רגולטוריות מורכבות בתעשיית המזון. הם הבינו את הצרכים הייחודיים שלנו והציעו פתרונות יצירתיים שאפשרו לנו להתרחב לשווקים חדשים.",
    name: "דניאל כהן",
    position: "מנכ\"ל",
    company: "טעמי הארץ בע\"מ"
  },
  {
    id: 2,
    quote: "הליווי המשפטי שקיבלנו ממשרד עורכי דין ביתא היה מקצועי ביותר. הם עזרו לנו לנווט בסבך החוקים והתקנות של תעשיית המזון, מה שאפשר לנו להתמקד בפיתוח המוצרים שלנו.",
    name: "מיכל לוי",
    position: "סמנכ\"לית משפטית",
    company: "מאפיית הדגנים"
  },
  {
    id: 3,
    quote: "ההבנה העמוקה של צוות משרד עורכי דין ביתא בתעשיית המזון הייתה נכס עצום עבורנו. הם סייעו לנו בהשקת קו מוצרים חדש תוך עמידה בכל הדרישות הרגולטוריות, בזמן ובתקציב.",
    name: "יוסי אברהם",
    position: "בעלים",
    company: "טעמים טבעיים בע\"מ"
  },
  {
    id: 4,
    quote: "אנו עובדים עם משרד עורכי דין ביתא כבר חמש שנים, והם תמיד מספקים שירות מעולה. הידע והניסיון שלהם בתחום המזון חסכו לנו זמן וכסף רב בתהליכי אישור מוצרים.",
    name: "רונית שמעוני",
    position: "מנהלת פיתוח עסקי",
    company: "תבליני השף"
  },
  {
    id: 5,
    quote: "הצוות המשפטי של ביתא הוכיח את עצמו כשותף אסטרטגי אמיתי לעסק שלנו. הליווי המשפטי שלהם בתהליך המיזוג עם חברה בינלאומית היה מדויק, מקצועי ויעיל מאוד.",
    name: "אבי גולדשטיין",
    position: "סמנכ\"ל תפעול",
    company: "מזון בריא בע\"מ"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    startAutoPlay();
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section 
      className="testimonials-section py-16 px-4 md:px-8 relative overflow-hidden"
      dir="rtl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">לקוחות מספרים</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            מה לקוחותינו מתעשיית המזון אומרים על השירות המשפטי שקיבלו ממשרד עורכי דין ביתא
          </p>
        </div>

        <div className="relative glassmorphism-card p-8 rounded-2xl mb-12">
          <div className="absolute top-4 right-8 text-5xl text-primary opacity-30">
            <FaQuoteRight />
          </div>
          
          <div className="testimonial-carousel relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 }
                }}
                className="absolute w-full"
              >
                <div className="testimonial-card flex flex-col items-center text-center">
                  <div className="mb-6 px-4">
                    <p className="text-lg md:text-xl leading-relaxed mb-6">{testimonials[currentIndex].quote}</p>
                    <div className="neumorphic-divider my-6 w-16 h-1 mx-auto"></div>
                    <h4 className="text-xl font-bold text-primary">{testimonials[currentIndex].name}</h4>
                    <p className="text-secondary font-medium">{testimonials[currentIndex].position}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button 
            onClick={handlePrev}
            className="neumorphic-button p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            aria-label="הקודם"
          >
            <FaChevronRight className="text-primary text-xl" />
          </button>
          
          <div className="flex gap-2 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`עבור לחוות דעת ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
          
          <button 
            onClick={handleNext}
            className="neumorphic-button p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300"
            aria-label="הבא"
          >
            <FaChevronLeft className="text-primary text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;