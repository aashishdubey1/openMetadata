import React, { useState, useEffect } from 'react';
// import { Menu, X, ChevronRight, Database, Zap, Shield, Users, GitBranch, BarChart3 } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollSection from './components/ScrollSection';
import Features from './components/Features';


const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">    
    <Header isMenuOpen={isMenuOpen} isScrolled={isScrolled} setIsMenuOpen={setIsMenuOpen}/>     
    <Hero />
    <ScrollSection />
    <Features />
    </div>
  );
};

export default LandingPage;