import type { Metadata } from "next";
import { Geist, Geist_Mono,Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 const outfit = Outfit({
subsets:["latin"]
 })
export const metadata: Metadata = {
  title: "Countries Explorer",
  description: "Explore countries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.className} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-dvh w-full`}
      >
        <ThemeProvider 
        attribute={"class"} defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        <Header/>
        <main className="flex-1 w-full px-5 md:px-10 pt-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
