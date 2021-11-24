import React from 'react';
import AboutSection from '../components/AboutSection';
import HomeHeading from '../components/HomeHeading';
import ProjectSection from '../components/ProjectSection';
import ServiceSection from '../components/ServiceSection';

export default function Home() {
  return (
    <div>
      <HomeHeading />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
    </div>
  );
}
