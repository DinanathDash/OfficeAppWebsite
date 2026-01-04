import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FirebaseAnalytics from "@/components/FirebaseAnalytics";

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "OfficeApp - Plan Your Productivity",
  description: "Secure and portable document management. Handle PDF, Word, Excel, and PPT files with our all-in-one Office Suite.",
  metadataBase: new URL("https://office-app-website.vercel.app"), // Placeholder, update locally or via env if needed
  openGraph: {
    title: "OfficeApp - All-in-One Office Suite",
    description: "View and edit PDF, Word, Excel, and PPT files on the go. The ultimate productivity tool for your mobile device.",
    url: "https://office-app-website.vercel.app",
    siteName: "OfficeApp",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "OfficeApp Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OfficeApp - Boost Your Productivity",
    description: "The complete mobile office suite for all your document needs.",
    images: ["/opengraph-image.png"],
    creator: "@OfficeApp",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "h-full bg-[#F3F4F6] font-sans antialiased overflow-hidden",
          fontSerif.variable
        )}
      >
        <FirebaseAnalytics />
        {children}
      </body>
    </html>
  );
}
