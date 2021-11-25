import React from 'react';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import HomeHeading from '../components/HomeHeading';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';
import TestimonialSection from '../components/TestimonialSection';

export default function Home() {
  return (
    <div>
      <HomeHeading />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
