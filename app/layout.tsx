import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ONOBHAYEDO OSEHON GODWIN — Web Developer & Technical SEO Specialist",
  description:
    "Self-directed Web Developer & Technical SEO Specialist specializing in modern frontend architecture (React, Next.js, TypeScript, Tailwind CSS) alongside robust backend systems engineering (FastAPI, Python). Available for remote, contract, and freelance roles.",
  keywords: [
    "Web Developer",
    "Technical SEO Specialist",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "Aiven",
    "Cloudinary",
    "Core Web Vitals",
    "Remote Developer",
    "Contract Developer",
    "Freelance Developer",
    "UTC+1",
  ],
  authors: [{ name: "ONOBHAYEDO OSEHON GODWIN" }],
  creator: "ONOBHAYEDO OSEHON GODWIN",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osehon.netlify.app",
    title: "ONOBHAYEDO OSEHON GODWIN — Web Developer & Technical SEO Specialist",
    description:
      "Modern frontend architecture & scalable backend engineering. Sub-second load times, Core Web Vitals optimization, and robust API systems.",
    siteName: "ONOBHAYEDO OSEHON GODWIN Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FAFAFA] text-[#1F1F1F] selection:bg-[#F2561D] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
