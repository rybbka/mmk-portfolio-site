import "./globals.css";
import "./styles/fonts.css";

export const metadata = {
  title: "Majkel Kokocinski",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="/_next/static/css/app.css" precedence="default" />
      </head>
      <body className="antialiased font-['Suisse_Intl_Mono'] font-bold bg-white h-full">
        {children}
      </body>
    </html>
  );
}
