"use client";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm currently available for freelance work and exciting projects. If
            you have a project in mind or just want to say hello, feel free to
            reach out!
          </p>

          {/* Email Button */}
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12"
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
