'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const founders = [
    {
      name: 'Sujay V Kulkarni',
      position: 'Co-Founder & CEO',
      initials: 'SK',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/team/sujay.png',
    },
    {
      name: 'Aditya S Maller',
      position: 'Co-Founder & CFO',
      initials: 'AM',
      gradient: 'from-purple-500 to-pink-500',
      image: '/images/team/aditya.png',
    },
  ];

  const executives = [
    {
      name: 'Kirthan P Sapate',
      position: 'CTO',
      initials: 'KS',
      gradient: 'from-green-500 to-teal-500',
      image: '/images/team/kirthan.png',
      bio: 'Ex-Tech Lead RUDRA · Ex ISRO Intern · Inventor of SHRAVAN',
    },
    {
      name: 'Sree Govinth N',
      position: 'CDO',
      initials: 'SG',
      gradient: 'from-cyan-500 to-blue-500',
      image: '/images/team/sree_govinth.png',
      bio: 'Cybersecurity Major, RVU · Inventor MalwareLiveKill',
    },
    {
      name: 'J Sheethal',
      position: 'CIO',
      initials: 'JS',
      gradient: 'from-indigo-500 to-purple-500',
      image: '/images/team/sheethal.png',
      bio: 'Best Paper Award — ICAICS 2025',
    },
    {
      name: 'Bruhat Kulkarni',
      position: 'COO',
      initials: 'BK',
      gradient: 'from-red-500 to-pink-500',
      image: '/images/team/bruhat.png',
      bio: 'Inventor — Metric Drive Temp Prediction',
    },
    {
      name: 'Harshitha V',
      position: 'CXO',
      initials: 'HV',
      gradient: 'from-orange-500 to-yellow-500',
      image: '/images/team/harshitha.png',
      bio: 'Research paper Mi-IRICT 2025 · Executive Director RUDRA',
    },
    {
      name: 'Unnathi C S',
      position: 'CCO',
      initials: 'UC',
      gradient: 'from-pink-500 to-rose-500',
      image: '/images/team/unnathi.png',
      bio: 'Runner Up Code Cubicle 5.0 (Microsoft) · GHCI 25 Scholar',
    },
  ];

  const mentors = [
    { name: 'Dr. Phani Kumar Pullela', initials: 'PP', gradient: 'from-slate-500 to-gray-500' },
    { name: 'Mr. Nanda Mohan Shenoy', initials: 'NS', gradient: 'from-slate-500 to-gray-500' },
    { name: 'Dr. Suchitra Joshi', initials: 'SJ', gradient: 'from-slate-500 to-gray-500' },
    { name: 'Prof. P C Deshmukh', initials: 'PD', gradient: 'from-slate-500 to-gray-500' },
  ];

  const MemberCard = ({ member, index, badgeClass }: { member: any; index: number; badgeClass?: string }) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 80, rotateY: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -15, rotateY: 5, scale: 1.05, transition: { type: 'spring', stiffness: 300 } }}
      className="perspective-1000"
    >
      <Card className="glass-morphism hover:quantum-glow transition-all duration-500 group text-center overflow-hidden h-full">
        <CardContent className="p-8 relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative z-10 mb-6">
            <Avatar className="w-24 h-24 mx-auto mb-4 quantum-glow">
              {member.image ? (
                <AvatarImage src={member.image} alt={member.name} />
              ) : (
                <AvatarFallback className={`bg-gradient-to-br ${member.gradient} text-white font-bold text-xl`}>
                  {member.initials}
                </AvatarFallback>
              )}
            </Avatar>
          </motion.div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <Badge className={badgeClass ?? 'bg-primary/10 text-primary border-primary/20'}>
              {member.position}
            </Badge>
            {member.bio && (
              <p className="text-xs text-foreground/60 mt-3 leading-relaxed">{member.bio}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

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
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        {/* Founders */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {founders.map((member, index) => (
            <div key={member.name} className="w-full sm:w-72">
              <MemberCard member={member} index={index} />
            </div>
          ))}
        </div>

        {/* Executive Team */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-foreground/60 text-sm uppercase tracking-widest mb-8"
        >
          Executive Team
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {executives.map((member, index) => (
            <div key={member.name}>
              <MemberCard member={member} index={index + 2} />
            </div>
          ))}
        </div>

        {/* Mentors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-morphism rounded-2xl p-8 text-center"
        >
          <p className="text-foreground/60 text-sm uppercase tracking-widest mb-6">Mentors & Advisors</p>
          <div className="flex flex-wrap justify-center gap-6">
            {mentors.map((mentor) => (
              <div key={mentor.name} className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className={`bg-gradient-to-br ${mentor.gradient} text-white text-xs font-bold`}>
                    {mentor.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-foreground/80 text-sm">{mentor.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
