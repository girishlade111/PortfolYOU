import Header from '@/components/common/Header';
import FooterGlow from '@/components/common/FooterGlow';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import AIDescriptionGenerator from '@/components/sections/AIDescriptionGenerator';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <AIDescriptionGenerator />
        <Contact />
      </main>
      <FooterGlow />
    </div>
  );
}
