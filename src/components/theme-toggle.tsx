"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const updateTheme = () => {
      try {
        const hasDark = document.documentElement.classList.contains("dark");
        setIsDark(hasDark);
      } catch (error) {
        setIsDark(false);
      }
    };

    // Initial check
    updateTheme();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        updateTheme();
      }
    };

    // Listen for class changes (when theme is toggled)
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleSystemChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleSystemChange);
    }

    return () => {
      observer.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleSystemChange);
      } else {
        mediaQuery.removeListener(handleSystemChange);
      }
    };
  }, []);

  const toggleTheme = () => {
    try {
      const nextIsDark = !document.documentElement.classList.contains("dark");
      if (nextIsDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDark(nextIsDark);
    } catch (error) {}
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon for light mode
        <Moon />
      ) : (
        // Moon icon for dark mode
        <Sun />
      )}
    </Button>
  );
}
