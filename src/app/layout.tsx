import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Footer } from "@/components/footer";
import { HeaderMenu } from "@/components/nav2";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

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
    <ClerkProvider>
      <html lang="en">
        <ColorSchemeScript />

        <body
          className={`${inter.className} bg-black flex justify-center w-full relative`}
        >
          <MantineProvider>
            <div className="w-full max-w-[1440px] flex flex-col ">
              {/* <Nav></Nav> */}
              {/* <HeaderMenu></HeaderMenu> */}
              {children}
              <Toaster />

              {/* <Footer></Footer> */}
            </div>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
