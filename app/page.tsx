'use client';

import { Suspense } from 'react';
import ParticleBackground from '@/components/3d/ParticleBackground';
import FloatingElements from '@/components/3d/FloatingElements';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EcosystemSection from '@/components/sections/EcosystemSection';
import TaaraSection from '@/components/sections/TaaraSection';
import ResearchSection from '@/components/sections/ResearchSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import HeroNetwork from '@/components/3d/HeroNetwork';


export default function Home() {
  useSmoothScroll();

  return (
    <main className="relative">
      <Suspense fallback={null}>
        <ParticleBackground />
        <FloatingElements />
      </Suspense>
      
      <div className="relative z-30">
        <Header />
        <div className="mt-28">
        <HeroSection />
         </div>
        <AboutSection />
        <ServicesSection />
        <EcosystemSection />
        <TaaraSection />
        <ResearchSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}