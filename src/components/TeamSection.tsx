'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  image: string;
}

const TeamSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "עו״ד רונית לוי",
      role: "שותפה בכירה",
      specialization: "דיני מזון ורגולציה",
      bio: "מתמחה בייעוץ משפטי לחברות מזון בנושאי רגולציה, תקינה ובטיחות מזון. בעלת ניסיון של למעלה מ-15 שנה בליווי יצרני מזון מובילים.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "עו״ד אמיר כהן",
      role: "שותף מייסד",
      specialization: "קניין רוחני במזון",
      bio: "מומחה בהגנה על פטנטים, סימני מסחר וסודות מסחריים בתעשיית המזון. מלווה סטארט-אפים בתחום הפודטק וחברות מזון ותיקות.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "עו״ד מיכל ברקוביץ",
      role: "ראש מחלקת ליטיגציה",
      specialization: "תביעות צרכניות",
      bio: "מתמחה בייצוג חברות מזון בתביעות ייצוגיות וסכסוכים צרכניים. בעלת הצלחות מוכחות בהגנה על לקוחות מול רשויות רגולטוריות.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "עו״ד יוסף אלון",
      role: "שותף",
      specialization: "יבוא ויצוא מזון",
      bio: "מומחה בדיני סחר בינלאומי, מכסים והיבטים משפטיים של יבוא ויצוא מזון. מלווה יבואנים ויצואנים בהתמודדות עם רגולציה מקומית ובינלאומית.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "עו״ד שירה גולדשטיין",
      role: "ראש מחלקת חוזים",
      specialization: "הסכמי הפצה ושיווק",
      bio: "מתמחה בניסוח וליווי הסכמים מסחריים בתעשיית המזון, כולל הסכמי הפצה, זכיינות ושיתופי פעולה אסטרטגיים בין יצרנים למשווקים.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800 relative inline-block">
            <span className="relative z-10">הצוות המשפטי שלנו</span>
            <span className="absolute -bottom-2 right-0 w-full h-3 bg-secondary/30 -z-10 transform -rotate-1"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            צוות עורכי הדין המוביל שלנו מתמחה בכל ההיבטים המשפטיים של תעשיית המזון,
            מרגולציה ותקינה ועד קניין רוחני והסכמים מסחריים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: member.id * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div 
                className={`
                  h-full rounded-2xl overflow-hidden transition-all duration-500
                  ${hoveredCard === member.id 
                    ? 'scale-[1.02] shadow-[0_20px_50px_rgba(212,165,165,0.3)]' 
                    : 'scale-100 shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
                  }
                  bg-white/80 backdrop-blur-md border border-white/40
                `}
              >
                <div className="relative h-80 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ 
                      backgroundImage: `url(${member.image})`,
                      transform: hoveredCard === member.id ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 w-full p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-white/90 text-sm">{member.specialization}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                  
                  <div className="flex space-x-4 space-x-reverse justify-end">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-primary shadow-[0_4px_10px_rgba(212,165,165,0.5)]"
                    >
                      <FaPhone size={16} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-secondary shadow-[0_4px_10px_rgba(78,205,196,0.5)]"
                    >
                      <FaEnvelope size={16} />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-blue-600 shadow-[0_4px_10px_rgba(59,130,246,0.5)]"
                    >
                      <FaLinkedinIn size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Neumorphic effect */}
              <div 
                className={`
                  absolute -z-10 inset-0 rounded-2xl transition-all duration-500
                  ${hoveredCard === member.id 
                    ? 'opacity-100 blur-md' 
                    : 'opacity-0 blur-sm'
                  }
                  bg-gradient-to-br from-primary/20 to-secondary/20
                `}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;