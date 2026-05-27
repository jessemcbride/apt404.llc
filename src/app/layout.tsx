import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APT404",
  description: "APT404 is a creative studio for technology-led experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
