import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import SideMenu from "@/components/side-menu";
import { ReactLenis } from "@/lib/lenis";
import Footer from "@/components/footer";

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
      <ReactLenis root>
        <body className={workSans.className}>
          <Header />
          <SideMenu />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
