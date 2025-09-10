import { NextPage } from 'next';
import Link from 'next/link';
import Divider from '@/components/resume/Divider';
import ResumeTitle from '@/components/resume/ResumeTitle';
import Typography from '@/components/ui/typography';
import Skills from '@/components/resume/skills/Skills';
import OtherExperience from '@/components/resume/other-experience/OtherExperience';

import { GoBackIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { email } from '@/lib/me';
import { Link2Icon } from '@radix-ui/react-icons';
import Company from './_components/company';
import { META_MONSTER, INROES, MARKETIT } from './_constants/resume';

interface ResumeProps {
  searchParams: Promise<Record<'type', 'blog'>>;
}

const Resume: NextPage<ResumeProps> = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  return (
    <div className="px-2 md:px-10">
      <div className="pt-14 relative">
        <Link
          href="https://ju4n-shin.site/resume"
          target="_blank"
          className="items-center gap-1 text-primary hover:text-cyan-400 hidden print:flex mb-2"
        >
          <Link2Icon />
          <Typography size="h4"> 웹페이지로 보면 좀 더 쾌적하게 보실 수 있습니다. </Typography>
        </Link>

        <Link href={'/posts'} className={cn('absolute right-0', resolvedSearchParams.type === 'blog' ? 'block' : 'hidden')}>
          <GoBackIcon />
        </Link>
        <Typography size="h1" className="break-keep">
          안녕하세요 👋
          <br></br>
          프론트엔드 엔지니어 신주안입니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-0.5">
          3년차 프론트엔드 개발자입니다.
          <br></br>
          사용자 경험 개선과 비즈니스 가치 창출에 몰입하며, 새로운 기술을 학습하고 팀과 함께 성장하는 것을 즐깁니다.
        </Typography>
      </div>
      <div className="py-10">
        <ResumeTitle>Work Experience</ResumeTitle>
        <Company company={META_MONSTER} />
        <Divider />
        <Company company={INROES} />
        <Typography size="muted" className="text-center py-2">퇴사 사유 : 임금 체불로 인한 퇴사</Typography>
        <Divider />
        <Company company={MARKETIT} />
      </div>
      <OtherExperience />
      <Skills />
      <div className="py-10">
        <ResumeTitle>Contact.</ResumeTitle>
        <Typography size="p">
          ✉️ Email :{' '}
          <Link
            href={'mailto:' + email}
            className='text-primary dark:text-cyan-500 transition-colors hover:text-cyan-500 dark:hover:text-cyan-300"'
          >
            ju4nshin@gmail.com
          </Link>
        </Typography>
        <Typography size="p">📞 Phone : 010-2993-5911</Typography>
      </div>
    </div>
  );
};
export default Resume;
