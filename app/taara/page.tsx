'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Shield, Zap, Brain, Activity, Lock, ArrowRight, ArrowLeft,
  CheckCircle, AlertTriangle, Server, Network, BarChart3, Eye,
} from 'lucide-react';

export default function TaaraPage() {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const howRef = useRef(null);
  const benchmarkRef = useRef(null);
  const pricingRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const problemInView = useInView(problemRef, { once: true, margin: '-100px' });
  const howInView = useInView(howRef, { once: true, margin: '-100px' });
  const benchmarkInView = useInView(benchmarkRef, { once: true, margin: '-100px' });
  const pricingInView = useInView(pricingRef, { once: true, margin: '-100px' });

  const pipeline = [
    {
      step: '01',
      title: 'TaaraWare Agent',
      description: '19 behavioral features collected per session — keystroke cadence, command entropy, syscall patterns, network bursts. Raw logs never leave your server.',
      icon: Server,
    },
    {
      step: '02',
      title: 'PQC-Secured Transmission',
      description: 'Feature vectors encrypted with Kyber768 (NIST FIPS 203). Quantum-adversary resistant key exchange between your server and the Command Center.',
      icon: Lock,
    },
    {
      step: '03',
      title: 'Quantum Geometric Analysis',
      description: 'V3 Coherence-Weighted Interference Fusion. Per-identity behavioral state vectors. Quantum fidelity F computed against all prior states.',
      icon: Activity,
    },
    {
      step: '04',
      title: 'Threat Decision',
      description: 'F_min < 0.5 means behavioral direction is geometrically orthogonal to all prior states — a mathematical fact. ContrastiveBandit decides the response action.',
      icon: Eye,
    },
    {
      step: '05',
      title: 'Autonomous Response',
      description: 'Pre-approved or manual action: isolate, alert, throttle, block. Every action logged. Every action rollbackable. Bandit learns which actions work on your server.',
      icon: Zap,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Continuous Authentication',
      description: 'Classical auth proves identity at login once. TAARA proves it every second inside every live session — catching credential theft that no login-time tool can see.',
    },
    {
      icon: Activity,
      title: 'Quantum Geometric Detection',
      description: 'Behavioral state vectors in Hilbert space. F_min < 0.5 is a geometric anomaly guarantee, not a tuned threshold that drifts with your data distribution.',
    },
    {
      icon: Lock,
      title: 'Post-Quantum Secure',
      description: 'Kyber768 (NIST FIPS 203) between TaaraWare and Command Center. Your detection geometry stays private and quantum-adversary resistant.',
    },
    {
      icon: Brain,
      title: 'ContrastiveBandit Response',
      description: 'Reinforcement learning selects the fastest-resolving action for your specific environment. Pre-approves high-confidence decisions. Full rollback on every action.',
    },
    {
      icon: Network,
      title: 'Federated by Design',
      description: 'Raw logs never leave your infrastructure. Only 19 feature vectors transmitted. No cloud data-center dependency. Full on-prem data sovereignty.',
    },
    {
      icon: BarChart3,
      title: '10× More Affordable',
      description: 'Enterprise UEBA tools cost ₹8–12L/month. TAARA assessments start at ₹5K. Monitoring from ₹25K/month. Built for the 43% of cyberattack victims who are SMBs.',
    },
  ];

  const benchmarkRows = [
    { metric: 'True Positive Rate (TPR)', value: '96.9%', note: 'Attacks correctly detected' },
    { metric: 'False Positive Rate (FPR)', value: '9.3%', note: 'Legitimate sessions flagged' },
    { metric: 'F1 Score', value: '0.970', note: 'Harmonic mean precision/recall' },
    { metric: 'AUC-ROC', value: '0.933', note: 'Area under ROC curve' },
    { metric: 'Normal Sessions', value: '1,151', note: 'elastic/auth dataset' },
    { metric: 'Attack Sessions', value: '1,163', note: 'Cowrie SSH honeypot' },
    { metric: 'Detection Lag', value: '194 → 0', note: 'Days avg → same session' },
  ];

  const pricingTiers = [
    {
      name: 'Assessment',
      price: '₹5K – ₹25K',
      period: 'one-time',
      description: 'Full security posture assessment. Behavioral baseline. Threat surface report.',
      features: [
        '19-feature behavioral baseline',
        'Threat surface mapping',
        'TAARA Q.0 trial deployment',
        'Written assessment report',
      ],
      cta: 'Request Assessment',
      highlight: false,
    },
    {
      name: 'Monitoring',
      price: '₹25K – ₹50K',
      period: 'per month',
      description: 'Continuous TAARA deployment. Live threat detection. Autonomous response.',
      features: [
        'Continuous authentication',
        'Real-time quantum anomaly detection',
        'ContrastiveBandit autonomous response',
        'Monthly threat intelligence report',
        'Rollback-safe action log',
      ],
      cta: 'Start Monitoring',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'Multi-server deployments. White-label. SLA. Dedicated support.',
      features: [
        'Multi-server federated deployment',
        'Custom SLA and uptime guarantees',
        'Dedicated support engineer',
        'White-label option',
        'On-prem Command Center option',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Back link */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" asChild className="glass-morphism">
          <a href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Goodwinsun
          </a>
        </Button>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-32">
        <div ref={heroRef} className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20">
              Flagship Product — Elevate NXT 2026 · TRL 5
            </Badge>
            <h1 className="text-5xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">TAARA Q.0</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/70 mb-4 font-medium">
              Trajectory-Aware Adaptive Residual Analysis
            </p>
            <p className="text-lg text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              Quantum-Enhanced Continuous Authentication for Indian MSMEs.
              <br />
              <span className="text-primary font-semibold">Prevent Crash. Preserve Cash.</span>
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { value: '96.9%', label: 'Detection Rate' },
                { value: '9.3%', label: 'False Alarm Rate' },
                { value: '194→0', label: 'Days to Detect' },
                { value: 'TRL 5', label: 'Readiness Level' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-morphism rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-foreground/60 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 quantum-glow group px-8 py-6 text-lg">
                <a href="#pricing">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" className="border-primary/30 hover:border-primary/60 px-8 py-6 text-lg" asChild>
                <a href="/#contact">Request Demo</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Background orbs */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </section>

      {/* The Problem */}
      <section className="py-32 relative" ref={problemRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The <span className="gradient-text">Problem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { stat: '79%', label: 'of breaches use valid credentials', icon: AlertTriangle },
              { stat: '43%', label: 'of cyberattacks target SMBs', icon: Shield },
              { stat: '194 days', label: 'average detection time (pre-TAARA)', icon: Eye },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                animate={problemInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="glass-morphism hover:quantum-glow transition-all duration-500 text-center">
                  <CardContent className="p-8">
                    <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <div className="text-4xl font-bold gradient-text mb-2">{item.stat}</div>
                    <div className="text-foreground/70">{item.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-foreground/80 leading-relaxed">
              The attacker logs in with stolen credentials — no failed attempts, no suspicious IP.
              Every classical tool sees a valid login and says nothing.{' '}
              <span className="text-primary font-semibold">
                TAARA asks what no tool asks: is this actually the person who owns this account?
              </span>{' '}
              Every second. Inside every live session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative" ref={howRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Five stages from raw behavior to autonomous response — with your data never leaving your server.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {pipeline.map((stage, index) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={howInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="glass-morphism hover:quantum-glow transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl font-bold gradient-text opacity-40 font-mono w-12 flex-shrink-0">
                        {stage.step}
                      </div>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                        <p className="text-foreground/70 leading-relaxed">{stage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={howInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Core <span className="gradient-text">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
        </div>
      </section>

      {/* Benchmark Results */}
      <section className="py-32 relative" ref={benchmarkRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={benchmarkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Benchmark <span className="gradient-text">Results</span>
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              v8 evaluation on 2,314 sessions — 1,151 normal (elastic/auth) + 1,163 SSH attack (Cowrie honeypot).
              Honest numbers. No cherry-picking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={benchmarkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto glass-morphism rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-border/30">
              <p className="text-sm text-foreground/60 uppercase tracking-widest text-center">
                TAARA Q.0 v8 — V3 Coherence-Weighted Interference Fusion
              </p>
            </div>
            {benchmarkRows.map((row, index) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -20 }}
                animate={benchmarkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                className="flex items-center justify-between p-5 border-b border-border/20 last:border-0 hover:bg-primary/5 transition-colors"
              >
                <div>
                  <div className="font-medium">{row.metric}</div>
                  <div className="text-sm text-foreground/50">{row.note}</div>
                </div>
                <div className="text-xl font-bold gradient-text">{row.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 relative" ref={pricingRef}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Enterprise-grade protection at MSME-friendly pricing.
              43% of cyberattacks target SMBs. Now they can fight back.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`glass-morphism transition-all duration-500 h-full ${tier.highlight ? 'quantum-glow border-primary/40' : 'hover:quantum-glow'}`}>
                  <CardContent className="p-8 flex flex-col h-full">
                    {tier.highlight && (
                      <Badge className="bg-primary/20 text-primary border-primary/30 mb-4 self-start">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold gradient-text">{tier.price}</span>
                      <span className="text-foreground/60 text-sm ml-2">/ {tier.period}</span>
                    </div>
                    <p className="text-foreground/70 text-sm mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={tier.highlight ? 'bg-primary hover:bg-primary/90 quantum-glow w-full' : 'w-full'}
                      variant={tier.highlight ? 'default' : 'outline'}
                    >
                      <a href="/#contact">{tier.cta}</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-morphism rounded-2xl p-8 text-center"
          >
            <p className="text-foreground/60 text-sm uppercase tracking-widest mb-6">Current Traction</p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
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
            <Button asChild className="bg-primary hover:bg-primary/90 quantum-glow group px-8 py-6 text-lg">
              <a href="/#contact">
                Get TAARA for Your Business
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center text-foreground/50 text-sm">
          <p>TAARA Q.0 — A Goodwinsun Product · CIN: RJR-F00332-2025-26 · Bengaluru, India</p>
        </div>
      </footer>
    </main>
  );
}
