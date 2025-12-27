"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .filter(Boolean);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }

      // If at the top, set home as active
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 py-4 w-screen"
        style={{ maxWidth: "100vw" }}
      >
        <div className=" mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            {/* Logo/Name */}
            {/* <motion.button
              onClick={() => scrollToSection("#")}
              className="text-xl font-bold hover:text-primary transition-colors z-10 pr-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Acodey
            </motion.button> */}

            {/* Desktop Navigation - Pill Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border rounded-full px-2 py-2 shadow-lg"
            >
              {navItems.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive =
                  sectionId === activeSection ||
                  (sectionId === "" && activeSection === "");

                // .filter((item) => item.label !== "Contact")

                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-background"
                        : "text-foreground hover:text-primary"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="pillBackground"
                        className="absolute inset-0 bg-foreground rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Desktop Contact Button */}

            {/* <motion.div
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="text-lg rounded-full px-6 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/30"
              >
                Contact
              </Button>
            </motion.div> */}

            {/* Animated Burger Menu Button */}
            <div className="lg:hidden flex items-center justify-end w-full">
              <motion.button
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 rounded-full hover:bg-accent transition-colors border border-border bg-background/80 backdrop-blur-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-foreground rounded-full"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-5 h-0.5 bg-foreground rounded-full"
                />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Enhanced Backdrop with Gradient */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-linear-to-br from-background/90 via-background/85 to-background/90 backdrop-blur-md z-40 lg:hidden overflow-hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ maxWidth: "100vw", maxHeight: "100vh" }}
            />

            {/* Enhanced Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 right-0 bottom-0 w-72 bg-linear-to-b from-background/98 to-background/95 backdrop-blur-xl shadow-2xl z-40 lg:hidden border-l border-border/50 flex flex-col"
            >
              {/* Decorative Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

              {/* Navigation Items */}
              <div className="flex flex-col p-8 gap-3 flex-1 pt-12">
                {navItems
                  .filter((item) => item.label !== "Contact")
                  .map((item, index) => {
                    const sectionId = item.href.replace("#", "");
                    const isActive =
                      sectionId === activeSection ||
                      (sectionId === "" && activeSection === "");

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{
                          delay: index * 0.08,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          onClick={() => scrollToSection(item.href)}
                          className={cn(
                            "w-full justify-start text-lg font-medium rounded-xl py-6 transition-all duration-300",
                            isActive
                              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                              : "hover:bg-accent/50 hover:pl-6"
                          )}
                        >
                          <span className="flex items-center gap-3">
                            {isActive && (
                              <motion.span
                                layoutId="mobileActiveIndicator"
                                className="w-1.5 h-1.5 rounded-full bg-primary-foreground"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              />
                            )}
                            {item.label}
                          </span>
                        </Button>
                      </motion.div>
                    );
                  })}
              </div>

              {/* Decorative Divider */}
              <div className="px-8 pb-4">
                <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
              </div>

              {/* Enhanced Contact Button at Bottom */}
              <div className="p-8 pt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant={
                      activeSection === "contact" ? "default" : "outline"
                    }
                    onClick={() => scrollToSection("#contact")}
                    className={cn(
                      "w-full justify-center text-lg font-semibold rounded-full py-6 transition-all duration-300",
                      activeSection === "contact"
                        ? "bg-primary text-primary-foreground shadow-xl shadow-primary/40 border-primary/50"
                        : "border-2 hover:border-primary hover:bg-primary/5 hover:shadow-lg"
                    )}
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Contact
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      >
                        →
                      </motion.span>
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Decorative Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary/0 via-primary/30 to-primary/0" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
