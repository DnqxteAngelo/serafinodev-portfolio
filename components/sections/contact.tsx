"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS config
    const serviceID = "service_zb0kmam"; // Replace with your EmailJS Service ID
    const templateID = "template_1aqepcj"; // Replace with your EmailJS Template ID
    const userID = "nIQWtUvMCA83qTgZm"; // Replace with your EmailJS Public Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send email
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setIsSubmitting(false);
        toast("Message sent!", {
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again later.");
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <div className="mx-auto mt-12 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Send me a message</CardTitle>
          <CardDescription>
            I&apos;m interested in job opportunities, freelance projects, or
            just connecting with fellow developers.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                required
                maxLength={500}
              />
              <p className="text-sm text-gray-500">
                {formData.message.length}/500
              </p>
            </div>
          </CardContent>
          <CardFooter className="mt-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Get in Touch
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I&apos;m currently looking for new opportunities to grow as a
            developer. Feel free to reach out if you&apos;d like to connect!
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
