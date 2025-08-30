'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Sri Aranea',
      position: 'CEO, Tech Solutions Inc.',
      content: 'Goodwinsun\'s AI research capabilities are truly groundbreaking. Their quantum-inspired approach to threat detection has revolutionized our security infrastructure.',
      avatar: 'SA',
    },
    {
      name: 'Pure Athera',
      position: 'Head of R&D, Quantum Labs',
      content: 'The depth of knowledge and innovation at Goodwinsun is exceptional. Their work in quantum computing applications is years ahead of the competition.',
      avatar: 'PA',
    },
    {
      name: 'Q2 Demeters',
      position: 'Founder, Design Studio',
      content: 'Working with Goodwinsun has been transformative. Their ability to translate complex AI concepts into practical solutions is remarkable.',
      avatar: 'QD',
    },
    {
      name: 'Granty',
      position: 'Lead Researcher, Future Tech Initiative',
      content: 'Goodwinsun\'s ecosystem approach to technology development and education is setting new standards in the industry. Truly visionary work.',
      avatar: 'GR',
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Partners Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="perspective-1000"
            >
              <Card className="glass-morphism hover:quantum-glow transition-all duration-500 h-full group">
                <CardContent className="p-8 relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center"
                  >
                    <Quote className="w-4 h-4 text-primary" />
                  </motion.div>
                  
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}