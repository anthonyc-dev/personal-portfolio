"use client";

import { Button } from "@/components/ui/button";
import { Rocket, Code2, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Lottie } from "../client-sections";


interface HeroSectionProps {
  name: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ name, title, subtitle }: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [lottieData, setLottieData] = useState<any>(null);
  const [shouldLoadLottie, setShouldLoadLottie] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (shouldLoadLottie && !lottieData) {
      import("@/../public/space boy developer.json").then((data) => {
        setLottieData(data.default);
      });
    }
  }, [shouldLoadLottie, lottieData]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="#contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Static background image for hero gradient */}
      <Image
        src="/gradient.png"
        alt="bg"
        fill
        className="object-contain absolute inset-0 z-0 pointer-events-none select-none"
        priority
        sizes="100vw"
      />

      {/* Optionally: fallback for solid color layer */}
      {/* <div
        className="absolute inset-0 bg-background/50 z-0"
        aria-hidden="true"
      /> */}

      {/* Floating icon - Hidden on mobile for performance */}

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-50 right-60 pointer-events-none hidden md:block z-10"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Lottie Animation - Lazy loaded and optimized for mobile */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex justify-center mb-6"
            onViewportEnter={() => setShouldLoadLottie(true)}
          >
            <div className="relative">
              {!isMobile && (
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-full blur-3xl opacity-50"
                  style={{ width: "5rem", height: "5rem" }}
                />
              )}
              <div className="relative w-20 h-20 md:w-25 md:h-25">
                {shouldLoadLottie && lottieData && (
                  <Lottie
                    animationData={lottieData}
                    loop={true}
                    className="w-20 h-20 md:w-25 md:h-25"
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* Name with stagger animation -- now small */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl font-sans tracking-tight"
          >
            <span className="text-muted-foreground">👋 {name}</span>
          </motion.h1>

          {/* Title with icon -- now big */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3"
          >
            {/* <Sparkles className="w-6 h-6 text-primary animate-pulse" /> */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              {title}
            </h2>
            {/* <Sparkles className="w-6 h-6 text-primary animate-pulse" /> */}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="text-lg px-8 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/50 rounded-full"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/Anthony_Crausus_FullStack_Resume.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-2 hover:bg-accent/50 rounded-full"
                >
                  <Download className="w-5 h-5 mr-2" />
                  My Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator - Reduced animation on mobile */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: isMobile ? 0 : [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: isMobile
            ? {}
            : { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 will-change-transform"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Scroll to explore
          </span>
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </motion.div> */}
    </section>
  );
}
