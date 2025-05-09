// layout.tsx
import type { Metadata } from "next";
import { Pacifico, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Zoomies Bully Baths",
    default: "Zoomies Bully Baths - Mobile Pet Grooming",
  },
  description:
    "Mobile dog grooming service - The royal treatment your pet deserves, with the convenience you desire.",
  keywords: [
    "dog grooming",
    "mobile grooming",
    "pet grooming",
    "camden county",
	"gloucester county",
    "pet salon",
  ],
  authors: [{ name: "Zoomies Bully Baths" }],
  creator: "Zoomies Bully Baths",
  icons: {
    icon: "/favicon.png", // <-- Added favicon here
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoomiesbullybaths.com/",
    title: "Zoomies Bully Baths - Mobile Pet Grooming",
    description:
      "Professional mobile pet grooming service that comes to your doorstep",
    siteName: "Zoomies Bully Baths",
    images: [
      {
        url: "https://zoomiesbullybaths.com/images/logo-text.png",
        width: 1200,
        height: 630,
        alt: "Zoomies Bully Baths Logo",
      },
    ],
  },
};

export function generateViewport() {
  return "width=device-width, initial-scale=1";
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          pacifico.variable,
          nunitoSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
