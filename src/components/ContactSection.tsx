import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  businessHours: {
    days: string;
    hours: string;
  }[];
}

const ContactSection: React.FC = () => {
  const contactInfo: ContactInfo = {
    address: 'רחוב הרצל 123, תל אביב, ישראל',
    phone: '03-1234567',
    email: 'info@beta-law.co.il',
    businessHours: [
      { days: 'ראשון - חמישי', hours: '09:00 - 18:00' },
      { days: 'שישי', hours: '09:00 - 13:00' },
      { days: 'שבת', hours: 'סגור' }
    ]
  };

  return (
    <section className="contact-section py-16 px-4 md:px-8 font-heebo" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary relative">
          <span className="relative z-10 after:content-[''] after:absolute after:-bottom-2 after:right-0 after:w-full after:h-1 after:bg-secondary after:transform after:transition-all after:duration-300 hover:after:h-3">צור קשר</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="contact-info neumorphic-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-primary">פרטי התקשרות</h3>
            
            <div className="space-y-6">
              <div className="contact-item flex items-start">
                <div className="icon-wrapper">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-lg mb-1">כתובת המשרד</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              
              <div className="contact-item flex items-start">
                <div className="icon-wrapper">
                  <FaPhone className="text-secondary text-xl" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-lg mb-1">טלפון</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="contact-link relative inline-block overflow-hidden"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="contact-item flex items-start">
                <div className="icon-wrapper">
                  <FaEnvelope className="text-secondary text-xl" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-lg mb-1">דוא"ל</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="contact-link relative inline-block overflow-hidden"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="contact-item flex items-start">
                <div className="icon-wrapper">
                  <FaClock className="text-secondary text-xl" />
                </div>
                <div className="mr-4">
                  <h4 className="font-bold text-lg mb-1">שעות פעילות</h4>
                  <ul>
                    {contactInfo.businessHours.map((item, index) => (
                      <li key={index} className="flex justify-between max-w-xs">
                        <span className="font-medium">{item.days}:</span>
                        <span>{item.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="map-container glassmorphism-card rounded-2xl overflow-hidden relative h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <Image 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="מפת משרד עורכי דין ביתא"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10"></div>
              <div className="z-20 text-white text-center p-6 glassmorphism-inner-card rounded-xl">
                <FaMapMarkerAlt className="text-4xl mx-auto mb-4 text-secondary" />
                <h3 className="text-2xl font-bold mb-2">בקרו אותנו</h3>
                <p className="max-w-md mx-auto">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glassmorphism-card py-10 px-6 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">נשמח לעמוד לשירותכם</h3>
            <p className="mb-8 text-lg">צוות המשרד שלנו מוכן לענות על כל שאלה ולסייע בכל נושא משפטי</p>
            <a 
              href={`tel:${contactInfo.phone}`} 
              className="neumorphic-button inline-block py-3 px-8 rounded-full text-lg font-bold transition-all duration-300"
            >
              התקשרו עכשיו
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact-link {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .contact-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          right: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-secondary);
          transition: width 0.3s ease;
        }
        
        .contact-link:hover::after {
          width: 100%;
        }
        
        .contact-link:hover {
          color: var(--color-secondary);
          transform: translateY(-2px);
        }
        
        .icon-wrapper {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--neumorphic-bg);
          box-shadow: var(--neumorphic-shadow);
        }
        
        .neumorphic-card {
          background: var(--neumorphic-bg);
          box-shadow: var(--neumorphic-shadow);
          transition: all 0.3s ease;
        }
        
        .neumorphic-card:hover {
          box-shadow: var(--neumorphic-shadow-hover);
        }
        
        .glassmorphism-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .glassmorphism-inner-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        .neumorphic-button {
          background: var(--neumorphic-bg);
          box-shadow: var(--neumorphic-button-shadow);
          color: var(--color-primary);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .neumorphic-button:hover {
          box-shadow: var(--neumorphic-button-shadow-hover);
          transform: translateY(-3px);
        }
        
        .neumorphic-button:active {
          box-shadow: var(--neumorphic-button-shadow-active);
          transform: translateY(0);
        }
        
        .neumorphic-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, var(--color-primary-light), var(--color-secondary-light));
          transition: all 0.5s ease;
          z-index: -1;
          opacity: 0.7;
        }
        
        .neumorphic-button:hover::before {
          width: 100%;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;