"use client";

import { Clock, Layers, TrendingUp, Search } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import Terminal from "./Terminal";

const META = [
  { label: "Currently", Icon: Clock, items: ["AI Engineer Intern", "@ Listen First Media", "Media intelligence + AI"] },
  { label: "Building", Icon: Layers, items: ["RAG systems", "Data pipelines", "AI automation"] },
  { label: "Learning", Icon: TrendingUp, items: ["LLM evaluation", "Vector search", "MLOps"] },
  { label: "Exploring", Icon: Search, items: ["Generative AI", "Agentic tools", "Cybersecurity / SOC"] },
];

export default function About() {
  return (
    <section className="pad wrap" id="about">
      <Reveal className="sec-head">
        <span className="eyebrow">About</span>
        <h2 className="sec-title">
          Engineer first,
          <br />
          student by timing.
        </h2>
      </Reveal>

      <div className="about-grid">
        <Reveal>
          <p className="about-lede">
            I like the messy middle of engineering — the part where <em>raw data, models, and real constraints</em>{" "}
            collide, and something useful has to come out the other side.
          </p>
          <p className="about-body">
            I&apos;m a Data Science undergrad at <b>SKIT (CGPA 9.1)</b>, but I spend most of my time building:{" "}
            <b>RAG chatbots</b> that don&apos;t hallucinate, <b>ETL pipelines</b> on Spark and Databricks, and{" "}
            <b>AI automation</b> that reads news the way an analyst would. Right now I&apos;m an{" "}
            <b>AI Engineer Intern at Listen First Media</b>, shipping AI + data tooling for media intelligence —
            sentiment tagging, key-message detection, and dashboards.
          </p>
          <p className="about-body">
            My range is deliberately wide — AI/ML, data engineering, full-stack, a stint in 3D modelling, and a
            Certified SOC Analyst credential in security. I care about <b>why</b> a technology is chosen, not just that
            it was. I build things end to end, and I like when they actually get used.
          </p>
        </Reveal>

        <Stagger className="meta-cards">
          {META.map(({ label, Icon, items }) => (
            <StaggerItem key={label} className="meta-card">
              <div className="lab">
                <Icon size={13} strokeWidth={2} />
                {label}
              </div>
              <ul>
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <Reveal>
        <div style={{ marginTop: 52 }}>
          <Terminal />
        </div>
      </Reveal>
    </section>
  );
}
