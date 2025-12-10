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

export const Chatbot = dynamic(
  () =>
    import("@/components/chatbot").then((mod) => ({ default: mod.Chatbot })),
  { ssr: false }
);
