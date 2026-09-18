"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import ProjectModal from "./ProjectModal";
import { PROJECTS, SOCIALS } from "@/data/content";

export default function Projects() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const open = (k: string) => setActiveKey(k);

  return (
    <section className="pad wrap" id="projects">
      <Reveal className="sec-head">
        <span className="eyebrow">Selected Work</span>
        <h2 className="sec-title">Projects that ship.</h2>
        <p className="sec-sub">
          Real systems — RAG, ETL, NLP and analytics — not classroom exercises. Tap any card for the case study.
        </p>
      </Reveal>

      {/* Featured */}
      <Reveal className="proj-featured">
        <div className="pf-left">
          <span className="pf-tag">
            <span className="star">★</span> Featured project
          </span>
          <h3 className="pf-title">AI Loan Advisory Chatbot</h3>
          <p className="pf-desc">
            A Retrieval-Augmented Generation chatbot for loan queries — engineered specifically to{" "}
            <em style={{ color: "var(--pink-soft)", fontStyle: "normal" }}>not</em> hallucinate. Relevance gating +
            LLM faithfulness validation keep every answer grounded in real policy documents.
          </p>
          <div className="pf-metrics">
            <div className="pf-metric">
              <div className="v">RAG</div>
              <div className="l">Architecture</div>
            </div>
            <div className="pf-metric">
              <div className="v">2-stage</div>
              <div className="l">Hallucination guard</div>
            </div>
            <div className="pf-metric">
              <div className="v">PDF→A</div>
              <div className="l">Doc pipeline</div>
            </div>
          </div>
          <div className="pf-actions">
            <button className="btn btn-primary mag" onClick={() => open("loan")}>
              Read case study
              <ArrowRight size={16} />
            </button>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="btn mag">
              Code
            </a>
          </div>
        </div>
        <div className="pf-right">
          <div className="mono" style={{ marginBottom: 14, color: "var(--pink)" }}>
            // system architecture
          </div>
          <div className="pf-arch">
            <span className="node">PDF policy docs</span>
            <span className="flow">→</span> chunk + embed
            <br />
            <span className="flow">↓</span>
            <br />
            <span className="node">FAISS vector store</span>
            <span className="flow">→</span> semantic retrieval
            <br />
            <span className="flow">↓</span>
            <br />
            <span className="node">Relevance gate</span> <span className="flow">→</span>{" "}
            <span className="node">Mistral AI (LLM)</span>
            <br />
            <span className="flow">↓</span>
            <br />
            <span className="node">Faithfulness check</span>
            <span className="flow">→</span> grounded answer
            <br />
            <span className="flow">↓</span>
            <br />
            <span className="node">Streamlit UI</span>
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      <Stagger className="proj-grid">
        {PROJECTS.map((p) => (
          <StaggerItem key={p.key}>
            <article
              className="pcard"
              tabIndex={0}
              role="button"
              aria-label={`Open ${p.title} case study`}
              onClick={() => open(p.key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  open(p.key);
                }
              }}
            >
              <span className="open">
                <ArrowUpRight size={18} />
              </span>
              <div className="pnum">{p.num}</div>
              <div className="pt">{p.title}</div>
              <div className="pd">{p.desc}</div>
              <div className="ptech">
                {p.tech.map((t, i) => (
                  <span key={t}>
                    {t}
                    {i < p.tech.length - 1 && <span> · </span>}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>
        ))}
        {/* More on GitHub */}
        <StaggerItem>
          <a
            className="pcard"
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="More projects on GitHub"
            style={{ display: "flex" }}
          >
            <span className="open">
              <ArrowUpRight size={18} />
            </span>
            <div className="pnum">P/06 · index</div>
            <div className="pt">More on GitHub →</div>
            <div className="pd">
              Experiments, coursework and works-in-progress live on my GitHub and LeetCode (
              <b style={{ color: "var(--pink-soft)" }}>klixie</b>). Always shipping something new.
            </div>
            <div className="ptech">
              <span>github.com/khushi-gehlot</span>
            </div>
          </a>
        </StaggerItem>
      </Stagger>

      <ProjectModal activeKey={activeKey} onClose={() => setActiveKey(null)} />
    </section>
  );
}
