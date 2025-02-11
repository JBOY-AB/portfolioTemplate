import { Outfit, Open_Sans } from "next/font/google";
import "./globals.css"; // Ensure you have Tailwind CSS setup

// Load Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700"],
});

// Load Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${openSans.variable} bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
