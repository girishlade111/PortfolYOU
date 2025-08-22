import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '../ui/button';
import { Download } from 'lucide-react';

const skills = {
  "Frontend": ["React", "Next.js", "TailwindCSS", "Framer Motion"],
  "Backend": ["Node.js", "Firebase", "Express", "Airtable APIs"],
  "UI/UX": ["Figma", "Wireframing", "Design Systems"],
  "AI/ML": ["LLM Integrations", "Agents", "Data Science"],
  "Tools": ["GitHub", "Vercel", "Netlify"]
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden group order-first md:order-last">
          <Image
            src="https://placehold.co/600x600"
            alt="Girish Lade profile photo"
            width={600}
            height={600}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            data-ai-hint="modern cutout"
          />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Who Am I?
          </h2>
          <div className="text-lg text-foreground/80 space-y-4 leading-relaxed">
            <p>
              I’m Girish Lade, a programmer, web developer, and UI/UX designer based in India. Over the past few years, I’ve been building websites, SaaS tools, and e-commerce platforms that blend creativity with functionality.
            </p>
            <p>
              With expertise in frontend, backend, and AI integration, I love creating solutions that simplify complex workflows. Currently, I’m building LadeStack, a tech brand offering free developer tools integrated with AI.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold text-lg mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
           <Button asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
