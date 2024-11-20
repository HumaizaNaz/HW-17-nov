
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Humaiza Naz",
  description: "Humaiza Naz Institute",
  icons: {
    icon: "/images/images.jpg",  // Replace with your actual path if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        
        </body>
      
    </html>
  );
}
