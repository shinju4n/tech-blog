import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import MainWrapper from '@/components/layout/main-wrapper';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '프론트엔드 개발자 신주안',
  description: '프론트엔드 개발자 신주안 이력서',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return (
    <MainWrapper>
      <div className="py-10">{children}</div>
    </MainWrapper>
  );
}
