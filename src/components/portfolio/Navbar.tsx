import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";
import { btn } from "./ui";
import { cn } from "@/lib/utils";

const links = ["Home", "About", "Experience", "Education", "Projects", "Skills", "Certifications", "Achievements", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent")}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#home" className="font-display text-xl tracking-tight">
          MVS<span className="text-gradient">.</span>
        </a>
        <ul className="hidden items-center gap-6 xl:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-[13px] text-muted-foreground transition hover:text-foreground">{l}</a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-2 xl:flex">
          <a href={profile.resume} download className={cn(btn.ghost, "px-4 py-2")}><FileText className="h-4 w-4" />Resume</a>
          <a href="#contact" className={cn(btn.primary, "px-4 py-2")}>Let's Connect</a>
        </div>
        <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-border xl:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl xl:hidden">
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l, i) => (
                <motion.li key={l} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }}>
                  <a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block py-2 font-display text-2xl font-light">{l}</a>
                </motion.li>
              ))}
              <li className="mt-3 flex gap-2">
                <a href={profile.resume} download className={btn.ghost}>Resume</a>
                <a onClick={() => setOpen(false)} href="#contact" className={btn.primary}>Let's Connect</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
