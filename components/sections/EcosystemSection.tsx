'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Trophy, 
  Wrench, 
  Medal, 
  DollarSign, 
  FileText, 
  Briefcase, 
  Users, 
  Heart, 
  Lightbulb,
  Mail
} from 'lucide-react';

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const ecosystemItems = [
    {
      icon: GraduationCap,
      purpose: '🎓 Learn',
      initiative: 'Trainings',
      brand: 'Goodwinsmart Series',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      purpose: '🧠 Prove Skill',
      initiative: 'Olympiads',
      brand: 'National Tech Olympiad Series',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Wrench,
      purpose: '🛠️ Build Projects',
      initiative: 'AI Sprint',
      brand: 'Goodwin Build With AI',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Medal,
      purpose: '🚀 Recognition & Prize',
      initiative: 'Hackathon',
      brand: 'National Disruptor Medal',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: DollarSign,
      purpose: '💰 Earn & Inspire',
      initiative: 'Grant',
      brand: 'Goodwin Monthly Hustler Grant',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: FileText,
      purpose: '📜 Certification',
      initiative: 'Proof Engine',
      brand: 'Goodwinseal',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Briefcase,
      purpose: '🛠️ Services (Revenue)',
      initiative: 'Client Work',
      brand: 'Goodwin Services',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      purpose: '💼 Internship/Lab',
      initiative: 'Student Work',
      brand: 'Goodwin Work Labs',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      purpose: '🧭 Life & Career Advice',
      initiative: 'Mentorship',
      brand: 'Way Out (with Margadarshika)',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: Heart,
      purpose: '❤️ Soft Side / Virality',
      initiative: 'Mental Health Access',
      brand: 'Free Online Mind Therapy',
      color: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="ecosystem" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A comprehensive network of initiatives for capacity building, product development, and community growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.brand}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className="perspective-1000"
            >
              <Card className="glass-morphism h-full group hover:quantum-glow transition-all duration-500 cursor-pointer overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="relative z-10 mb-4"
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <div className="relative z-10 space-y-2">
                    <div className="text-lg font-bold">{item.purpose}</div>
                    <div className="text-primary/80 font-medium text-sm">{item.initiative}</div>
                    <div className="text-foreground/70 text-sm leading-tight">{item.brand}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ecosystem Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-md mx-auto"
        >
          <Card className="glass-morphism quantum-glow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-center gradient-text">
                Join Our Ecosystem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Email Address" type="email" className="bg-background/50" />
              <Button className="w-full bg-primary hover:bg-primary/90 quantum-glow">
                <Mail className="mr-2 w-4 h-4" />
                Subscribe for Updates
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Long Term Vision Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container mx-auto px-6 mt-16"
      >
        <Card className="glass-morphism quantum-glow max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-2xl font-bold mb-2 gradient-text">Long Term Vision</h3>
            <p className="text-primary/80 font-medium mb-2">Product Line</p>
            <p className="text-xl font-bold">Goodwin Core</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}