import type { Metadata } from "next";
import { Pacifico, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
  display: 'swap',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-nunito-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Zoomies Bully Baths ",
    default: "Zoomies Bully Baths  - Mobile Pet Grooming",
  },
  description: "Mobile dog and cat grooming service - The royal treatment your pet deserves, with the convenience you desire.",
  keywords: ["dog grooming", "cat grooming", "mobile grooming", "pet grooming", "Westville NJ", "pet salon"],
  authors: [{ name: "Zoomies Bully Baths" }],
  creator: "Zoomies Bully Baths",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'zoomiesbullybaths.com/',
    title: "Zoomies Bully Baths - Mobile Pet Grooming",
    description: "Professional mobile pet grooming service that comes to your doorstep",
    siteName: "Zoomies Bully Baths",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        pacifico.variable,
        nunitoSans.variable
      )}>
        {children}
      </body>
    </html>
  );
}
