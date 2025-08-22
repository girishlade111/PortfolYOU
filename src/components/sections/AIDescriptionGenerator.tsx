"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { generateDescriptionAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Bot } from 'lucide-react';

const initialState = {
  message: '',
  description: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generating...' : 'Generate Description'}
    </Button>
  );
}

export default function AIDescriptionGenerator() {
  const [state, formAction] = useActionState(generateDescriptionAction, initialState);

  return (
    <section id="ai-tool" className="py-20 md:py-32">
      <div className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-4">
          AI Portfolio Assistant
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
          Struggling with writer's block? Use our AI-powered tool to generate a professional portfolio description.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto bg-card/50">
        <form action={formAction}>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-full">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-headline">Generate Your Bio</CardTitle>
            </div>
            <CardDescription>
              Fill in the details below and let our AI craft the perfect bio for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="skills">Your Skills</Label>
              <Input
                id="skills"
                name="skills"
                placeholder="e.g., React, Next.js, Figma, UI/UX Design"
                required
              />
              {state?.errors?.skills && <p className="text-sm text-destructive">{state.errors.skills[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Your Experience</Label>
              <Textarea
                id="experience"
                name="experience"
                placeholder="Describe your professional background and key achievements."
                className="min-h-[100px]"
                required
              />
              {state?.errors?.experience && <p className="text-sm text-destructive">{state.errors.experience[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="targetAudience">Target Audience</Label>
              <Input
                id="targetAudience"
                name="targetAudience"
                placeholder="e.g., Tech Recruiters, Potential Clients, Startups"
                required
              />
              {state?.errors?.targetAudience && <p className="text-sm text-destructive">{state.errors.targetAudience[0]}</p>}
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <SubmitButton />
            {state?.message && state.message !== 'Success' && <p className="text-sm text-destructive">{state.message}</p>}
          </CardFooter>
        </form>
        {state?.description && (
          <div className="p-6 border-t">
            <h4 className="text-lg font-semibold mb-2">Generated Description:</h4>
            <div className="p-4 rounded-md bg-muted/50 prose prose-invert max-w-none">
              <p>{state.description}</p>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}
