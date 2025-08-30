'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Brain, Play } from 'lucide-react';

export default function TaaraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'Advanced AI algorithms continuously monitor and identify potential security threats.',
    },
    {
      icon: Zap,
      title: 'Autonomous Threat Response',
      description: 'Intelligent automated responses to neutralize threats without human intervention.',
    },
    {
      icon: Brain,
      title: 'Advanced AI & ML Integration',
      description: 'Cutting-edge machine learning models trained on quantum-inspired algorithms.',
    },
  ];

  return (
    <section id="taara" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
            Flagship Project
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Taara</span>: Threat Aware
            <br />Autonomous Response Agent
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Our flagship project, where we apply our deep expertise in AI and quantum computing 
            to create next-generation security solutions.
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Taara is a cutting-edge AI-driven autonomous agent designed to detect, analyze, and 
            neutralize cyber threats in real-time. Private demos will roll out to select partners. 
            Join the waitlist to be notified when access opens.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-morphism quantum-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center gradient-text">
                  Watch Demo Waitlist
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-background/50" />
                  <Input placeholder="Company Name" className="bg-background/50" />
                </div>
                <Input placeholder="Company Website" className="bg-background/50" />
                <Input placeholder="Email Address" type="email" className="bg-background/50" />
                <Button className="w-full bg-primary hover:bg-primary/90 quantum-glow group">
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
      />
    </section>
  );
}