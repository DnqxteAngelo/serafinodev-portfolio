import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return  (
        <section id="hero" className="container py-24 md:py-32">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col justify-center space-y-4 md:col-span-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hi, I&apos;m Angelo Serafino</h1>
                <p className="mt-4 text-xl text-muted-foreground">
                I&apos;m a passionate full-stack app developer with a strong focus on building dynamic and user-friendly web and mobile applications. Let&apos;s build something amazing together!
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 md:flex-none" asChild>
                  <Link href="#contact">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button className="flex-1 md:flex-none" variant="outline" asChild>
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
                <div className="flex justify-center gap-4 pt-4 md:justify-start">
                <Link href="https://github.com/DnqxteAngelo" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/angelo-serafino-19b6b6354/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:serafinoangelo28@gmail.com">
                  <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                  </Button>
                </Link>
                </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[350px] overflow-hidden rounded-full border-4 border-border">
                <Image
                  src="/hero-avatar.JPG"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
    )
}