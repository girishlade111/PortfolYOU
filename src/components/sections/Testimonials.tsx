import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Girish transformed our idea into a full-fledged platform in record time. His mix of design and technical skills is outstanding.",
    name: "Client A",
    title: "CEO, Tech Startup",
    avatar: "https://placehold.co/100x100?text=CA"
  },
  {
    quote: "A rare talent — he codes, designs, and thinks product-first. Highly recommend working with him.",
    name: "Client B",
    title: "Product Manager, SaaS Co.",
    avatar: "https://placehold.co/100x100?text=CB"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
            What People Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
            I've had the pleasure of working with some amazing people. Here's what they think.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <p className="text-lg text-foreground/90 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-foreground/70">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
