'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/Layout';
import BookingPage from '../components/BookingPage';
import ServicesPage from '../components/ServicesPage';
import AboutPage from '../components/AboutPage';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <BookingSection />
    <TestimonialsSection />
    <TeamSection />
    <ContactSection />
    <Footer />
    <Button />
    <Card />
    <Layout />
    <BookingPage />
    <ServicesPage />
    <AboutPage />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 משרד עורכי דין ביתא. webis
        </div>
      </footer>
    </div>
  );
}