import { motion } from "framer-motion";
import { ArrowDownRight, Download, Github, Linkedin, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ImagePlaceholder, btn } from "./ui";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8">
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 900" aria-hidden>
        <path className="animate-dash" d="M0 700 L420 280 L880 280 L1440 -100" stroke="var(--lavender)" strokeWidth="1" fill="none" />
        <path className="animate-dash" d="M200 900 L640 460 L1100 460 L1440 120" stroke="var(--pink)" strokeWidth="1" fill="none" />
      </svg>
      <div className="animate-drift pointer-events-none absolute right-[8%] top-[18%] h-24 w-24 rotate-45 border border-sky/30" />
      <div className="animate-drift pointer-events-none absolute bottom-[14%] left-[6%] h-16 w-16 rounded-full border border-pink/30 [animation-delay:-5s]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 flex flex-wrap items-center gap-3">
            <span className="pill"><span className="mr-2 h-1.5 w-1.5 rounded-full bg-gradient-accent" />Open to internships & placements</span>
            <span className="pill"><MapPin className="mr-1 h-3 w-3" />{profile.location}</span>
          </motion.div>
          <h1 className="font-display text-[clamp(3rem,10vw,8.5rem)] font-light leading-[0.88] tracking-[-0.03em]">
            {profile.nameLines.map((line, i) => (
              <motion.span key={line} className={`block ${i === 2 ? "text-gradient italic" : ""}`} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                {line}
              </motion.span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <p className="mt-8 max-w-2xl font-display text-xl font-light leading-snug sm:text-2xl">{profile.tagline}</p>
            <p className="mt-4 max-w-xl text-muted-foreground">{profile.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#projects" className={btn.primary}>View Projects <ArrowDownRight className="h-4 w-4" /></a>
              <a href={profile.resume} download className={btn.ghost}><Download className="h-4 w-4" />Download Resume</a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={btn.icon}><Github className="h-4 w-4" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={btn.icon}><Linkedin className="h-4 w-4" /></a>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 cut-corner bg-gradient-accent opacity-40 blur-2xl" />
          <div className="relative cut-corner bg-gradient-accent p-px">
            <ImagePlaceholder src={profile.image} alt={profile.name} label="Profile photo" className="cut-corner aspect-[4/5] w-full" />
          </div>
          <span className="eyebrow absolute -bottom-8 left-0">AI / ML · GenAI · Full-Stack</span>
        </motion.div>
      </div>
    </section>
  );
}
