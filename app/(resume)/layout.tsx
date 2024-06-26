import type { Metadata } from 'next';
import MainWrapper from '@/components/layout/main-wrapper';

export const metadata: Metadata = {
  title: '프론트엔드 개발자 신주안',
  description: '프론트엔드 개발자 신주안 이력서',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <MainWrapper>{children}</MainWrapper>;
}
