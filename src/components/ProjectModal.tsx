"use client";

import { useEffect } from "react";
import { CASE_STUDIES } from "@/data/content";

export default function ProjectModal({ activeKey, onClose }: { activeKey: string | null; onClose: () => void }) {
  const open = activeKey !== null;
  const d = activeKey ? CASE_STUDIES[activeKey] : null;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div className={`modal-back${open ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title">
        <button className="close" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        {d && (
          <div>
            <div className="m-tag">{d.tag}</div>
            <h3 id="m-title">{d.title}</h3>
            <div className="m-tech">
              {d.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <div className="m-block">
              <h4>Problem</h4>
              <p>{d.problem}</p>
            </div>
            <div className="m-block">
              <h4>Approach</h4>
              <p>{d.approach}</p>
            </div>
            <div className="m-block">
              <h4>Architecture</h4>
              <div className="m-arch">
                {d.arch.map((n, i) => (
                  <span key={n}>
                    <b>{n}</b>
                    {i < d.arch.length - 1 && <span style={{ color: "var(--muted-2)" }}> → </span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="m-block">
              <h4>Challenge</h4>
              <p>{d.challenges}</p>
            </div>
            <div className="m-block">
              <h4>Solution</h4>
              <p>{d.solution}</p>
            </div>
            <div className="m-block">
              <h4>Result</h4>
              <p>{d.result}</p>
            </div>
            <div className="m-block">
              <h4>What I learned</h4>
              <p>{d.learned}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
