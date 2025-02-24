import "./globals.css";
import "./styles/fonts.css";

export const metadata = {
  title: "Majkel Kokocinski",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-['Suisse_Intl_Mono'] font-bold bg-white">
        {children}
      </body>
    </html>
  );
}
