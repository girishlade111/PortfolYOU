import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.data_ai_hint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold font-headline mb-2">{project.title}</h3>
        <p className="text-foreground/80 mb-4">{project.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-6 pt-0">
         <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/20 border-accent/50 text-foreground">
              {tech}
            </Badge>
          ))}
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href={project.link}>
            View Case Study
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
