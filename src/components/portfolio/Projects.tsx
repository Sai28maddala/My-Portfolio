import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { ImagePlaceholder, Reveal, Section, SectionHeader } from "./ui";

function ProjectCard({ p, n }: { p: Project; n: number }) {
  return (
    <article className="group relative h-full cut-corner bg-border p-px transition duration-500 hover:-translate-y-1.5 hover:bg-gradient-accent">
      <div className="flex h-full flex-col cut-corner bg-card">
        <div className="relative overflow-hidden">
          <ImagePlaceholder src={p.image} alt={p.title} label="Project preview" className="aspect-[16/9] w-full transition duration-700 group-hover:scale-105" />
          <span className="absolute left-5 top-5 font-display text-5xl font-light text-foreground/90 drop-shadow">{String(n).padStart(2, "0")}</span>
          {p.badge && <span className="pill absolute right-5 top-5 bg-background/80 text-lavender backdrop-blur">{p.badge}</span>}
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <h3 className="font-display text-2xl font-light leading-tight sm:text-3xl">{p.title}</h3>
          {p.subtitle && <p className="mt-1 text-sm text-pink">{p.subtitle}</p>}
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="pill">{t}</span>)}</div>
          <div className="mt-auto flex flex-wrap gap-3 pt-7 transition md:translate-y-2 md:opacity-70 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:border-lavender hover:text-lavender">
              <Github className="h-4 w-4" />GitHub
            </a>
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90">
                Live Demo<ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="bg-card/40">
      <SectionHeader index="04" eyebrow="Selected work" title={<>Projects I've <em className="text-gradient">built</em></>}>
        Ten projects spanning generative and agentic AI, NLP, computer vision and full-stack engineering.
      </SectionHeader>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1}><ProjectCard p={p} n={i + 1} /></Reveal>
        ))}
      </div>
    </Section>
  );
}
