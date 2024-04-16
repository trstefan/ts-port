import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { CommandDialogDemo } from "@/components/command-box";
import { FloatingNavDemo } from "@/components/FloatingNavbar";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ST Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <FloatingNavDemo />
          <div className="flex gap-2">
            <ModeToggle />
            <CommandDialogDemo />
          </div>
          <div className="">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
