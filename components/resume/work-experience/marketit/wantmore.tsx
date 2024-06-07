import { FC } from 'react';
import Typography from '@/components/ui/typography';
import BlankLink from '@/components/blank-link';

const WantMore: FC = () => {
  return (
    <section>
      <Typography size="h3">원트모어 WantMore</Typography>
      <Typography size="muted">2023.04 ~ 2024.05 (프론트엔드 기여도 20%)</Typography>
      <div className="flex flex-col gap-4 pt-4">
        <div>
          <Typography size="large" className="font-bold">
            Description.
          </Typography>
          <Typography size="p">
            인플루언서들이 팬들과 소통하고 독자전인 콘텐츠를 제공하는 개인용 소셜미디어 플랫폼
          </Typography>
        </div>
        <div>
          <Typography size="large" className="font-bold mb-2">
            Work.
          </Typography>
          <ul className="pl-4 list-disc flex flex-col gap-1">
            <li>
              이미지 업로드 모듈의 편의성을 개선하였습니다. 사용자가 여러 장의 이미지를 등록한 후 수정할 때, 순서를
              원하는 대로 지정할 수 있도록 이미지에 인덱스 기능을 추가하고, 체크박스 선택 여부에 따라 순서를 자유롭게
              조정할 수 있게 하여{' '}
              <BlankLink href="https://www.notion.so/shinju4n/Portfolio-3050aed4843d4a1680dc6db40fc0dec8?pvs=4#31372e5c817742e1a34ed80965350581">
                사용자 경험 개선
              </BlankLink>
              하였습니다.
            </li>
            <li>
              인턴 두 분과 함께 프로젝트를 수행하며 효과적인 팀 협업을 경험했습니다. 서로가 모르는 부분에 대해
              적극적으로 공유하고, 코드 리뷰를 통해 서로의 코드를 개선하고 향상시켰습니다.
            </li>
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
