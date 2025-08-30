'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Award, Calendar } from 'lucide-react';

export default function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const papers = [
    {
      title: 'A Novel Approach to Autonomous Threat Response using Quantum-inspired Algorithms',
      journal: 'Journal of Advanced AI Systems',
      year: '2024',
      status: 'Published',
    },
    {
      title: 'Predictive Analytics for Social Media Trends in Educational Technology',
      journal: 'Global Ed-Tech Summit',
      year: '2024',
      status: 'Presented',
    },
    {
      title: 'Optimization of Machine Learning Models via Distributed Quantum Computing',
      journal: 'International Journal of Quantum Computing',
      year: '2025',
      status: 'Accepted',
    },
  ];

  const patents = [
    {
      title: 'AI-driven Threat Detection and Automated Response System (Taara)',
      number: '2024-GS-001',
      type: 'Patent',
    },
    {
      title: 'Goodwinsmart Educational Content and Curriculum',
      number: 'GS-ED-2024',
      type: 'Copyright',
    },
  ];

  return (
    <section id="research" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Research & <span className="gradient-text">Intellectual Property</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto">
            Our commitment to innovation is backed by a growing portfolio of publications and patents, 
            pushing the boundaries of AI and quantum computing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Research Papers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">Research Papers</h3>
            <div className="space-y-6">
              {papers.map((paper, index) => (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="glass-morphism hover:quantum-glow transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0"
                        >
                          <FileText className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2 leading-tight">{paper.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-foreground/70">
                            <span>{paper.journal}</span>
                            <span>•</span>
                            <span>{paper.year}</span>
                          </div>
                          <Badge className="mt-2 bg-primary/10 text-primary border-primary/20">
                            {paper.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IPR */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">Intellectual Property</h3>
            <div className="space-y-6">
              {patents.map((patent, index) => (
                <motion.div
                  key={patent.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="glass-morphism hover:quantum-glow transition-all duration-500 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors flex-shrink-0"
                        >
                          <Award className="w-5 h-5 text-secondary" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-2 leading-tight">{patent.title}</h4>
                          <div className="text-sm text-foreground/70 mb-2">
                            {patent.type === 'Patent' ? 'Filing Number' : 'Registration Number'}: {patent.number}
                          </div>
                          <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                            {patent.type}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}