import { NextPage } from 'next';
import Link from 'next/link';
import { Caddy, Inflca, WantMore } from '@/components/resume/work-experience/marketit/index';
import { SuwonUniv, TechBlog } from '@/components/resume/other-experience/index';
import { FrontEnd, BackEnd } from '@/components/resume/skills/index';
import Typography from '@/components/ui/typography';
import Strong from '@/components/strong';
import ResumeTitle from '@/components/resume/ResumeTitle';
import Divider from '@/components/resume/Divider';
import { GoBackIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { email } from '@/lib/me';
import { Link2Icon } from '@radix-ui/react-icons';

interface ResumeProps {
  searchParams: Record<'type', 'blog'>;
}

const Resume: NextPage<ResumeProps> = ({ searchParams }) => {
  return (
    <div className="print:h-[297mm] print:w-[210mm]">
      <div className="pt-20 relative">
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
        <Typography size="h1">
          반갑습니다!👋 <br></br> 저는 FrontEnd 개발자 신주안입니다.
        </Typography>

        <Typography size="h4" className="text-foreground/80 py-1">
          사용자들에게 기능을 제공하는 것 이상으로, 사용자들에게 <Strong>편의성과 쾌적한 경험을 제공</Strong>하는 것을
          중요하게 생각합니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-1">
          새로운 기술 학습에 관심이 많고, 주도적으로 문제를 발견하여 분석하고 해결하기 위해 노력하고 있습니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-1">
          <Strong>Next.js</Strong>를 활용하여 혼자서 프로젝트를 구축하고 배포한 경험이 있습니다.<br></br>
          기존에 수치만을 보여주던 화면의 불편함을 개선하기 위해 <Strong>차트 라이브러리</Strong>를 도입하여 사용자가
          한눈에 등락을 파악할 수 있도록 UI/UX를 개선한 경험이 있습니다.<br></br>
          또한 <Strong>Spring Boot</Strong>와 <Strong>Thymeleaf</Strong>를 활용하여 백오피스 시스템을 풀스택으로 개발한
          경험이 있습니다.
        </Typography>
      </div>
      <div className="py-10">
        <ResumeTitle>Work Experience</ResumeTitle>
        <div className="flex flex-col xl:flex-row items-start">
          <div className="xl:w-1/3 h-auto mb-4 xl:mb-0 xl:sticky xl:top-16 pr-10">
            <Typography size="h2">
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
