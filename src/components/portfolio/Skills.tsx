import { Award, Code2, Lightbulb, Trophy, UsersRound } from "lucide-react";
import { achievements, certifications, skills } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./ui";

const accents = ["text-pink", "text-lavender", "text-sky"];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader index="05" eyebrow="Toolkit" title={<>Skills & <em className="text-gradient">technologies</em></>} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.category} delay={(i % 3) * 0.06} className={i === 1 ? "lg:row-span-2" : ""}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 transition hover:border-lavender/40">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl">{s.category}</h3>
                <span className={`eyebrow ${accents[i % 3]}`}>{String(s.items.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="rounded-lg border border-border px-3 py-1.5 text-sm transition hover:-translate-y-0.5 hover:border-pink/50 hover:text-pink">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section id="certifications" className="bg-card/40">
      <SectionHeader index="06" eyebrow="Credentials" title={<>Certifi<em className="text-gradient">cations</em></>} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={i} delay={(i % 4) * 0.06}>
            <div className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-lavender/40 sm:p-6">
              <Award className="mt-1 h-5 w-5 shrink-0 text-lavender" />
              <div>
                <h3 className="font-display text-lg leading-snug">{c.name}</h3>
                <p className="mt-2 text-sm text-pink">{c.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader index="07" eyebrow="Achievements & Hackathons" title={<>Milestones & <em className="text-gradient">hackathons</em></>} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {achievements.map((a, i) => {
          const Icon = a.type === "Achievement" ? Code2 : a.type === "Leadership" ? UsersRound : Lightbulb;
          return (
            <Reveal key={a.title} delay={(i % 2) * 0.06}>
              <article className="group h-full rounded-2xl border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-lavender/40 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow text-sky">{a.category}</span>
                  <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{a.type}</span>
                </div>
                <div className="mt-5 flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-lavender/20 bg-lavender/5 text-lavender transition-colors group-hover:border-pink/30 group-hover:text-pink">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-light leading-snug text-foreground sm:text-2xl">
                      {a.highlight && <span className="mr-2 text-3xl font-medium text-gradient sm:text-4xl">{a.highlight}</span>}
                      {a.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium tracking-wide text-pink">{a.org}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
