"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-in">
          <a href="#home" className="brand">
            <span className="dot" />
            khushi<b>.gehlot</b>
          </a>
          <nav className="links">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={active === l.href.slice(1) ? "active" : undefined}
              >
                <span className="n">{l.n}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="mailto:khushigehlot75@gmail.com" className="btn btn-primary mag">
              Let&apos;s talk
            </a>
            <button
              className={`burger${open ? " open" : ""}`}
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{l.n}</span>
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
