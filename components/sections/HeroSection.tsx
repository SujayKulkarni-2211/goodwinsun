'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import Link from "next/link";

export default function HeroSection() {
  const stats = [
    { value: '3+', label: 'Research Papers' },
    { value: '2+', label: 'IPR Patents' },
    { value: '1', label: 'Flagship Project' },
  ];

  const floatingCards = [
    { title: 'AI Research', icon: '🤖', delay: 0.2 },
    { title: 'Quantum Computing', icon: '⚛️', delay: 0.4 },
    
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Next-Generation{' '}
            <span className="gradient-text">AI Research</span>
            <br />& Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Goodwinsun is a technology company engaged in research, solutions, and product 
            development predominantly in artificial intelligence with additional expertise in 
            quantum computing, operating a comprehensive ecosystem of innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-morphism rounded-lg p-4 min-w-[120px]"
              >
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
>
  <Link href="#ecosystem">
    <Button
      size="lg"
      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full group quantum-glow"
    >
      Explore Ecosystem
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>

  <Link href="#contact">
    <Button
      size="lg"
      variant="outline"
      className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 rounded-full"
    >
      <Zap className="mr-2 w-4 h-4" />
      Contact Us
    </Button>
  </Link>
</motion.div>

          {/* Floating Cards */}
          <div className="hidden lg:block">
            {floatingCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: card.delay + 1 }}
                className={`absolute glass-morphism rounded-lg p-4 ${
                  index === 0 ? 'top-1/4 left-10' :
                  index === 1 ? 'top-1/3 right-10' :
                  'bottom-1/4 left-1/4'
                } floating-animation`}
                style={{ animationDelay: `${index * 2}s` }}
              >
                <div className="text-2xl mb-2">{card.icon}</div>
                <div className="text-sm font-medium">{card.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 z-10"></div>
    </section>
  );
}