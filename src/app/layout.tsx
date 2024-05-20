import StyledComponentsRegistry from "../../lib/registry";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Won Games Client",
  description: "E-commerce of games"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children} </StyledComponentsRegistry>
      </body>
    </html>
  );
}
