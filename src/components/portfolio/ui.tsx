import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImagePlaceholder({ src, alt, className, label }: { src?: string; alt: string; className?: string; label?: string }) {
  const [failed, setFailed] = useState(!src);
  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {!failed && (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />
      )}
      {failed && (
        <div className="grid-lines absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lavender/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink/10 blur-3xl" />
          <ImageIcon className="h-6 w-6 opacity-60" />
          <span className="eyebrow">{label ?? "Image coming soon"}</span>
        </div>
      )}
    </div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ index, eyebrow, title, children }: { index: string; eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="eyebrow text-lavender">{index}</span>
        <span className="h-px w-10 bg-gradient-accent" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-muted-foreground">{children}</p>}
    </Reveal>
  );
}

export function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative px-5 py-24 sm:px-8 lg:py-32", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export const btn = {
  primary: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--lavender)]",
  ghost: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-lavender hover:text-lavender",
  icon: "grid h-11 w-11 place-items-center rounded-full border border-border text-foreground transition hover:border-pink hover:text-pink",
};
