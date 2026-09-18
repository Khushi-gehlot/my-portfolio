"use client";

import { Reveal } from "./Reveal";
import { EXPERIENCE } from "@/data/content";

export default function Experience() {
  return (
    <section className="pad wrap" id="experience">
      <Reveal className="sec-head">
        <span className="eyebrow">Experience</span>
        <h2 className="sec-title">Where I&apos;ve built.</h2>
        <p className="sec-sub">
          Six roles across AI, data engineering, full-stack and 3D — from indie game maps to production media-AI
          pipelines.
        </p>
      </Reveal>

      <div className="tl">
        {EXPERIENCE.map((x, i) => (
          <Reveal key={`${x.company}-${i}`} className={`tl-item${x.current ? " cur" : ""}`} delay={i * 0.04}>
            <div className="tl-card">
              <div className="tl-top">
                <div className="tl-role">
                  {x.role} <span className="tl-co">· {x.company}</span>
                </div>
                <div className="tl-when">
                  {x.current ? (
                    <>
                      {x.when.replace(" — Present", " — ")}
                      <span className="now">Present</span>
                    </>
                  ) : (
                    x.when
                  )}
                </div>
              </div>
              <p className="tl-desc">{x.desc}</p>
              <div className="chips">
                {x.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
