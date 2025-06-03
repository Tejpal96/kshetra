import type { Metadata } from "next";
import "./globals.css";
import Footer from './components/Footer';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Adjust based on your needs
  variable: '--font-poppins',    // Optional: Use CSS variable
});

export const metadata: Metadata = {
  title: "Travel Kshetra",
  description: "Experience the speritual Uttarakhand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
