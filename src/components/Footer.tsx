import { Github, Linkedin, Code2, Mail } from "lucide-react";
import { SOCIALS } from "@/data/content";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-in">
          <div>
            <div className="foot-brand">
              Khushi <span>Gehlot</span>
            </div>
            <div className="foot-note">AI Engineer · Data Engineer · Builder</div>
          </div>
          <div className="foot-links">
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={SOCIALS.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code2 size={18} />
            </a>
            <a href={`mailto:${SOCIALS.email}`} aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="foot-meta">
          <span>Designed &amp; engineered by Khushi Gehlot</span>
          <span>© 2026 · Built with care, black &amp; pink</span>
          <span>lat 26.91°N / lng 75.79°E · Jaipur, IN</span>
        </div>
      </div>
    </footer>
  );
}
