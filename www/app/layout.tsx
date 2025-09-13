import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import "./globals.css";

const blinker = Blinker({
    weight : "400",
  variable: "--font-blinker-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Spaces at Fanpit",
  description: "Find, Book, Celebrate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${blinker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
