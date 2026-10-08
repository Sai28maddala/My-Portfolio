import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, Section, SectionHeader, btn } from "./ui";

const cards = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "maddala-venkata-sailakshmi", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "Sai28maddala", href: profile.github },
];

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-lavender";

export function Contact() {
  const [f, setF] = useState({ name: "", email: "", subject: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    // No backend configured: open the visitor's email app with the message prefilled.
    const body = `${f.message}\n\n— ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <Section id="contact" className="overflow-hidden bg-card/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-lavender/10 blur-3xl" />
      <SectionHeader index="08" eyebrow="Contact" title={<>Let's Build Something <em className="text-gradient">Intelligent.</em></>}>
        Have an opportunity, project idea, or collaboration in mind? Let's connect.
      </SectionHeader>
      <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map(({ icon: I, label, value, href }, i) => (
            <Reveal key={label} delay={i * 0.06}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-pink/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-lavender"><I className="h-4 w-4" /></span>
                <div className="min-w-0 flex-1">
                  <div className="eyebrow">{label}</div>
                  <div className="truncate text-sm">{value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-pink" />
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <form onSubmit={submit} className="cut-corner space-y-4 border border-border bg-card p-6 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Name" aria-label="Name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
              <input required type="email" placeholder="Email" aria-label="Email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
            </div>
            <input required placeholder="Subject" aria-label="Subject" className={field} value={f.subject} onChange={(e) => setF({ ...f, subject: e.target.value })} />
            <textarea required rows={5} placeholder="Message" aria-label="Message" className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <button type="submit" className={btn.primary}>Compose Email <Send className="h-4 w-4" /></button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="font-display text-xl">{profile.name}</div>
          <div className="eyebrow mt-2">AI/ML • Generative AI • Software Engineering</div>
        </div>
        <div className="flex gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={btn.icon}><Github className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={btn.icon}><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className={btn.icon}><Mail className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Maddala Venkata Sailakshmi</p>
      </div>
    </footer>
  );
}
