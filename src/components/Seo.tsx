// components/Seo.tsx
import { Metadata } from "next";

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

export function getSeoMetadata({
  title = "Portfolio | Anthony Crausus",
  description = "Portfolio of Anthony Crausus, a Full-Stack Developer specializing in modern web development with Next.js, React, and Node.js.",
  image = "/portfolio.png",
  url = "https://yourdomain.com",
}: SeoProps): Metadata {
  return {
    title: {
      default: title,
      template: `%s | Anthony Crausus Portfolio`,
    },
    description,
    applicationName: "Anthony Crausus Portfolio",
    generator: "Next.js",
    keywords: [
      "Anthony Crausus",
      "Full Stack Developer",
      "Portfolio",
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
    ],
    authors: [{ name: "Anthony Crausus", url }],
    creator: "Anthony Crausus",
    publisher: "Anthony Crausus",
    metadataBase: new URL(url),

    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: "Anthony Crausus Portfolio",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} Preview`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@yourhandle",
      creator: "@yourhandle",
      title,
      description,
      images: [image],
    },

    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}
