import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative flex items-center justify-center p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700/80 transition-colors duration-300 w-11 h-11 select-none shadow-sm focus:outline-none"
      aria-label="Toggle Theme"
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="currentColor"
        animate={{ rotate: isDark ? 40 : 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        className="text-gray-800 dark:text-yellow-400"
      >
        <mask id="theme-toggle-mask">
          <rect x="0" y="0" width="24" height="24" fill="white" />
          <motion.circle
            animate={{
              cx: isDark ? 18 : 30,
              cy: isDark ? 6 : -10,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            r="8"
            fill="black"
          />
        </mask>
        
        {/* Core circle (morphs from Sun core to Moon body) */}
        <motion.circle
          cx="12"
          cy="12"
          animate={{
            r: isDark ? 9 : 5,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          mask="url(#theme-toggle-mask)"
        />
        
        {/* Sun rays (scale down and fade out in dark mode) */}
        <motion.g
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            opacity: isDark ? 0 : 1,
            scale: isDark ? 0.3 : 1,
          }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
          style={{ originX: "12px", originY: "12px" }}
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </motion.button>
  );
};
