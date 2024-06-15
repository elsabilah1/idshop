import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: "idshop",
  description: "idshop",
};

type RootLayoutType = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
