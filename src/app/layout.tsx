import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { getSeoMetadata } from "@/components/Seo";
import Footer from "@/components/footer";
import { NavigationWrapper } from "@/components/navigation-wrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = getSeoMetadata({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var stored = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (systemDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  
                  // Listen for system preference changes
                  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
                    // Only update if user hasn't manually set a preference
                    if (!localStorage.getItem('theme')) {
                      if (e.matches) {
                        document.documentElement.classList.add('dark');
                      } else {
                        document.documentElement.classList.remove('dark');
                      }
                    }
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Bartle&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <Providers>
          <NavigationWrapper />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
