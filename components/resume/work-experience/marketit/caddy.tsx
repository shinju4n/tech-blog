import { FC } from 'react';
import Typography from '@/components/ui/typography';
import BlankLink from '@/components/blank-link';

const Caddy: FC = () => {
  return (
    <section>
      <Typography size="h3">캐디 Caddy</Typography>
      <Typography size="muted">2023.11 ~ 2024.03 (프론트엔드 1인 개발)</Typography>
      <div className="flex flex-col gap-4 pt-4">
        <div>
          <Typography size="large" className="font-bold">
            Description.
          </Typography>
          <Typography size="p">실제 인물 이미지를 AI 인플루언서 이미지로 변환하는 B2B 서비스</Typography>
        </div>
        <div>
          <Typography size="large" className="font-bold mb-2">
            Work.
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            <li>
              로딩 화면이 오래 지속되는 문제로 인한 사용자 경험 저하를 해결하기 위해 API 호출 로직을 수정하여 실시간으로
              이미지를 생성하고 사용자에게 지속적으로 업데이트를 제공함으로써{' '}
              <BlankLink
                href={
                  'https://www.notion.so/shinju4n/Portfolio-3050aed4843d4a1680dc6db40fc0dec8?pvs=4#e74d7fa4e5c644059630c5a4e0c2d895'
                }
              >
                사용자 경험을 개선
              </BlankLink>
              하였습니다.
            </li>
            <li>
              반복되는 코드를 개선하기 위해 react-hook-form, react-dropzone을 사용한 회원 가입, 이미지 생성 폼을
              개발하였습니다. 이를 통해 사용자 입력을 효율적으로 처리하고, 유지보수성을 높였습니다.
            </li>
            <li>
              이름, 성별, 팔로워 수, 카테고리 등을{' '}
              <BlankLink href="https://www.notion.so/shinju4n/Portfolio-3050aed4843d4a1680dc6db40fc0dec8?pvs=4#2f440d04d08a42e48d8706b9a074563e">
                필터로 사용하여 인플루언서 검색 기능을 개발
              </BlankLink>
              하였습니다.
            </li>
            <li>
              인플루언서의 팔로워 수 등락을 시각적으로 표현하기 위해 ApexCharts.js 라이브러리를 도입하여{' '}
              <BlankLink href="https://www.notion.so/shinju4n/Portfolio-3050aed4843d4a1680dc6db40fc0dec8?pvs=4#c8e7eb9516b545b4a9ebab98177bd28d">
                데이터 시각화 구현
              </BlankLink>
              하였습니다. 이를 통해 사용자들이 데이터를 더 쉽게 이해하고 분석할 수 있게 하였습니다.
            </li>
            <li>
              AI 인플루언서의 콘텐츠 제작을 위한 Instagram 포스팅 예약 및 등록을 할 수 있는 업무용 페이지
              구현하였습니다.
            </li>
            <li>
              Vercel을 사용하여 프로젝트 배포를 자동화하는 CI/CD 파이프라인을 구축하였습니다. 이를 통해 개발 프로세스를
              단순화하고, 빠르고 안정적인 배포가 가능해졌습니다.
            </li>
            <li>
              포트원 모듈을 사용하여{' '}
              <BlankLink href={'https://shinju4n.notion.site/9e27b11d8d8b4835aebf47eb5bbdca1e'}>
                구매 정책을 위한 결제 기능 구현
              </BlankLink>
              하였습니다. 이를 통해 안전하고 편리한 결제 시스템을 구축하였습니다.
            </li>
          </ul>
        </div>
        <div>
          <Typography size="large" className="font-bold mb-2">
            Tech Stack.
          </Typography>
          <Typography size="p">Next.js 13, TypeScript, Tailwind CSS, TanStack Query, Recoil </Typography>
        </div>
      </div>
    </section>
  );
};

export default Caddy;
