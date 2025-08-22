import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';

const projects: Project[] = [
  {
    title: "LadeStack – AI Developer Tools",
    description: "A collection of AI-powered free tools for developers, from API testing to documentation generators.",
    tech_stack: ["Next.js", "Tailwind", "Firebase", "LLM APIs"],
    image: "https://placehold.co/600x400/121212/ffffff",
    link: "https://ladestack.com",
    data_ai_hint: "developer tools"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-fledged multi-vendor e-commerce site with cart, checkout, Razorpay integration, and admin dashboard. Built in just 4 days with advanced filters and wishlist.",
    tech_stack: ["React", "Firebase", "Node.js"],
    image: "https://placehold.co/600x400/181818/ffffff",
    link: "#",
    data_ai_hint: "ecommerce platform"
  },
  {
    title: "Phone Directory App",
    description: "Airtable-powered contact directory with search, WhatsApp links, and social integrations.",
    tech_stack: ["Airtable API", "Next.js", "TailwindCSS"],
    image: "https://placehold.co/600x400/242424/ffffff",
    link: "#",
    data_ai_hint: "directory app"
  },
  {
    title: "Docs Summariser (Side Project)",
    description: "AI-powered summarizer for documentation and articles.",
    tech_stack: ["Python", "LLM APIs", "Streamlit"],
    image: "https://placehold.co/600x400/323232/ffffff",
    link: "#",
    data_ai_hint: "document summarizer"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        Featured Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
