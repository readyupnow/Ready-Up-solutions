/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Cpu, 
  Zap, 
  Users, 
  Database, 
  Search, 
  Layers, 
  TrendingUp,
  Mail,
  Linkedin,
  Twitter,
  Phone,
  Menu,
  X
} from 'lucide-react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <Zap className="text-primary w-6 h-6 fill-primary" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
              READY UP <span className="text-accent">SOLUTIONS</span>
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent text-primary px-5 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20"
          >
            Book Free Strategy Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-300 hover:text-accent border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a 
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-accent text-primary px-5 py-3 rounded-lg text-base font-bold"
                >
                  Book Free Strategy Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold text-accent uppercase tracking-wider">CRM & AI Optimization Experts</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Turn Your CRM Into a <span className="text-accent">Revenue Machine</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              We help high-growth businesses integrate and optimize CRMs, data pipelines, and AI workflows to deliver measurable ROI and scalable efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-accent/20"
              >
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services" 
                className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all flex items-center justify-center"
              >
                View Our Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-primary"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-accent mb-1">
                  {[1, 2, 3, 4, 5].map((i) => <Zap key={i} className="w-3 h-3 fill-accent" />)}
                </div>
                <p className="text-slate-400 font-medium">Trusted by 25+ organizations worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-4 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="bg-primary/80 rounded-xl p-6 border border-white/5">
                <div className="flex justify-between items-center mb-8">
                  <div className="space-y-1">
                    <div className="h-2 w-24 bg-white/20 rounded" />
                    <div className="h-2 w-16 bg-white/10 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-white/5 rounded-lg flex flex-col items-center justify-center gap-2">
                      <div className={`w-8 h-8 rounded-full ${i === 2 ? 'bg-accent/20' : 'bg-white/10'}`} />
                      <div className="h-1.5 w-12 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <div className="h-3 w-full bg-white/5 rounded" />
                  <div className="h-3 w-3/4 bg-white/5 rounded" />
                  <div className="h-3 w-1/2 bg-white/5 rounded" />
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogoStrip = () => {
  const platforms = [
    { name: 'HubSpot', icon: <Layers className="w-5 h-5" /> },
    { name: 'Salesforce', icon: <Database className="w-5 h-5" /> },
    { name: 'Zoho', icon: <Zap className="w-5 h-5" /> },
    { name: 'Power BI', icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Microsoft Fabric', icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">
          Expertise Across Leading Platforms
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {platforms.map((p) => (
            <div 
              key={p.name} 
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 cursor-default group"
            >
              <div className="text-slate-400 group-hover:text-primary transition-colors">
                {p.icon}
              </div>
              <span className="text-xl font-bold text-slate-400 group-hover:text-primary transition-colors">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'CRM Implementation',
      description: 'Strategic setup and migration for HubSpot, Salesforce, and Zoho. We align your CRM with your sales process.',
      icon: <Database className="w-8 h-8 text-accent" />,
      color: 'bg-blue-50'
    },
    {
      title: 'Workflow Automation',
      description: 'Eliminate manual tasks and human error. We build complex automation pipelines that save hundreds of hours.',
      icon: <Zap className="w-8 h-8 text-accent" />,
      color: 'bg-cyan-50'
    },
    {
      title: 'Data Analytics',
      description: 'Turn raw data into actionable insights. Custom Power BI and Looker dashboards for real-time decision making.',
      icon: <BarChart3 className="w-8 h-8 text-accent" />,
      color: 'bg-indigo-50'
    },
    {
      title: 'AI Integration',
      description: 'Leverage LLMs and AI agents to automate customer support, lead scoring, and content generation.',
      icon: <Cpu className="w-8 h-8 text-accent" />,
      color: 'bg-slate-50'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Technology Solutions Built for Scale
          </h3>
          <p className="text-lg text-slate-600">
            We don't just install software. We build integrated ecosystems that drive measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm card-hover flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${s.color} rounded-xl flex items-center justify-center mb-6`}>
                {s.icon}
              </div>
              <h4 className="text-xl font-bold text-primary mb-4">{s.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {s.description}
              </p>
              <a href="#contact" className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsCounter = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-extrabold text-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: 'The Home Depot',
      outcome: '40% Increase in Lead Capture',
      description: 'We streamlined their service professional CRM integration, allowing for real-time lead distribution and automated follow-ups.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/TheHomeDepot.svg',
      type: 'logo'
    },
    {
      title: 'Notion',
      outcome: '60% Faster Project Delivery',
      description: 'We architected a custom workspace template system that unified their product roadmap and engineering documentation.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
      type: 'logo'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Real Results for Real Businesses
            </h3>
          </div>
          <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all">
            View All Results
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className={`relative overflow-hidden rounded-2xl mb-6 aspect-video flex items-center justify-center ${c.type === 'logo' ? 'bg-white p-12' : 'bg-slate-800'}`}>
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className={`${c.type === 'logo' ? 'max-w-full max-h-full object-contain' : 'w-full h-full object-cover opacity-60'} transition-transform duration-500 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 ${c.type === 'logo' ? 'bg-gradient-to-t from-primary/20 to-transparent' : 'bg-gradient-to-t from-primary/90 via-primary/20 to-transparent'} pointer-events-none`} />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold uppercase mb-2 inline-block">
                    {c.outcome}
                  </div>
                  <h4 className={`text-2xl font-bold ${c.type === 'logo' ? 'text-primary' : 'text-white'}`}>{c.title}</h4>
                </div>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {c.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          <StatsCounter value="15" label="Happy Clients" suffix="+" />
          <StatsCounter value="45" label="Avg. Revenue Growth" suffix="%" />
          <StatsCounter value="12" label="Platform Partners" />
          <StatsCounter value="100" label="Client Retention" suffix="%" />
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Audit & Strategy',
      description: 'We analyze your current tech stack and business goals to identify bottlenecks and opportunities.',
      icon: <Search className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Build & Integrate',
      description: 'Our engineers build custom integrations and optimize your CRM to match your unique workflow.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Scale & Optimize',
      description: 'We provide ongoing support and data-driven insights to ensure your systems grow with your business.',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How We Deliver ROI
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-white p-10 rounded-2xl border border-slate-200 shadow-sm group"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary text-accent rounded-xl flex items-center justify-center font-bold text-xl shadow-lg">
                {step.number}
              </div>
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-primary mb-4">{step.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-slate-200" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[100px]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Get Started</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Let’s Build Something That <span className="text-accent">Works</span>
              </h3>
              <p className="text-xl text-slate-400 mb-10">
                Ready to optimize your operations? Book a free strategy session to discuss your goals and how we can help.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                    <Mail className="w-6 h-6" />
                  </div>
                  <a href="mailto:steven@readyupsolutions.com" className="text-white font-medium hover:text-accent transition-colors">steven@readyupsolutions.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                    <Phone className="w-6 h-6" />
                  </div>
                  <a href="tel:3109513370" className="text-white font-medium hover:text-accent transition-colors">(310) 951-3370</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium">Free Tech Stack Audit</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium">Custom ROI Roadmap</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-white font-medium">No-Obligation Consultation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">How can we help?</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all">
                    <option>CRM Implementation</option>
                    <option>Workflow Automation</option>
                    <option>Data Analytics</option>
                    <option>AI Integration</option>
                    <option>Other</option>
                  </select>
                </div>
                <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg">
                  Book My Strategy Call
                </button>
                <p className="text-center text-xs text-slate-400">
                  By clicking, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <Zap className="text-primary w-5 h-5 fill-primary" />
              </div>
              <span className="text-xl font-bold text-white">
                READY UP <span className="text-accent">SOLUTIONS</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              We align technology with business strategy to deliver measurable ROI. Specialized in CRM, Automation, and AI workflows for modern organizations.
            </p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com/company/ready-up-solutions/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="tel:3109513370" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:steven@readyupsolutions.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            <div className="max-w-sm">
              <h5 className="text-white font-bold mb-4">Stay Updated</h5>
              <p className="text-slate-400 text-sm mb-4">Get the latest CRM & AI insights delivered to your inbox.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:ring-1 focus:ring-accent w-full"
                />
                <button className="bg-accent text-primary px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all">
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6">Quick Links</h5>
            <ul className="space-y-4">
              <li><a href="#home" className="text-slate-400 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#case-studies" className="text-slate-400 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-accent transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Contact</h5>
            <ul className="space-y-4">
              <li>
                <a href="mailto:steven@readyupsolutions.com" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> steven@readyupsolutions.com
                </a>
              </li>
              <li>
                <a href="tel:3109513370" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (310) 951-3370
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ready-up-solutions/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ready Up Solutions. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Zap className="w-3 h-3 text-accent fill-accent" /> for high performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: 'ROI Focused', desc: 'We don\'t just implement tech; we ensure it drives revenue and saves costs.' },
    { title: 'Platform Agnostic', desc: 'We recommend the best tool for your specific needs, not just what we sell.' },
    { title: 'AI-First Approach', desc: 'We integrate modern AI workflows into every project for maximum efficiency.' },
    { title: 'Ongoing Support', desc: 'We stay with you after the build to ensure long-term success and scaling.' }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Why Ready Up?</h2>
            <h3 className="text-4xl font-bold text-primary mb-8">
              The Strategic Advantage for Your Business
            </h3>
            <div className="space-y-8">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{r.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/strategy/800/800" 
                alt="Strategic Planning" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">100%</div>
              <div className="text-slate-500 font-medium">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: 'Which CRMs do you specialize in?', a: 'We are certified experts in HubSpot, Salesforce, and Zoho, but we also work with Pipedrive and Microsoft Dynamics.' },
    { q: 'How long does a typical implementation take?', a: 'Small setups take 2-4 weeks, while enterprise migrations and complex AI integrations can take 3-6 months.' },
    { q: 'Do you offer ongoing support?', a: 'Yes, we offer monthly optimization retainers to ensure your systems evolve with your business.' },
    { q: 'Can you integrate AI into our existing CRM?', a: 'Absolutely. We specialize in building AI agents and LLM-powered workflows that sit directly inside your CRM.' }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
          <h3 className="text-4xl font-bold text-primary">Common Questions</h3>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-primary">{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <Menu className="w-5 h-5 text-slate-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-slate-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  const certs = [
    {
      name: 'HubSpot Certified',
      level: 'Solutions Partner',
      icon: <Layers className="w-10 h-10 text-orange-500" />,
      desc: 'Expertise in HubSpot CRM, Marketing, and Sales Hub implementation.'
    },
    {
      name: 'Salesforce Certified',
      level: 'Administrator',
      icon: <Database className="w-10 h-10 text-blue-500" />,
      desc: 'Certified in Salesforce configuration, security, and data management.'
    },
    {
      name: 'Zoho Authorized',
      level: 'Consulting Partner',
      icon: <Zap className="w-10 h-10 text-red-500" />,
      desc: 'Authorized partner for Zoho One and CRM customization.'
    },
    {
      name: 'Microsoft Certified',
      level: 'Power BI Analyst',
      icon: <BarChart3 className="w-10 h-10 text-yellow-500" />,
      desc: 'Specialized in advanced data modeling and visualization.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Certified Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            Official Partners of the Platforms You Trust
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col items-center text-center hover:border-accent/50 transition-colors group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>
              <h4 className="text-lg font-bold text-primary">{cert.name}</h4>
              <p className="text-accent text-xs font-bold uppercase tracking-wider mb-3">{cert.level}</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Services />
        <WhyChooseUs />
        <Certifications />
        <Process />
        <CaseStudies />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
