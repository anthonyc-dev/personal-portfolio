import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-full bg-background border-b border-border container mx-auto max-w-3xl px-4">
        <div className="container mx-auto py-4 flex items-center">
          <Link
            href="/#projects"
            className="flex items-center text-primary hover:underline gap-2"
            aria-label="Back to Home"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </Link>
        </div>
      </header>
      {children}
    </>
  );
}
