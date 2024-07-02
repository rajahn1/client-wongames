import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/theme.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"]
});
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
