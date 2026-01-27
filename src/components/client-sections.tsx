"use client";

import dynamic from "next/dynamic";

// Lazy load components that need client-side only rendering
export const ScrollVelocitySection = dynamic(
  () => import("@/components/sections/ScrollVelocity-section"),
  { ssr: false }
);

export const LogoLoops = dynamic(
  () => import("@/components/sections/LogoLoops"),
  { ssr: false }
);

export const ContactSection = dynamic(
  () => import("@/components/sections/contact-section"),
  { ssr: false }
);

export const Footer = dynamic(() => import("@/components/footer"), {
  ssr: false,
});

export const About = dynamic(() => import("@/components/sections/about-me"), {
  ssr: false,
});

export const ScrollVelocity = dynamic(
  () => import("@/components/ScrollVelocity"),
  {
    ssr: false,
  }
);

export const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
