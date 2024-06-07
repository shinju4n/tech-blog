import { FC } from 'react';
import Typography from '@/components/ui/typography';
import BlankLink from '@/components/blank-link';

const WantMore: FC = () => {
  return (
    <section>
      <Typography size="h3">원트모어 WantMore</Typography>
      <Typography size="muted">2023.04 ~ 2024.05</Typography>
      <div className="flex flex-col gap-4 pt-4">
        <div>
          <Typography size="large" className="font-bold">
            Description.
          </Typography>
          <Typography size="p">개인용 소셜미디어 개발 플랫폼</Typography>
        </div>
        <div>
          <Typography size="large" className="font-bold">
            Work.
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            <li>이미지 업로드 모듈에 대한 편의성 개선</li>
            <ul>
              <li>
                사용자가 여러 장의 이미지를 등록 후 수정 시, 순서를 원하는 대로 지정할 수 없는 문제가 발생하여 이미지에
                인덱스 기능을 추가하고 체크박스 체크 여부에 따라 순서를 자유롭게 조정 가능하게{' '}
                <BlankLink href="https://www.notion.so/shinju4n/Portfolio-3050aed4843d4a1680dc6db40fc0dec8?pvs=4#31372e5c817742e1a34ed80965350581">
                  사용자 경험 개선
                </BlankLink>
              </li>
            </ul>
          </ul>
        </div>
        <div>
          <Typography size="large" className="font-bold">
            Tech Stack.
          </Typography>
          <Typography size="p">Next.js 12, TypeScript, Tailwind CSS</Typography>
        </div>
      </div>
    </section>
  );
};

export default WantMore;
