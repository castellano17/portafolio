import React, { useEffect, useState } from "react";
import { IconArrowUp } from "@tabler/icons-react";
import { scrollToSection } from "../../util/lenis";

const RADIUS = 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollTopButton = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const heroHeight = document.getElementById("home")?.offsetHeight || window.innerHeight;
      setVisible(scrollTop > heroHeight * 0.6);
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={() => scrollToSection(0)}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass flex items-center justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary/10"
        />
        <circle
          cx="22"
          cy="22"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-cyan-400"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
        />
      </svg>
      <IconArrowUp size={18} className="text-cyan-400" />
    </button>
  );
};

export default ScrollTopButton;
