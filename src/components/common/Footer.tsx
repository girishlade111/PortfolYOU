'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Codepen, Mail } from 'lucide-react';
import SparklesLogo from './SparklesLogo';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <SparklesLogo className="h-8 w-8" />
              <span className="font-bold text-xl text-foreground">LadeStack</span>
            </Link>
             <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-foreground/80">
                <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
                <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/girish_lade_/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
             <a href="https://codepen.io/Girish-Lade-the-looper" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Codepen className="h-5 w-5" />
            </a>
            <a href="mailto:girishlade111@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} LadeStack. Built with ❤️ by Girish Lade.</p>
        </div>
      </div>
    </footer>
  );
}
