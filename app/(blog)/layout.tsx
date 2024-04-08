import type { Metadata } from 'next';
import Header from '@/components/layout/header';
import MainWrapper from '@/components/layout/main-wrapper';

import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Ju4n_Devlog',
  description: '불편함을 해결하는 개발을 하는 것을 좋아하는 개발자의 블로그',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MainWrapper>{children}</MainWrapper>
      <Toaster
        toastOptions={{
          className: '!bg-background/70 !text-foreground !text-sm',
        }}
      />
    </>
  );
}
