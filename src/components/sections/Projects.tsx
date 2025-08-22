import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';

const projects: Project[] = [
  {
    title: "E-commerce Platform Redesign",
    description: "A complete overhaul of a legacy e-commerce site, focusing on a modern user experience and mobile-first design.",
    tech_stack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "https://placehold.co/600x400/121212/ffffff",
    link: "#",
    data_ai_hint: "ecommerce website"
  },
  {
    title: "SaaS Dashboard for Analytics",
    description: "Designed and developed a complex data visualization dashboard for a SaaS product.",
    tech_stack: ["React", "D3.js", "Node.js", "GraphQL"],
    image: "https://placehold.co/600x400/181818/ffffff",
    link: "#",
    data_ai_hint: "dashboard analytics"
  },
  {
    title: "Mobile App for Social Networking",
    description: "A cross-platform mobile app to connect like-minded individuals, featuring real-time chat and event organization.",
    tech_stack: ["React Native", "Firebase", "Figma"],
    image: "https://placehold.co/600x400/242424/ffffff",
    link: "#",
    data_ai_hint: "mobile app"
  },
  {
    title: "Portfolio Website for a Photographer",
    description: "A minimal and elegant portfolio website to showcase the works of a professional photographer.",
    tech_stack: ["Gatsby", "Contentful", "GSAP"],
    image: "https://placehold.co/600x400/323232/ffffff",
    link: "#",
    data_ai_hint: "photography portfolio"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
