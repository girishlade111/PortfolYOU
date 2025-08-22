import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Brush, Bot, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Building responsive websites with modern frameworks and clean design.",
  },
  {
    icon: <Brush className="h-8 w-8 text-primary" />,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces, wireframes, and interactive prototypes.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Tools",
    description: "Integrating LLMs and AI workflows to create smarter apps.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "E-Commerce Solutions",
    description: "Scalable, feature-rich online stores with payments & dashboards.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            What I Do
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
            I offer a range of services to help you build and grow your digital products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center group hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-headline mb-2">{service.title}</CardTitle>
                <p className="text-foreground/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
