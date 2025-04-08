import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AllProvider from "@/components/Provider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Crystal Hotel Room Reservation",
    default: "Crystal Hotel Room Reservation",
  },
  description: "Crystal Hotel Room Reservation Site",
  openGraph: {
    title: "Crystal Hotel Room Reservation",
    description:
      "We`re dedicated to helping you find the perfect stay at the best possible price.",
    url: "https://hotel-room-reservation-rust.vercel.app",
    siteName: "Crystal Hotel Room Reservation",
    images: {
      url: "/preview.png",
      width: 1200,
      height: 630,
      alt: "Crystal Hotel Room Reservation",
    },
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AllProvider>
          <Toaster position="top-right" />
          <Header />
          {children}
          <Footer />
        </AllProvider>
      </body>
    </html>
  );
}
