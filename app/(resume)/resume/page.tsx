import { NextPage } from 'next';
import Link from 'next/link';
import { Caddy, Inflca, WantMore } from '@/components/resume/work-experience/marketit/index';
import { SuwonUniv, TechBlog } from '@/components/resume/other-experience/index';
import Divider from '@/components/resume/Divider';
import ResumeTitle from '@/components/resume/ResumeTitle';
import Typography from '@/components/ui/typography';

import { GoBackIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { email } from '@/lib/me';
import { Link2Icon } from '@radix-ui/react-icons';
import Linme from '@/components/resume/work-experience/inroes/linme';
import KasRental from '@/components/resume/work-experience/metamonster/kas-rental';
import Sgis from '@/components/resume/work-experience/metamonster/sgis';
import MetamonsterPage from '@/components/resume/work-experience/metamonster/metamonster-page';
import Company from './_components/company';
import { META_MONSTER } from './_constants/resume';

interface ResumeProps {
  searchParams: Record<'type', 'blog'>;
}

const Resume: NextPage<ResumeProps> = ({ searchParams }) => {
  return (
    <div className="px-2 md:px-10">
      <div className="pt-14 relative">
        <Link
          href="https://ju4n-devlog.site/resume"
          target="_blank"
          className="items-center gap-1 text-primary hover:text-cyan-400 hidden print:flex mb-2"
        >
          <Link2Icon />
          <Typography size="h4"> 웹페이지로 보면 좀 더 쾌적하게 보실 수 있습니다. </Typography>
        </Link>

        <Link href={'/posts'} className={cn('absolute right-0', searchParams.type === 'blog' ? 'block' : 'hidden')}>
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
        <div className="flex flex-col xl:flex-row items-start">
          <div className="w-full xl:w-1/3 h-auto xl:mb-0 xl:sticky xl:top-16 xl:pr-10">
            <Typography size="h2" className="w-full">
              이노즈 <span className="text-2xl">(Inroes)</span>
            </Typography>
            <Typography size="lead">Frontend Developer</Typography>
            <Typography size="muted">2024.07 ~ 2024.09</Typography>
            <Typography size="muted">퇴사 사유 : 임금 체불로 인한 퇴사</Typography>
            <div className="py-2">
              <Typography size="p">
                개발팀 / 매니저 <br></br>
                클라이언트 프론트엔드 엔지니어
              </Typography>
            </div>
          </div>
          <div className="xl:w-2/3">
            <Linme />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col xl:flex-row items-start">
          <div className="w-full xl:w-1/3 h-auto xl:mb-0 xl:sticky xl:top-16 xl:pr-10">
            <Typography size="h2" className="w-full">
              마켓잇 <span className="text-2xl">(Marketit)</span>
            </Typography>
            <Typography size="lead">Frontend Developer</Typography>
            <Typography size="muted">2022.11 ~ 2024.03 (1년 5개월)</Typography>
            <div className="py-2">
              <Typography size="p">
                신사업실 개발팀 / 매니저 <br></br>
                프론트엔드 엔지니어
              </Typography>
            </div>
          </div>
          <div className="xl:w-2/3">
            <Caddy />
            <Divider />
            <WantMore />
            <Divider />
            <Inflca />
          </div>
        </div>
      </div>
      <div className="py-10">
        <ResumeTitle>Other Experience.</ResumeTitle>
        <TechBlog />
        <Divider />
        <SuwonUniv />
      </div>
      <div className="py-10">
        <ResumeTitle>Skills.</ResumeTitle>
        <ul className="pl-4 list-disc flex flex-col gap-1">
          <li>
            <span className="font-bold">Front-End </span>: React, TypeScript, Next.js, TanStack Query, SWR, Zustand,
            Recoil, Tailwind CSS
          </li>
          <li>
            <span className="font-bold">Back-End </span>: MySQL, NestJS, TypeORM
          </li>
        </ul>
      </div>
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
