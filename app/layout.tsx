import type { Metadata } from "next";
import "./globals.css";
import Layout from "./UI/Layout";
import localFont from "next/font/local";
import { Context } from "./context";

const MSSansSerif = localFont({ src: "../public/fonts/MS_Sans_Serif.ttf" });
export const metadata: Metadata = {
  title: "Rado's Website",
  description: "Rado's Website build by Rado. My name is Rado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${MSSansSerif.className} h-full w-full antialiased tracking-wider`}
      suppressHydrationWarning
    >
      <body className="h-full w-full">
        <div className="w-full h-full relative">
          <Context>
            <Layout>{children}</Layout>
          </Context>
        </div>
      </body>
    </html>
  );
}
