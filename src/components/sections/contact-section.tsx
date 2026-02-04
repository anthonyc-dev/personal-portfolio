"use client";

import { Mail, Github, Linkedin, Twitter, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const email = "anthonycrausus.dev@gmail.com";

  const socialLinks = [
    { icon: Github, href: "https://github.com/anthonyc-dev/", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/anthony-crausus-19b974269/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-background min-h-screen flex items-center relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute top-10 right-50 pointer-events-none"
      >
        <Code2 className="w-32 h-32 text-primary" />
      </motion.div>
      <div className="container mx-auto px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-sans text-foreground mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I&apos;m open for freelance opportunities and also for more
            permanent roles, hire me! If you&apos;re interested in working
            together or want to get in touch, just drop me a message.
          </p>

          {/* Email Button */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12 rounded-full"
            asChild
          >
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2"
            >
              <Mail size={20} />
              Send Me an Email
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
