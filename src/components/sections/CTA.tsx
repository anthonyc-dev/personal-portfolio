import React from 'react'
import { Button } from '../ui/button'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const CTA = () => {
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
        <section className="bg-card text-white py-16 md:py-24 rounded-3xl mx-3 sm:mx-6 md:mx-10 lg:mx-auto mb-10 max-w-4xl flex flex-col items-center">
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans text-foreground mb-4 md:mb-6 text-center">
                    Ready to build something great?
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg mb-8 md:mb-10 text-center max-w-xl">
                    I help businesses and startups turn ideas into fast, scalable products.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 w-full mb-8">
                    <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full sm:w-auto"
                        asChild
                    >
                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-2 justify-center w-full sm:w-auto"
                        >
                            <Mail size={20} />
                            Send Me an Email
                        </a>
                    </Button>
                </div>
                <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 mb-2"
                            aria-label={social.label}
                        >
                            <social.icon size={22} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CTA