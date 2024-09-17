import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Wix_Madefor_Display } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const wix_for_display = Wix_Madefor_Display({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// for normal texts
const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boomzo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${wix_for_display.className} ${manrope.className}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
