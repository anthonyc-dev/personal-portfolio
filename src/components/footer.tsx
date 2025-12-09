"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

declare const window:
  | { scrollTo: (options: { top: number; behavior: string }) => void }
  | undefined;
declare const document:
  | {
      getElementById: (
        id: string
      ) => { scrollIntoView: (options: { behavior: string }) => void } | null;
    }
  | undefined;

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/anthonyc-dev",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/anthony-crausus-19b974269/",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:anthonycrausus.dev@gmail.com.com",
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
];

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Footer() {
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (href: string) => {
    if (href === "#") {
      scrollToTop();
      return;
    }
    if (document) {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-linear-to-b from-background to-accent/10 border-t border-border overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              Anthony Crausus
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Full-Stack Developer crafting modern web and mobile applications
              with passion and precision.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-accent/50 backdrop-blur-sm transition-all ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left w-fit"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Get in Touch */}
          <motion.div variants={item} className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <p className="text-muted-foreground">
              Have a project in mind? Let&apos;s work together to bring your
              ideas to life.
            </p>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-linear-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-linear-to-r from-transparent via-border to-transparent"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="py-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" />{" "}
            by Anthony Crausus &copy; {new Date().getFullYear()}
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
            <div className="p-1.5 rounded-full bg-accent/50 group-hover:bg-primary/20 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-accent to-primary" />
    </footer>
  );
}
