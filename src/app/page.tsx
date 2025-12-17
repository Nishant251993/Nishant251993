import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export const dynamic = "force-static";
export default function Page() {
  return (
    <main className="flex flex-col">
      <section className="w-full flex flex-wrap relative">
        <section
          id="hero"
          className="w-full px-5 md:w-1/3 md:px-0 space-y-8 md:sticky top-24 h-max mb-10"
        >
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="md:text-xl mt-3"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
              <BlurFadeText
                className="text-sm mt-1"
                delay={BLUR_FADE_DELAY}
                text={"Bangalore | India"}
              />
            </div>
          </div>

          <div id="skills" className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge
                    key={skill}
                    variant={"outline"}
                    className="text-xs font-light"
                  >
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>

          <div id="top-contact" className="text-sm">
            <BlurFade delay={BLUR_FADE_DELAY * 22} className="mb-5">
              <p className="text-sm text-pretty mt-2 text-muted-foreground">
                <a
                  href="http://wa.me/+919039625322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-all"
                >
                  +91 9039625322 (Whatsapp)
                </a>{" "}
                /{" "}
                <a
                  href="tel:+919039625322"
                  className="hover:text-blue-500 transition-all"
                >
                  9039625322
                </a>
              </p>
              <p className="text-sm text-pretty mt-2 text-muted-foreground hover:text-blue-500 transition-all">
                <a href={`mailto:` + DATA.contact.email}>
                  {DATA.contact.email}
                </a>
              </p>
            </BlurFade>

            <div className="flex flex-wrap w-full gap-2 justify-between items-center">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social], i) => (
                  <BlurFade
                    delay={BLUR_FADE_DELAY * 30 + i * 0.1}
                    key={name}
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 mb-2 text-muted-foreground hover:text-blue-500"
                    >
                      <span className="transition-all text-pretty text-xm ">
                        {name}
                      </span>
                      <ArrowUpRight size={20} />
                    </a>
                  </BlurFade>
                ))}
              <BlurFade delay={BLUR_FADE_DELAY * 36}>
                <a
                  href={"/Nishant251993/Nishant Patel - Dot Net Developer.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mb-2 text-white bg-blue-800 rounded-sm px-2 py-1 hover:-translate-y-1 transition-all"
                >
                  <span className="transition-all text-pretty text-xm ">
                    Resume
                  </span>
                  <ArrowUpRight size={20} />
                </a>
              </BlurFade>
            </div>
          </div>
        </section>

        <section id="details" className="w-full px-5 md:w-2/3 md:px-16 h-auto">
          <div id="about">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold mb-3">About</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </div>

          <div id="work" className="flex min-h-0 flex-col gap-y-3 my-20">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.work.map((work, id) => (
                  <BlurFade
                    key={work.company + work.start}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={work.company}
                      description={work.description}
                      location={"Mumbai, India"}
                      image={work.logoUrl}
                      badges={work.badges}
                      dates={`${work.start} - ${work.end}`}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>

          <div id="education" className="flex flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
      </section>
      <section id="projects" className="px-6 mt-20 overflow-hidden">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. <br /> Here are a few of
                  my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  links={project.links}
                  active={project.active}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="px-6 mt-20">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Upcoming Projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A few commercial projects and ideas i'm working on during my
                  free time. <br /> This also helps me add new skills and grow.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.upComingProjects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  links={project.links}
                  active={project.active}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
