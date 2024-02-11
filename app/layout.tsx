import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import MainWrapper from "@/containers/layout/main-wrapper";
import { cn } from "@/lib/utils";
import Header from "@/containers/layout/header";
import ContentWrapper from "@/containers/layout/content-wrapper";
import { ThemeProvider } from "@/components/theme-provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "주안 블로그",
  description: "주안 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
