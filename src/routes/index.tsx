import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience, Education } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills, Certifications, Achievements } from "@/components/portfolio/Skills";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Maddala Venkata Sailakshmi — AI/ML & Software Engineer";
const description =
  "Portfolio of Maddala Venkata Sailakshmi, CS undergraduate building AI, ML, Generative AI and full-stack systems. Projects, experience and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
