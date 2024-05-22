import type { Metadata } from "next";
import StyledComponentsRegistry from "../../lib/registry";

import { Poppins } from "next/font/google";
import "./globals.css";

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
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children} </StyledComponentsRegistry>
      </body>
    </html>
  );
}
