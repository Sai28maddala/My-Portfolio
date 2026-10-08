import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { GraduationCap, Code2, Brain, Database } from "lucide-react";
import { stats } from "@/data/portfolio";
import { Reveal, Section, SectionHeader } from "./ui";

function Counter({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: setV });
    return () => c.stop();
  }, [inView, value]);
  const shown = decimals ? v.toFixed(decimals) : Math.round(v).toString();
  return <span ref={ref}>{shown}<span className="text-muted-foreground text-2xl">{suffix}</span></span>;
}

const highlights = [
  { icon: GraduationCap, text: "B.Tech Computer Science, Woxsen University — CGPA 9.15/10" },
  { icon: Code2, text: "Strong foundation in software development, DSA, SQL and OOP" },
  { icon: Database, text: "Full-stack applications, REST APIs, backend services" },
  { icon: Brain, text: "Deep interest in Artificial Intelligence and Software Engineering" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader index="01" eyebrow="About" title={<>About <em className="text-gradient">Me</em></>} />
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-2xl font-light leading-snug sm:text-3xl">
            Computer Science undergraduate at Woxsen University with hands-on experience in software development, AI/ML, NLP, Generative AI and full-stack application development.
          </p>
          <ul className="mt-10 space-y-4">
            {highlights.map(({ icon: I, text }) => (
              <li key={text} className="flex items-start gap-4 text-muted-foreground">
                <I className="mt-0.5 h-5 w-5 shrink-0 text-lavender" />{text}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className={`group h-full border border-border bg-card p-6 transition hover:border-lavender/50 sm:p-8 ${i % 2 ? "rounded-2xl" : "cut-corner"}`}>
                <div className="font-display text-4xl font-light sm:text-5xl"><Counter {...s} /></div>
                <div className="eyebrow mt-4 group-hover:text-pink">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
