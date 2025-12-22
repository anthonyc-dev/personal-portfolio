"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen max-w-6xl flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row w-full gap-12 md:gap-24 items-center justify-center">
        {/* Left Side: Text content */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h2 className="text-[56px] font-bold mb-6 text-white">
            Let’s get know about me closer
          </h2>
          <p className="text-[18px] md:text-lg text-[#A8A8A8] mb-8 max-w-lg">
            Full stack developer specializing in web applications and digital
            solutions. His portfolio highlights a diverse range of projects,
            including dashboards, e-commerce sites, and mobile apps.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 mt-5 rounded-full text-white font-semibold text-base bg-[#FF9142] hover:bg-[#ff7b1f] transition-colors"
          >
            Discover More About Me
          </Link>
        </div>

        {/* Right Side: Profile Image */}
        <div className="flex-1 flex justify-center relative">
          {/* Orange outlined rectangle at top left */}
          <div
            className="absolute"
            style={{
              width: "178px",
              height: "30px",
              borderRadius: "100px",
              border: "2px solid #FF9142",
              top: "24px",
              left: "50px",
              background: "transparent",
            }}
          />
          <Image
            src="/darkprof.png"
            alt="Aaronn Profile"
            width={454}
            height={506}
            className="w-[454px] h-[506px] object-cover rounded-3xl"
            priority
          />
          {/* Orange outlined rectangle at bottom right */}
          <div
            className="absolute"
            style={{
              width: "178px",
              height: "45px",
              borderRadius: "100px",
              border: "2px solid #FF9142",
              bottom: "24px",
              right: "-30px",
              background: "transparent",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
