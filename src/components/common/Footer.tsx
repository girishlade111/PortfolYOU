'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import SparklesLogo from './SparklesLogo';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <SparklesLogo className="h-8 w-8" />
              <span className="font-bold text-xl text-foreground">PortfolYOU</span>
            </Link>
            <p className="text-foreground/60 text-sm text-center md:text-left">
              A modern portfolio for developers and designers.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center col-span-1 md:col-span-2">
             <div className="flex gap-4">
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                 <Github className="h-5 w-5" />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                 <Linkedin className="h-5 w-5" />
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                 <Twitter className="h-5 w-5" />
               </a>
             </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} PortfolYOU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
