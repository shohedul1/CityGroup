import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Children from "@/components/Children/Children";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"CityGroup",
  description: "CityGroup",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/djhjt07rh/image/upload/v1749572649/Adobe_Express_-_file_lhe4lp.png",
        


      },
    ]

  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Children>
          <Navbar />
          {children}

        </Children>
      </body>
    </html>
  );
}
