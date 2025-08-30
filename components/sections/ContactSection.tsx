'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [alert, setAlert] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setAlert("✅ Thank you for contacting us! We'll be in touch soon.");
      setForm({ name: '', email: '', subject: '', message: '' });
    } else {
      setAlert("❌ Something went wrong. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['contact.goodwinsun@gmail.com'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9380142763', '+91 91410 72165'],
    },
    {
      icon: MapPin,
      title: 'Offices',
      details: [
        'HQ: #1801/4, S2, Swagath Sanketh Building, 10th Cross, RPC Layout, Vijayangar, Bengaluru 560104',
        'AI Startup Incubation: Incubation Center, R V University, RV Vidyaniketan Post, Bengaluru',
        'JP Nagar Branch: A.G. Maller, R V Road, J P Nagar, Bengaluru',
      ],
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We're always looking for new partnerships, collaborators, and talent. 
            Reach out and let's build the future together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group"
              >
                <Card className="glass-morphism hover:quantum-glow transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0"
                      >
                        <info.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground/70 mb-1 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="glass-morphism quantum-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-bold gradient-text">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <Input
                      placeholder="Email Address"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <Select onValueChange={(val) => setForm({ ...form, subject: val })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Domain/Purpose/Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI Research">AI Research</SelectItem>
                      <SelectItem value="Quantum Computing">Quantum Computing</SelectItem>
                      <SelectItem value="Partnership">Partnership</SelectItem>
                      <SelectItem value="Investment">Investment</SelectItem>
                      <SelectItem value="Collaboration">Collaboration</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Tell us about your project or inquiry..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 quantum-glow group">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
                {alert && (
                  <p className="mt-4 text-center text-sm">{alert}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
