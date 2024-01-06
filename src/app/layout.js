import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Nav";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata = {
  title: "Jason Blackburn Portfolio 2024",
  description: "Portfolio of Jason Blackburn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
