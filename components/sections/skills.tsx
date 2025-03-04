import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaGit, FaGithub, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiDart, SiFlutter, SiMysql, SiPrisma, SiSupabase, SiScrumalliance } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "NextJS", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Dart", icon: SiDart },
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: DiVisualstudio },
      { name: "Figma", icon: FaFigma },
      { name: "Agile/Scrum", icon: SiScrumalliance },
    ],
  },
];

export function SkillList() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {skillCategories.map((category) => (
        <Card key={category.name} className="hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <h3 className="mb-4 text-lg font-semibold">{category.name}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map(({ name, icon: Icon }) => (
                <Badge key={name} variant="secondary" className="flex items-center gap-2 px-3 py-2 hover:bg-primary hover:text-white transition">
                  <Icon className="text-xl" /> {name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Skills and Tools</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Technologies and tools I&apos;ve worked with
          </p>
        </div>
        <SkillList />
      </div>
    </section>
  );
}
