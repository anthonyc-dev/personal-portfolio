"use client";

import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDjango,
  SiFastapi,
  SiDotnet,
  SiSupabase,
  SiFlutter,
  SiLaravel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandCSharp } from "react-icons/tb";
import { useEffect, useState } from "react";

import LogoLoop from "../LogoLoop";

const LogoLoops = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },
    {
      node: <SiDjango />,
      title: "Django",
      href: "https://www.djangoproject.com/",
    },
    {
      node: <SiFastapi />,
      title: "FastAPI",
      href: "https://fastapi.tiangolo.com/",
    },
    { node: <FaJava />, title: "Java", href: "https://www.java.com/" },
    {
      node: <TbBrandCSharp />,
      title: "C#",
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      node: <SiDotnet />,
      title: ".NET",
      href: "https://dotnet.microsoft.com/",
    },
    { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com/" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev/" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com/" },
  ];

  // Alternative with image sources
  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];

  return (
    <section className="py-28 bg-linear-to-r from-accent/5 to-primary/5">
      <LogoLoop
        logos={techLogos}
        speed={isMobile ? 60 : 100}
        direction="left"
        logoHeight={isMobile ? 40 : 60}
        gap={isMobile ? 40 : 60}
        hoverSpeed={0}
        scaleOnHover={!isMobile}
        // fadeOut
        // fadeOutColor="#030712"
        ariaLabel="Technology partners"
      />
    </section>
  );
};

export default LogoLoops;
