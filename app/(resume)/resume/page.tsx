import { NextPage } from 'next';
import Link from 'next/link';
import { Caddy, Inflca, WantMore } from '@/components/resume/work-experience/marketit/index';
import { SuwonUniv, TechBlog } from '@/components/resume/other-experience/index';
import { FrontEnd, BackEnd } from '@/components/resume/skills/index';
import Divider from '@/components/resume/Divider';
import ResumeTitle from '@/components/resume/ResumeTitle';
import Typography from '@/components/ui/typography';
import Strong from '@/components/strong';

import { GoBackIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { email } from '@/lib/me';
import { Link2Icon } from '@radix-ui/react-icons';

interface ResumeProps {
  searchParams: Record<'type', 'blog'>;
}

const Resume: NextPage<ResumeProps> = ({ searchParams }) => {
  return (
    <div className="px-4">
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
          사용자 경험을 중요시하는 신주안입니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-0.5">
          2년차 프론트엔드 개발자로 스타트업에서 <Strong>웹 서비스를 개발/배포/운영</Strong>하였습니다. 기존 프로젝트
          투입 및 새로운 프로젝트의 기획 및 개발을 담당하여 <Strong>처음부터 끝까지 책임졌던 경험</Strong>이 있습니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-0.5">
          저는 항상 <Strong>적극적이고 능동적인 자세</Strong>로 도전에 임하며, <Strong>문제를 발견하고 해결</Strong>하는
          것을 두려워하지 않습니다. 프론트엔드 신입으로 입사했으나, 회사의 요구에 따라 백엔드 업무까지 맡게 되어 두 분야
          모두에서 실무 경험을 쌓을 수 있었습니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-0.5">
          항상 기술적인 성장을 위해{' '}
          <Strong>최신 기술 학습에 관심이 많고, 주도적으로 문제를 발견하여 분석하고 해결하기 위해 노력</Strong>하고
          있습니다. 이를 통해 팀 내에서의 역량을 발휘하고, 최고의 결과물을 만들어내고자 합니다.
        </Typography>
      </div>
      <div className="py-10">
        <ResumeTitle>Work Experience</ResumeTitle>
        <div className="flex flex-col xl:flex-row items-start">
          <div className="w-full xl:w-1/3 h-auto mb-4 xl:mb-0 xl:sticky xl:top-16 xl:pr-10">
            <Typography size="h2" className="w-full">
              마켓잇 <span className="text-2xl">(Marketit)</span>
            </Typography>
            <Typography size="lead">Frontend Developer</Typography>
            <Typography size="muted">2022.11 ~ 2024.03</Typography>
            <div className="py-2">
              <Typography size="p">
                신사업실 개발팀 / 매니저 <br></br>
                전반적인 웹 퍼블리싱, 프론트엔드 개발 담당
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
      <Divider />
      <div className="py-10">
        <ResumeTitle>Other Experience.</ResumeTitle>
        <TechBlog />
        <Divider />
        <SuwonUniv />
      </div>
      <Divider />
      <div className="py-10">
        <ResumeTitle>Skills.</ResumeTitle>
        <FrontEnd />
        <Divider />
        <BackEnd />
      </div>
      <Divider />
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
