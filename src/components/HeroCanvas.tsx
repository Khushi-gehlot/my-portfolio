"use client";

import { useEffect, useRef } from "react";

type Pt = { x: number; y: number; vx: number; vy: number };

/** Lightweight connected-particle "data-flow" field behind the hero. */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(devicePixelRatio || 1, 2);
    let W = 0,
      H = 0,
      pts: Pt[] = [],
      running = true,
      raf = 0;

    const parent = canvas.parentElement as HTMLElement;

    const size = () => {
      const r = parent.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = W < 680 ? 22 : 44;
      pts = [];
      for (let i = 0; i < n; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
      }
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x,
            dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255,134,184,${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(255,184,214,.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, 6.29);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    size();
    draw();
    addEventListener("resize", size);
    const vis = new IntersectionObserver(
      (e) => {
        running = e[0].isIntersecting;
        if (running) draw();
      },
      { threshold: 0 },
    );
    vis.observe(parent);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      removeEventListener("resize", size);
      vis.disconnect();
    };
  }, []);

  return <canvas id="hero-canvas" ref={ref} aria-hidden />;
}
