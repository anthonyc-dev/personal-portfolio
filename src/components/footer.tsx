"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl mx-auto">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Built with <span className="text-primary">Next</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
