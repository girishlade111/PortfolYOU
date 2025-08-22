'use server';

/**
 * @fileOverview An AI agent that generates a portfolio description based on user input.
 *
 * - generatePortfolioDescription - A function that generates a portfolio description.
 * - GeneratePortfolioDescriptionInput - The input type for the generatePortfolioDescription function.
 * - GeneratePortfolioDescriptionOutput - The return type for the generatePortfolioDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioDescriptionInputSchema = z.object({
  skills: z
    .string()
    .describe('A comma-separated list of the user\u0027s skills.'),
  experience: z
    .string()
    .describe('A description of the user\u0027s experience.'),
  targetAudience: z
    .string()
    .describe('The target audience for the portfolio.'),
});
export type GeneratePortfolioDescriptionInput = z.infer<
  typeof GeneratePortfolioDescriptionInputSchema
>;

const GeneratePortfolioDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated portfolio description.'),
});
export type GeneratePortfolioDescriptionOutput = z.infer<
  typeof GeneratePortfolioDescriptionOutputSchema
>;

export async function generatePortfolioDescription(
  input: GeneratePortfolioDescriptionInput
): Promise<GeneratePortfolioDescriptionOutput> {
  return generatePortfolioDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioDescriptionPrompt',
  input: {schema: GeneratePortfolioDescriptionInputSchema},
  output: {schema: GeneratePortfolioDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling portfolio descriptions.

  Based on the user's skills, experience, and target audience, generate a portfolio description that highlights their strengths and appeals to their desired audience.

  Skills: {{{skills}}}
  Experience: {{{experience}}}
  Target Audience: {{{targetAudience}}}

  Write a professional and engaging portfolio description.
  `,
});

const generatePortfolioDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePortfolioDescriptionFlow',
    inputSchema: GeneratePortfolioDescriptionInputSchema,
    outputSchema: GeneratePortfolioDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
