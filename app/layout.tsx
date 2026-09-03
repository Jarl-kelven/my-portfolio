import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Metadata } from "next";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: "Jarl's Portfolio",
  description: "Portfoliio app showcasing my projects, skills, and experience as a web developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${jetbrainsMono.className} bg-[#111111] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}