import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { FaReact, FaNodeJs, FaPhp, FaBootstrap, FaGitAlt, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiMysql, SiFlutter, SiSupabase } from "react-icons/si";
import { JSX } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techIcons: { [key: string]: JSX.Element } = {
  React: <FaReact className="mr-1" />,
  NextJS: <SiNextdotjs className="mr-1" />,
  "Node.js": <FaNodeJs className="mr-1" />,
  PHP: <FaPhp className="mr-1" />,
  MySQL: <SiMysql className="mr-1" />,
  Prisma: <SiPrisma className="mr-1" />,
  Flutter: <SiFlutter className="mr-1" />,
  Supabase: <SiSupabase className="mr-1" />,
  Bootstrap: <FaBootstrap className="mr-1" />,
  JavaScript: <FaJs className="mr-1" />,
  HTML: <FaHtml5 className="mr-1" />,
  CSS: <FaCss3Alt className="mr-1" />,
  Git: <FaGitAlt className="mr-1" />,
};

const projects = [
  {
    title: "Training Data Management System",
    description:
      "Originally developed as our capstone project, this web-based system was further enhanced during my internship to improve its functionality and scalability.",
    image: "/projects/tdms.jpeg",
    tags: ["React", "NextJS", "Node.js", "Prisma", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Teacher Evaluation Application",
    description:
      "Developed as my final project in my course, this application enables efficient teacher evaluations using a user-friendly interface.",
    image: "/projects/evaluation_app.png",
    tags: ["Flutter", "PHP", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CITE Spotlight",
    description:
      "Developed as a project for our department events, CITE Spotlight is an interactive app where users can nominate and vote for the hottest individuals with a seamless voting experience and real-time updates.",
    image: "/projects/cite_spotlight.png",
    tags: ["Flutter", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsGrid() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card key={project.title} className="overflow-hidden flex flex-col">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center px-2 py-1">
              {techIcons[tag] || null}
              {tag}
            </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-auto">
            <Button variant="outline" size="sm" asChild>
              <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
              >
            <Github className="mr-2 h-4 w-4" />
            Code
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
              >
            Live Demo
            <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container py-24 md:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Projects
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A selection of projects I&apos;ve worked on
        </p>
      </div>
      <ProjectsGrid />
    </section>
  );
}
