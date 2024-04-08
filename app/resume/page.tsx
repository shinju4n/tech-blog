'use client';
import { NextPage } from 'next';
import Typography from '@/components/ui/typography';
import Strong from '@/components/Strong';
import ResumeTitle from '@/components/resume/ResumeTilte';
import Caddy from '@/components/resume/work-experience/marketit/caddy';

const Resume: NextPage = () => {
  return (
    <>
      <div className="py-10">
        <Typography size="h1">
          반갑습니다!👋 <br></br> 저는 FrontEnd 개발자 신주안입니다.
        </Typography>
        <Typography size="h4" className="text-foreground/80 py-4">
          불편함과 문제를 해결하는 것에 보람을 느끼는 프론트엔드 개발자인 신주안입니다.<br></br>
          <Strong>Next.js</Strong>를 활용하여 혼자서 프로젝트를 구축하고 배포한 경험이 있습니다.<br></br>
          기존에 수치만을 보여주던 화면의 불편함을 개선하기 위해 <Strong>차트 라이브러리</Strong>를 도입하여 사용자가
          한눈에 등락을 파악할 수 있도록 UI/UX를 개선한 경험이 있습니다.<br></br>
          또한 <Strong>Spring Boot</Strong>와 <Strong>Thymeleaf</Strong>를 활용하여 백오피스 시스템을 풀스택으로 개발한
          경험이 있습니다. 함께 일하면 열정과 기술력으로 프로젝트에 기여할 준비가 되어 있습니다.
        </Typography>
      </div>
      <div className="py-10">
        <ResumeTitle>Work Experience</ResumeTitle>
        <div className="flex flex-col xl:flex-row items-start">
          <div className="xl:w-1/3 mb-4">
            <Typography size="h2">
              마켓잇 <span className="text-2xl">(Marketit)</span>
            </Typography>
            <Typography size="lead">Frontend Developer</Typography>
            <Typography size="muted">2022.11 ~ 2024.03</Typography>
          </div>
          <div className="xl:w-2/3">
            <Caddy />
          </div>
        </div>
      </div>
    </>
  );
};
export default Resume;
