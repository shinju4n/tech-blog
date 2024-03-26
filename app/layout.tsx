import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import GlobalContainer from '@/components/layout/global-container';
import Header from '@/components/layout/header';
import MainWrapper from '@/components/layout/main-wrapper';

import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '🚀 주안 블로그',
  description: '재미있는 개발이 좋아요',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn('bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GlobalContainer>
            <Header />
            <MainWrapper>{children}</MainWrapper>
            <Toaster
              toastOptions={{
                className: '!bg-background/70 !text-foreground !text-sm',
              }}
            />
          </GlobalContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
