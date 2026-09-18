"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { SKILL_GROUPS, type SkillGroup as SG } from "@/data/content";

function SkillGroup({ group, defaultOpen }: { group: SG; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [max, setMax] = useState<string>(defaultOpen ? "auto" : "0px");

  const apply = () => {
    const el = bodyRef.current;
    if (!el) return;
    setMax(open ? `${el.scrollHeight}px` : "0px");
  };

  useLayoutEffect(apply, [open]);
  useEffect(() => {
    const onResize = () => open && apply();
    addEventListener("resize", onResize);
    return () => removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const toggle = () => setOpen((v) => !v);

  return (
    <div className={`sgroup${open ? " open" : ""}`}>
      <div
        className="sgroup-head"
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <span className="ic">
          <Icon name={group.icon} size={20} />
        </span>
        <div className="st">
          <div className="n">{group.name}</div>
          <div className="c">{group.skills.length} technologies</div>
        </div>
        <span className="caret">
          <ChevronDown size={16} />
        </span>
      </div>
      <div className="sgroup-body" ref={bodyRef} style={{ maxHeight: max }}>
        <div className="sgroup-body-in">
          {group.skills.map((s) => (
            <span key={s} className="skill-tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="pad wrap" id="skills">
      <Reveal className="sec-head">
        <span className="eyebrow">Toolkit</span>
        <h2 className="sec-title">The stack I reach for.</h2>
        <p className="sec-sub">
          Grouped by intent, not rated by fake percentages. Expand a cluster to see the full set.
        </p>
      </Reveal>
      <div className="skill-groups">
        {SKILL_GROUPS.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.03}>
            <SkillGroup group={g} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
