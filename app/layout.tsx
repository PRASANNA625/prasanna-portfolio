import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.title}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="flex min-h-full flex-col bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-500 dark:opacity-100"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 900px 600px at 12% -10%, rgb(129 140 248 / 0.22), transparent 60%),
              radial-gradient(ellipse 800px 600px at 105% 15%, rgb(167 139 250 / 0.16), transparent 60%),
              radial-gradient(ellipse 700px 500px at 30% 105%, rgb(232 121 249 / 0.10), transparent 60%),
              linear-gradient(rgb(255 255 255 / 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgb(255 255 255 / 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "auto, auto, auto, 56px 56px, 56px 56px",
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div id="top" className="flex flex-1 flex-col pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
