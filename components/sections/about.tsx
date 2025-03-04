import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

export default function About() {
    return (
        <section id="about" className="container py-24 md:py-32">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
                <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
                    About Me
                </h2>
                <p className="max-w-[75%] leading-relaxed text-muted-foreground sm:text-lg sm:leading-7">
                    I&apos;m a recent BSIT graduate with a year of hands-on experience in
                    web and mobile development through my internship. I&apos;m passionate about
                    creating clean, efficient code and user-friendly interfaces. I&apos;m
                    eager to apply my academic knowledge and practical skills to
                    contribute to innovative projects and continue growing as a developer.
                </p>
                <Separator className="my-6" />
                <div className="grid w-full gap-8 md:grid-cols-2">
                    <Card className="transition-transform transform hover:scale-105">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex gap-x-2 items-center justify-center">
                                    <GraduationCap />
                                    Education
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Bachelor of Science in Information Technology
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    PHINMA - Cagayan de Oro College, 2021-2025
                                </p>
                                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside text-start">
                                    <li>Major in Web Development</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="transition-transform transform hover:scale-105">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex gap-x-2 items-center justify-center">
                                    <Briefcase />
                                    Experience
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg">Intern (Web Developer)</h3>
                                <p className="text-sm text-muted-foreground">
                                    Del Monte Philippines Inc., 2024-2025
                                </p>
                                <ul className="mt-2 text-sm text-muted-foreground list-disc list-inside text-start">
                                    <li>Developed web-based management system</li>
                                    <li>Implemented UI designs using modern frameworks</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
