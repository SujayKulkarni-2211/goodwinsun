'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cpu, Shield, Lightbulb, Code, Database, Rocket } from 'lucide-react';

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Cpu,
      title: 'AI Research & Development',
      description: 'Custom AI solutions tailored to your enterprise needs with cutting-edge machine learning models.',
    },
    {
      icon: Shield,
      title: 'Quantum Security Solutions',
      description: 'Next-generation cybersecurity powered by quantum-inspired algorithms and autonomous response systems.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Strategic guidance for integrating AI and quantum technologies into your business operations.',
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Full-stack development services with AI integration and quantum-ready architectures.',
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Advanced analytics and predictive modeling to unlock insights from your data.',
    },
    {
      icon: Rocket,
      title: 'Technology Integration',
      description: 'Seamless integration of AI and quantum technologies into existing systems.',
    },
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services & Solutions</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We provide a wide range of services, from deep research to full-stack implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="glass-morphism h-full group hover:quantum-glow transition-all duration-500">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass-morphism quantum-glow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center gradient-text">
                Request a Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background/50" />
                <Input placeholder="Position in Company" className="bg-background/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Company Name" className="bg-background/50" />
                <Input placeholder="Company Website" className="bg-background/50" />
              </div>
              <Input placeholder="Email Address" type="email" className="bg-background/50" />
              <Select>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="Select Service Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-research">AI Research & Development</SelectItem>
                  <SelectItem value="quantum-security">Quantum Security Solutions</SelectItem>
                  <SelectItem value="innovation-consulting">Innovation Consulting</SelectItem>
                  <SelectItem value="custom-development">Custom Development</SelectItem>
                  <SelectItem value="data-intelligence">Data Intelligence</SelectItem>
                  <SelectItem value="tech-integration">Technology Integration</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Describe your requirements..." className="bg-background/50 min-h-24" />
              <Button className="w-full bg-primary hover:bg-primary/90 quantum-glow">
                Submit Request
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}