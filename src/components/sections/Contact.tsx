"use client";

import { useRef, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from 'lucide-react';

type Errors = Partial<Record<"name" | "email" | "message", string[]>>;

export default function Contact() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const errs: Errors = {};
    if (name.length < 2) errs.name = ["Name must be at least 2 characters."];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = ["Please enter a valid email address."];
    if (message.length < 10) errs.message = ["Message must be at least 10 characters."];
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    // Client-side only (static export): open the visitor's mail client with the
    // message pre-filled, since there is no backend to deliver it.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:girishlade111@gmail.com?subject=${subject}&body=${body}`;
    setSending(false);
    toast({
      title: "Message Ready!",
      description: "Your email client should open with the message pre-filled. Just hit send!",
    });
    form.reset();
    setErrors({});
  }

  return (
    <section id="contact" className="py-20 md:py-32">
       <div className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
          I’m always open to discussing new projects, collaborations, or freelance opportunities. Whether you’re looking for a developer, a designer, or a partner for AI projects — let’s connect.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {errors?.name && <p className="text-sm text-destructive">{errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  {errors?.email && <p className="text-sm text-destructive">{errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[120px]" required />
                  {errors?.message && <p className="text-sm text-destructive">{errors.message[0]}</p>}
                </div>
                <Button type="submit" disabled={sending} className="w-full">
                  {sending ? 'Preparing...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <a href="mailto:girishlade111@gmail.com" className="text-lg text-foreground/80 hover:text-primary transition-colors">girishlade111@gmail.com</a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with me</h3>
            <div className="flex gap-4">
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/girishlade111" target="_blank"><Github className="h-5 w-5" /></a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://www.linkedin.com/in/girish-lade-075bba201/" target="_blank"><Linkedin className="h-5 w-5" /></a>
              </Button>
               <Button asChild variant="outline" size="icon">
                <a href="https://www.instagram.com/girish_lade_/" target="_blank"><Instagram className="h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
