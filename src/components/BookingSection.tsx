'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCalendar } from 'react-icons/fi';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const BookingSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' },
    blur: { scale: 1, boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 10px 25px rgba(78, 205, 196, 0.3)' },
    tap: { scale: 0.98 },
    initial: { scale: 1 }
  };

  return (
    <section className="booking-section py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary/90 to-primary/70 backdrop-blur-md" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card rounded-3xl overflow-hidden backdrop-blur-lg bg-white/20 border border-white/30 shadow-neomorphic">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">קבע פגישת ייעוץ</h2>
                <p className="text-lg mb-8 text-gray-700">
                  השאירו פרטים ואנו נחזור אליכם בהקדם לתיאום פגישה עם עורך דין מומחה
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="success-message p-6 rounded-xl bg-green-50/70 backdrop-blur-sm border border-green-200 text-green-800 text-center"
                  >
                    <h3 className="text-xl font-bold mb-2">תודה על פנייתך!</h3>
                    <p>נציג מטעמנו יצור איתך קשר בהקדם.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="form-group">
                      <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                        שם מלא
                      </label>
                      <div className="relative">
                        <motion.div
                          whileFocus="focus"
                          whileTap="focus"
                          variants={inputVariants}
                          className="input-wrapper"
                        >
                          <FiUser className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'שדה חובה' })}
                            className={`w-full py-3 px-12 rounded-xl bg-white/50 backdrop-blur-sm border ${
                              errors.name ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-secondary'
                            } outline-none transition-all duration-300 shadow-inner`}
                            placeholder="ישראל ישראלי"
                          />
                        </motion.div>
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                        טלפון
                      </label>
                      <div className="relative">
                        <motion.div
                          whileFocus="focus"
                          whileTap="focus"
                          variants={inputVariants}
                          className="input-wrapper"
                        >
                          <FiPhone className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <input
                            type="tel"
                            id="phone"
                            {...register('phone', { 
                              required: 'שדה חובה',
                              pattern: {
                                value: /^0\d{8,9}$/,
                                message: 'מספר טלפון לא תקין'
                              }
                            })}
                            className={`w-full py-3 px-12 rounded-xl bg-white/50 backdrop-blur-sm border ${
                              errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-secondary'
                            } outline-none transition-all duration-300 shadow-inner`}
                            placeholder="050-1234567"
                            dir="ltr"
                          />
                        </motion.div>
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                        דוא"ל
                      </label>
                      <div className="relative">
                        <motion.div
                          whileFocus="focus"
                          whileTap="focus"
                          variants={inputVariants}
                          className="input-wrapper"
                        >
                          <FiMail className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                          <input
                            type="email"
                            id="email"
                            {...register('email', { 
                              required: 'שדה חובה',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'כתובת דוא"ל לא תקינה'
                              }
                            })}
                            className={`w-full py-3 px-12 rounded-xl bg-white/50 backdrop-blur-sm border ${
                              errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-secondary'
                            } outline-none transition-all duration-300 shadow-inner`}
                            placeholder="your@email.com"
                            dir="ltr"
                          />
                        </motion.div>
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                        הודעה
                      </label>
                      <div className="relative">
                        <motion.div
                          whileFocus="focus"
                          whileTap="focus"
                          variants={inputVariants}
                          className="input-wrapper"
                        >
                          <FiMessageSquare className="absolute right-4 top-4 text-gray-500" />
                          <textarea
                            id="message"
                            {...register('message')}
                            rows={4}
                            className="w-full py-3 px-12 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-secondary outline-none transition-all duration-300 shadow-inner"
                            placeholder="תיאור קצר של הנושא..."
                          ></textarea>
                        </motion.div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-secondary text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-neomorphic-button disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -mr-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>שולח...</span>
                        </>
                      ) : (
                        <>
                          <FiCalendar className="text-xl" />
                          <span>קבע תור עכשיו</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
            
            <div className="hidden md:block relative h-full min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" 
                alt="פגישת ייעוץ משפטי" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;