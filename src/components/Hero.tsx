"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import HeroCanvas from "./HeroCanvas";
import { SOCIALS } from "@/data/content";

const EASE = [0.2, 0.8, 0.2, 1] as const;

const parent: Variants = {
  hide: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const child: Variants = {
  hide: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : { variants: parent, initial: "hide" as const, animate: "show" as const };
  const itemAnim = reduce ? {} : { variants: child };

  return (
    <section className="hero wrap" id="home">
      <HeroCanvas />
      <div className="hero-in">
        <motion.div className="hero-copy" {...anim}>
          <motion.div className="status" {...itemAnim}>
            <span className="live" />
            Available for AI / Data / SWE opportunities · 2026
          </motion.div>
          <h1>
            <motion.span className="l1" style={{ display: "block" }} {...itemAnim}>
              Khushi
            </motion.span>
            <motion.span className="l2" style={{ display: "block" }} {...itemAnim}>
              Gehlot
            </motion.span>
          </h1>
          <motion.div className="roles" {...itemAnim}>
            <i>AI Engineer</i>
            <span className="sep">·</span>
            <i>Data Engineer</i>
            <span className="sep">·</span>
            <i>Builder</i>
          </motion.div>
          <motion.p className="lede" {...itemAnim}>
            3rd-year B.Tech Data Science student building <b>AI systems, data pipelines, and developer tools</b>{" "}
            that turn messy, unstructured data into decisions. Currently engineering AI for media intelligence at{" "}
            <b>Listen First Media</b>.
          </motion.p>
          <motion.div className="hero-cta" {...itemAnim}>
            <a href="#projects" className="btn btn-primary mag">
              <ArrowRight size={16} />
              View my work
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="btn mag">
              <Github size={16} />
              GitHub
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="btn mag">
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-photo">
          <motion.div
            className="photo-frame"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          >
            <span className="photo-corner tl" />
            <span className="photo-corner br" />
            <Image
              src="/profile.jpg"
              alt="Portrait of Khushi Gehlot"
              fill
              sizes="(max-width:960px) 300px, 392px"
              priority
            />
            <span className="photo-badge">
              <span className="d" />
              AI Engineer
            </span>
            <span className="photo-tag">// khushi_gehlot.jpg</span>
          </motion.div>
        </div>
      </div>

      <a href="#about" className="scroll-ind" aria-label="Scroll down">
        <span>SCROLL</span>
        <span className="mouse" />
      </a>
    </section>
  );
}
