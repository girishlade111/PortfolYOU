"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] w-full flex items-center justify-center text-center overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-grid-white/5"></div>
      <div className="container z-10">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Developer & Designer
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 animate-fade-in-up animation-delay-300">
          I build beautiful, responsive, and user-centric web experiences. Turning complex problems into elegant, intuitive designs.
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="#contact">
              Get In Touch
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .bg-grid-white\\/5 {
          background-image: linear-gradient(hsl(var(--primary-foreground) / 0.05) 1px, transparent 1px), linear-gradient(to right, hsl(var(--primary-foreground) / 0.05) 1px, hsl(var(--background)) 1px);
          background-size: 2rem 2rem;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
