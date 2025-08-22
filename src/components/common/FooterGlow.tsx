"use client";

import { Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FooterGlow() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-border/40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-glow-line"></div>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">PortfolYOU</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="text-sm text-foreground/60 hover:text-primary transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact</Link>
        </div>
        <p className="text-sm text-foreground/60">
          {currentYear ? `© ${currentYear} PortfolYOU. All rights reserved.` : '© PortfolYOU. All rights reserved.'}
        </p>
      </div>
      <style jsx>{`
        @keyframes glow-line {
            0% { transform: translateX(-50%) scaleX(0); }
            50% { transform: translateX(-50%) scaleX(1); }
            100% { transform: translateX(-50%) scaleX(0); opacity: 0; }
        }
        .animate-glow-line {
            animation: glow-line 5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
