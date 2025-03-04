"use client";

import { useEffect, useState } from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  Code,
  Folder,
  Home,
  Phone,
  Mail,
  Moon,
  Sun,
  User,
  Github,
  Linkedin,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "./ui/separator";

const navItems = [
  { id: "hero", label: "Home", icon: <Home /> },
  { id: "about", label: "About", icon: <User /> },
  { id: "skills", label: "Skills", icon: <Code /> },
  { id: "projects", label: "Projects", icon: <Folder /> },
  { id: "contact", label: "Contact", icon: <Phone /> },
];

const socialItems = [
  {
    label: "GitHub",
    icon: <Github />,
    link: "https://github.com/DnqxteAngelo",
  },
  {
    label: "LinkedIn",
    icon: <Linkedin />,
    link: "https://linkedin.com/in/angelo-serafino-19b6b6354/",
  },
  { label: "Email", icon: <Mail />, link: "mailto:serafinoangelo28@gmail.com" },
];

export default function DockNav() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial screen width check
    setIsMobile(window.innerWidth < 768);

    // Listen for resize events
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <TooltipProvider>
      <Dock direction="middle" className="fixed bottom-4 z-50">
        {navItems.map((item) => (
          <DockIcon
            key={item.label}
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Tooltip>
              <TooltipTrigger asChild>{item.icon}</TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}

        {!isMobile && (
          <>
            <Separator orientation="vertical" className="h-full py-2" />

            {socialItems.map((item) => (
              <DockIcon
                key={item.label}
                onClick={() => window.open(item.link, "_blank")}
              >
                <Tooltip>
                  <TooltipTrigger asChild>{item.icon}</TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </>
        )}

        <Separator orientation="vertical" className="h-full py-2" />

        <DockIcon onClick={toggleTheme}>
          <Tooltip>
            <TooltipTrigger asChild>
              {theme === "light" ? <Moon /> : <Sun />}
            </TooltipTrigger>
            <TooltipContent>
              {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
