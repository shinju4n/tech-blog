import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/layout/container";
import Header from "@/containers/layout/header";
import ContentWrapper from "@/containers/layout/content-wrapper";
import Sidebar from "@/containers/layout/sidebar";
import { cn } from "@/lib/utils";

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
    <html lang="ko" suppressHydrationWarning>
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Header />
            <ContentWrapper>
              <Sidebar />
              <div className="relative flex justify-center w-full px-4 py-6">
                {children}
              </div>
            </ContentWrapper>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
