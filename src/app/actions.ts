"use server";

import { z } from "zod";
import { generatePortfolioDescription } from "@/ai/flows/generate-portfolio-description";

const generateDescriptionSchema = z.object({
  skills: z.string().min(3, "Please list at least one skill."),
  experience: z.string().min(10, "Please describe your experience in at least 10 characters."),
  targetAudience: z.string().min(3, "Please specify your target audience."),
});

export async function generateDescriptionAction(prevState: any, formData: FormData) {
  const validatedFields = generateDescriptionSchema.safeParse({
    skills: formData.get("skills"),
    experience: formData.get("experience"),
    targetAudience: formData.get("targetAudience"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
      description: "",
    };
  }

  try {
    const result = await generatePortfolioDescription(validatedFields.data);
    return {
      message: "Success",
      description: result.description,
      errors: {},
    };
  } catch (error) {
    console.error("AI description generation failed:", error);
    return {
      message: "An error occurred while generating the description. Please try again.",
      description: "",
      errors: {},
    };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function sendContactMessageAction(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log("Contact form submitted:", validatedFields.data);
  // Here you would typically send an email or save to a database.
  
  return {
    success: true,
    message: "Thank you for your message! I will get back to you soon.",
    errors: {},
  };
}
