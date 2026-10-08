import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./ui";

export function Experience() {
  return (
    <Section id="experience" className="bg-card/40">
      <SectionHeader index="02" eyebrow="Experience" title={<>Where I've <em className="text-gradient">worked</em></>} />
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-pink via-lavender to-transparent md:left-1/2" />
        <div className="space-y-14">
          {experience.map((e, i) => (
            <Reveal key={e.role} className={`relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0 ${i % 2 ? "" : ""}`}>
              <span className="absolute left-4 top-2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-border bg-background md:left-1/2">
                <Briefcase className="h-4 w-4 text-lavender" />
              </span>
              <div className={`md:pr-14 md:text-right ${i % 2 ? "md:order-2 md:pl-14 md:pr-0 md:text-left" : ""}`}>
                <div className="eyebrow text-sky">{e.period}</div>
                <h3 className="mt-2 font-display text-3xl font-light">{e.role}</h3>
                <p className="mt-1 text-pink">{e.company}</p>
              </div>
              <div className={`cut-corner border border-border bg-card p-6 transition hover:border-lavender/40 sm:p-8 ${i % 2 ? "md:order-1 md:mr-14" : "md:ml-14"}`}>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lavender" />{p}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="pill">{t}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education">
      <SectionHeader index="03" eyebrow="Education" title={<>Academic <em className="text-gradient">foundation</em></>} />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <div className={`group relative h-full overflow-hidden border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-sky/40 ${i === 0 ? "cut-corner" : "rounded-2xl"}`}>
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-sky/10 blur-2xl transition group-hover:bg-pink/15" />
              <GraduationCap className="h-6 w-6 text-sky" />
              <div className="eyebrow mt-8">{e.period}</div>
              <h3 className="mt-2 font-display text-2xl font-light">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
              <div className="mt-8 font-display text-4xl text-gradient">{e.score}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
