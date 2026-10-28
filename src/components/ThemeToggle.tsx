"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "dark" | "light";

function getInitial(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

/** Dark/light switch. Default is dark; choice persists in localStorage. */
export default function ThemeToggle({ variant = "icon" }: { variant?: "icon" | "inline" }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitial());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable */
    }
  };

  // Render a stable shell before mount to avoid hydration mismatch.
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const Icon = theme === "dark" ? Sun : Moon;

  if (variant === "inline") {
    return (
      <button className="mobile-theme" onClick={toggle} aria-label={label} suppressHydrationWarning>
        <Icon size={18} />
        {mounted ? (theme === "dark" ? "Light mode" : "Dark mode") : "Theme"}
      </button>
    );
  }

  return (
    <button className="theme-btn" onClick={toggle} aria-label={label} title={label} suppressHydrationWarning>
      <Icon />
    </button>
  );
}
