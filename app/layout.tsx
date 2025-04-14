import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// TODO: Atualizar fonte
const font = Quicksand({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// TODO: Atualizar metadata
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
