import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const skills = [
  'UI/UX Design', 'React', 'Next.js', 'TypeScript', 'Node.js',
  'Figma', 'JavaScript', 'HTML5 & CSS3', 'Tailwind CSS',
  'Firebase', 'GraphQL', 'REST APIs',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2">
          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300 z-10"></div>
            <Image
              src="https://placehold.co/600x600/222222/ffffff"
              alt="Professional profile photo"
              width={600}
              height={600}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              data-ai-hint="professional profile"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I'm a passionate and results-driven Developer and Designer with a knack for creating engaging and user-friendly digital experiences. With a background in both front-end development and UI/UX design, I bridge the gap between aesthetics and functionality to deliver products that are not only beautiful but also highly performant and accessible.
          </p>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            My journey in tech began with a curiosity for how things work, which evolved into a deep passion for building and designing. I thrive in collaborative environments and am always eager to learn new technologies and methodologies to stay at the forefront of the industry.
          </p>
          <h3 className="text-2xl font-bold mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 bg-accent/20 border-accent/50 text-foreground">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
