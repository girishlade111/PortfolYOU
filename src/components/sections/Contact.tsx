"use client";

import { useEffect, useRef, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContactMessageAction } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(sendContactMessageAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Message Sent!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

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
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                  {state?.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                  {state?.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[120px]" required />
                  {state?.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
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
