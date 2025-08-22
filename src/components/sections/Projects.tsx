import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';

const projects: Project[] = [
  {
    title: "LadeStack – AI Developer Tools",
    description: "A collection of AI-powered free tools for developers, from API testing to documentation generators.",
    tech_stack: ["Next.js", "Tailwind", "Firebase", "LLM APIs"],
    image: "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxkZXZlbG9wZXIlMjB0b29sc3xlbnwwfHx8fDE3NTU4NjA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "https://ladestack.com",
    data_ai_hint: "developer tools"
  },
  {
    title: "E-Commerce Platform",
    description: "Full-fledged multi-vendor e-commerce site with cart, checkout, Razorpay integration, and admin dashboard. Built in just 4 days with advanced filters and wishlist.",
    tech_stack: ["React", "Firebase", "Node.js"],
    image: "https://images.unsplash.com/photo-1660198348421-d80e956c7db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlY29tbWVyY2UlMjBwbGF0Zm9ybXxlbnwwfHx8fDE3NTU4NjA3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
    data_ai_hint: "ecommerce platform"
  },
  {
    title: "Phone Directory App",
    description: "Airtable-powered contact directory with search, WhatsApp links, and social integrations.",
    tech_stack: ["Airtable API", "Next.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1738640679960-58d445857945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxkaXJlY3RvcnklMjBhcHB8ZW58MHx8fHwxNzU1ODYwNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: "#",
    data_ai_hint: "directory app"
  },
  {
    title: "Docs Summariser (Side Project)",
    description: "AI-powered summarizer for documentation and articles.",
    tech_stack: ["Python", "LLM APIs", "Streamlit"],
    image: "https://images.unsplash.com/photo-1621409474528-cba7f03258e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxkb2N1bWVudCUyMHN1bW1hcml6ZXJ8ZW58MHx8fHwxNzU1ODYwNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
