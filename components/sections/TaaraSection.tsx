'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Brain, ArrowRight, Activity, Lock } from 'lucide-react';

export default function TaaraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Shield,
      title: 'Continuous Authentication',
      description: 'Authentication proves identity at login. TAARA proves it every second — watching behavioral DNA inside every session, catching credential theft that every classical tool misses.',
    },
    {
      icon: Activity,
      title: 'Quantum Geometric Detection',
      description: 'Per-identity quantum fidelity measurement. F_min < 0.5 means behavioral direction is more orthogonal to all prior states than similar to any — a geometric fact, not a tuned threshold.',
    },
    {
      icon: Lock,
      title: 'Post-Quantum Secure',
      description: 'Kyber768 (NIST FIPS 203) key exchange between TaaraWare and Command Center. Every deployment\'s detection geometry is private and quantum-adversary resistant today.',
    },
    {
      icon: Brain,
      title: 'Autonomous Response',
      description: 'ContrastiveBandit learns which actions resolve incidents fastest on your specific server. Pre-approves high-confidence actions. Rollback available for every action taken.',
    },
    {
      icon: Zap,
      title: '10× More Affordable',
      description: '₹5K–₹25K assessment. ₹25–50K/month monitoring. Enterprise tools cost ₹8–12L/month. 43% of cyberattacks hit SMBs who cannot afford that.',
    },
    {
      icon: Brain,
      title: 'Federated by Design',
      description: 'Raw logs never leave your server. TaaraWare sends only 19 behavioral feature vectors. All quantum computation runs on the Command Center. Zero data-center dependency.',
    },
  ];

  const stats = [
    { value: '96.9%', label: 'Detection Rate' },
    { value: '9.3%', label: 'False Alarm Rate' },
    { value: '194→0', label: 'Days to Detect (avg → same session)' },
    { value: 'TRL 5', label: 'Readiness Level' },
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
            Flagship Product — Elevate NXT 2026
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">TAARA Q.0</span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-foreground/70">
              Trajectory-Aware Adaptive Residual Analysis
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-4">
            Quantum-Enhanced Continuous Authentication for Indian MSMEs.
            <br />
            <span className="font-semibold text-primary">Prevent Crash, Preserve Cash.</span>
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto mb-10">
            79% of breaches use valid credentials. The attacker logs in correctly — no failed attempts,
            no suspicious IP. TAARA asks what no tool asks: <em>is this actually the person who owns this account?</em>
            <br />
            Every second. Inside every session. Using quantum geometric behavioral modeling.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-morphism rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-xs text-foreground/60 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 quantum-glow group px-8 py-6 text-lg"
            >
              <a href="/taara">
                Explore TAARA
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-primary/30 hover:border-primary/60 px-8 py-6 text-lg"
              asChild
            >
              <a href="#contact">Request Demo</a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="glass-morphism hover:quantum-glow transition-all duration-500 group h-full">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4"
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Traction bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 glass-morphism rounded-2xl p-8 text-center"
        >
          <p className="text-foreground/60 text-sm uppercase tracking-widest mb-4">Current Traction</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              '1 Production Deployment',
              '3 Paid Assessments',
              '5 Letters of Intent',
              'Patent Filing In Progress',
              'Beta Testing — TRL 5',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-foreground/80">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: 'linear' }, scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
      />
    </section>
  );
}