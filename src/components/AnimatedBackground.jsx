
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className={`animated-bg ${isDarkMode ? "cyberpunk-dark" : "bg-background"}`}
      />
    </div>
  );
};
