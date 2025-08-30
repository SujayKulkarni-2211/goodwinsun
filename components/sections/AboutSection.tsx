'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Atom, Users } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    {
      icon: Brain,
      title: 'AI Research',
      subtitle: 'From ideas to prototypes to production',
      description: 'We architect, experiment, and ship intelligent systems tailored to enterprise constraints—performance, safety, and maintainability.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Atom,
      title: 'Quantum Expertise',
      subtitle: 'Foundations that scale into the future',
      description: 'Quantum algorithms and readiness programs to help you prepare for post-classical compute while extracting value now.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Ecosystem',
      subtitle: 'Capacity building at scale',
      description: 'Educational programs, competitions, and events to cultivate next-gen talent and accelerate adoption in industry.',
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Goodwinsun</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            We are an AI-first company with a quantum edge. While cybersecurity is one domain we 
            touch via our flagship AI project Taara, Goodwinsun's primary focus is AI research, 
            enterprise-grade solutions, and real-world deployments, with quantum computing as an 
            advancing capability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="perspective-1000"
            >
              <Card className="glass-morphism hover:glass-morphism-hover transition-all duration-500 h-full group cursor-pointer overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10"
                  >
                    <card.icon className="w-12 h-12 text-primary mb-4" />
                  </motion.div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">{card.title}</h3>
                    <p className="text-primary/80 font-medium mb-4">{card.subtitle}</p>
                    <p className="text-foreground/70 leading-relaxed">{card.description}</p>
                  </div>
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
}