"use client";

import ScrollVelocity from "../ScrollVelocity";
import { useEffect, useState } from "react";

const ScrollVelocitySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-24">
      <ScrollVelocity
        texts={["Building Scalable Solutions", "Solutions That Drive Results"]}
        velocity={isMobile ? 60 : 100}
        className="custom-scroll-text"
      />
    </section>
  );
};

export default ScrollVelocitySection;
