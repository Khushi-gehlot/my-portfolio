"use client";

import { useEffect, useRef } from "react";

const SEQ = [
  { p: "whoami", o: "khushi-gehlot — ai / data / software engineer" },
  { p: "focus", o: "AI · Generative AI · Data Engineering · Automation" },
  { p: "cat current_role.txt", o: "AI Engineer Intern @ Listen First Media" },
  { p: "ls ~/building", o: "rag-systems/  data-pipelines/  ai-automation/  dev-tools/" },
  { p: "status", o: "● building... open to opportunities" },
];

export default function Terminal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const tb = bodyRef.current;
    if (!wrap || !tb) return;
    const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
    const timers: number[] = [];

    const runStatic = () => {
      SEQ.forEach((s) => {
        tb.innerHTML += `<div class="ln"><span class="pr">$ </span><span class="cmd">${s.p}</span></div><div class="ln out">${s.o}</div>`;
      });
      tb.innerHTML += '<div class="ln"><span class="pr">$ </span><span class="cursor-blink"></span></div>';
    };

    const runTyping = () => {
      let si = 0;
      const line = () => {
        if (si >= SEQ.length) {
          tb.insertAdjacentHTML("beforeend", '<div class="ln"><span class="pr">$ </span><span class="cursor-blink"></span></div>');
          return;
        }
        const s = SEQ[si];
        const row = document.createElement("div");
        row.className = "ln";
        row.innerHTML = '<span class="pr">$ </span><span class="cmd"></span>';
        tb.appendChild(row);
        const span = row.querySelector(".cmd") as HTMLElement;
        let ci = 0;
        const type = () => {
          if (ci <= s.p.length) {
            span.textContent = s.p.slice(0, ci);
            ci++;
            timers.push(window.setTimeout(type, 42));
          } else {
            const out = document.createElement("div");
            out.className = "ln out";
            tb.appendChild(out);
            timers.push(
              window.setTimeout(() => {
                out.textContent = s.o;
                si++;
                timers.push(window.setTimeout(line, 340));
              }, 160),
            );
          }
        };
        type();
      };
      line();
    };

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            tb.innerHTML = "";
            reduce ? runStatic() : runTyping();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(wrap);

    return () => {
      obs.disconnect();
      timers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div className="term" ref={wrapRef}>
      <div className="term-bar">
        <span className="tc r" />
        <span className="tc y" />
        <span className="tc g" />
        <span className="tt">khushi@portfolio — zsh — 80×24</span>
      </div>
      <div className="term-body" ref={bodyRef} />
    </div>
  );
}
