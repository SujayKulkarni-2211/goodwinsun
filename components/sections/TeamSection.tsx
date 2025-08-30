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

  const team = [
    {
      name: 'Sujay V Kulkarni',
      position: 'Founder & CEO',
      initials: 'SK',
      gradient: 'from-blue-500 to-cyan-500',
      image: '/images/team/sujay.png', // ✅ your photo
    },
    {
      name: 'Aditya S Maller',
      position: 'Founder & CFO',
      initials: 'AM',
      gradient: 'from-purple-500 to-pink-500',
      image: '/images/team/aditya.png',
    },
    {
      name: 'Kirthan Prashanth Sapate',
      position: 'CTO',
      initials: 'KS',
      gradient: 'from-green-500 to-teal-500',
      image: '/images/team/kirthan.png',
    },
    {
      name: 'Manasa',
      position: 'COO and CMO',
      initials: 'MN',
      gradient: 'from-yellow-500 to-orange-500',
      image: '/images/team/manasa.png',
    },
    {
      name: 'Bruhat Kulkarni',
      position: 'CCO',
      initials: 'BK',
      gradient: 'from-red-500 to-pink-500',
      image: '/images/team/bruhat.png',
    },
    {
      name: 'Ramyashree',
      position: 'CIO',
      initials: 'RS',
      gradient: 'from-indigo-500 to-purple-500',
      image: '/images/team/ramya.png',
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
            Meet Our <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 80, rotateY: 45 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="perspective-1000"
            >
              <Card className="glass-morphism hover:quantum-glow transition-all duration-500 group text-center overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}></div>

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 mb-6"
                  >
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
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {member.position}
                    </Badge>
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
