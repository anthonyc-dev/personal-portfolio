"use client"

import React from "react";
import { TimelineDemo } from "@/components/aceternityUI/Timeline";

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-16 px-4 md:px-8 lg:px-24 w-full bg-white dark:bg-neutral-950"
    >
      <TimelineDemo />
    </section>
  );
}
