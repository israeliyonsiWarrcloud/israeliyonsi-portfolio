import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
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
  title: "Israel Iyonsi | Senior .NET Software Engineer",
  description:
    "Senior .NET Software Engineer with 8+ years building enterprise fintech systems processing $30.6B+ in transactions. AI & Cloud Innovator. Tech Innovator of the Year 2024.",
  keywords: [
    "Israel Iyonsi",
    "Software Engineer",
    ".NET",
    "Azure",
    "Fintech",
    "AI",
    "Cloud",
    "C#",
    "Microservices",
  ],
  authors: [{ name: "Israel Iyonsi" }],
  openGraph: {
    title: "Israel Iyonsi | Senior .NET Software Engineer",
    description:
      "Senior .NET Software Engineer with 8+ years building enterprise fintech systems. AI & Cloud Innovator. Tech Innovator of the Year 2024.",
    url: "https://israeliyonsi.com",
    siteName: "Israel Iyonsi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Israel Iyonsi | Senior .NET Software Engineer",
    description:
      "Senior .NET Software Engineer with 8+ years building enterprise fintech systems. AI & Cloud Innovator.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Prevent flash: apply light class before paint if user chose it */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Israel Iyonsi",
              url: "https://israeliyonsi.com",
              jobTitle: "Senior .NET Software Engineer",
              worksFor: { "@type": "Organization", name: "Freelance" },
              knowsAbout: [
                "C#",
                ".NET",
                "Azure",
                "Microservices",
                "Fintech",
                "AI Integration",
              ],
              award: [
                "Tech Innovator of the Year - CREST Awards 2024",
                "100 Iconic Personalities Award 2024",
              ],
              sameAs: [
                "https://linkedin.com/in/iyonsi-israel-123b72b0",
                "https://github.com/IsraelIyonsi",
                "https://instagram.com/iyonsi_israel",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col grain-overlay">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
