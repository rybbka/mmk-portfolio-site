import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/fonts.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Majkel Kokocinski",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-['Suisse_Intl_Mono'] font-bold bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
