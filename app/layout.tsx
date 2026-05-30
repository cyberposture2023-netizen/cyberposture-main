import { Libre_Caslon_Text, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Configure Hanken Grotesk for body text
const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: "swap",
});

// Configure Libre Caslon Text for the display headings
const libreCaslon = Libre_Caslon_Text({ 
  weight: ["400", "700"], // Libre Caslon requires explicit weights
  subsets: ["latin"], 
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "CyberPosture | Human-Centric Cyber Risk Intelligence",
  description: "Passive OSINT, Internet Attack Surface visibility, and adaptive vulnerability intelligence for modern enterprise defense.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${libreCaslon.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>

      <body className="antialiased font-body bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
