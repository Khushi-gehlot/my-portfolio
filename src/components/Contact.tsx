"use client";

import { Mail, Phone, Github, Code2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { SOCIALS } from "@/data/content";

export default function Contact() {
  return (
    <section className="pad wrap contact" id="contact">
      <div className="contact-glow" aria-hidden />
      <Reveal>
        <span className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>
          Contact
        </span>
      </Reveal>
      <Reveal as="div">
        <h2>
          Let&apos;s build
          <br />
          something <em>useful.</em>
        </h2>
      </Reveal>
      <Reveal>
        <p>
          Open to AI / Data / Software Engineering roles and internships, collaborations, and hard problems worth
          solving. If you&apos;re building something interesting — say hi.
        </p>
      </Reveal>
      <Reveal>
        <div className="contact-actions">
          <a href={`mailto:${SOCIALS.email}`} className="btn btn-primary mag">
            <Mail size={16} />
            {SOCIALS.email}
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="btn mag">
            Connect on LinkedIn
          </a>
        </div>
      </Reveal>
      <Reveal>
        <div className="contact-links">
          <a href={`mailto:${SOCIALS.email}`} className="clink">
            <span className="k">Email</span>
            <span className="v">
              <Mail size={15} />
              Say hello
            </span>
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="clink">
            <span className="k">GitHub</span>
            <span className="v">
              <Github size={15} />
              khushi-gehlot
            </span>
          </a>
          <a href={SOCIALS.leetcode} target="_blank" rel="noopener noreferrer" className="clink">
            <span className="k">LeetCode</span>
            <span className="v">
              <Code2 size={15} />
              klixie
            </span>
          </a>
          <a href={`tel:${SOCIALS.phone}`} className="clink">
            <span className="k">Phone</span>
            <span className="v">
              <Phone size={15} />
              {SOCIALS.phoneDisplay}
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
