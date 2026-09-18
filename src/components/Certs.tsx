"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./icons";
import { CERTS } from "@/data/content";

export default function Certs() {
  return (
    <section className="pad wrap" id="certs">
      <Reveal className="sec-head">
        <span className="eyebrow">Credentials</span>
        <h2 className="sec-title">Certifications &amp; education.</h2>
      </Reveal>

      <Stagger className="cert-grid">
        {CERTS.map((c) => (
          <StaggerItem key={c.title} className="cert">
            <span className="badge">
              <Icon name={c.icon} size={22} />
            </span>
            <div>
              <div className="ct">{c.title}</div>
              <div className="co">{c.org}</div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Stagger className="edu-grid" style={{ marginTop: 30 }}>
        <StaggerItem className="edu-main">
          <div className="mono" style={{ color: "var(--pink)", marginBottom: 14 }}>
            // education
          </div>
          <div className="edu-deg">B.Tech — Computer Science (Data Science)</div>
          <div className="edu-inst">SKIT · Swami Keshvanand Institute of Technology</div>
          <div className="edu-cgpa">
            <span className="v">9.1</span>
            <span className="l">Current CGPA / 10</span>
          </div>
          <div className="mono" style={{ color: "var(--muted)", marginTop: 16 }}>
            3rd year · expected 2027
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="edu-side">
            <div className="edu-mini">
              <div className="n">Class XII — PCM</div>
              <div className="s">Sophia Sr. Sec. School</div>
              <div className="pct">88%</div>
            </div>
            <div className="edu-mini">
              <div className="n">Class X</div>
              <div className="s">Sophia Sr. Sec. School</div>
              <div className="pct">92%</div>
            </div>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}
