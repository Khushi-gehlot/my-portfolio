"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BUILDING_NOW } from "@/data/content";

export default function BuildingNow() {
  return (
    <section className="pad wrap" id="now">
      <Reveal className="sec-head">
        <span className="eyebrow">Live</span>
        <h2 className="sec-title">Currently building.</h2>
      </Reveal>
      <Stagger className="now-grid">
        {BUILDING_NOW.map((n) => (
          <StaggerItem key={n.title} className="now-card">
            <span className="pill">
              <span className="d" />
              Active
            </span>
            <div className="nt">{n.title}</div>
            <div className="nd">{n.desc}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
