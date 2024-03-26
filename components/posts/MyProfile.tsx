import { FC } from 'react';
import Typography from '../ui/typography';
import Link from 'next/link';

const MyProfile: FC = () => {
  return (
    <section className="flex w-full mb-4 items-center">
      <div className=" bg-red-500 w-[100px] h-[100px] rounded-full"></div>
      <div className="p-5">
        <p className="font-bold text-2xl">신주안</p>
        <Typography size="p">불편함과 문제를 해결하는 것에 보람을 느끼는 프론트엔드 개발자입니다.</Typography>
        <div className="flex gap-4">
          <Link
            href={'https://github.com/shinju4n'}
            target="_blank"
            className="text-blue-500 whitespace-pre-wrap font-bold"
          >
            Github
          </Link>
          <Link href={'mailto:ju4nshin@gmail.com'} className="text-blue-500 whitespace-pre-wrap font-bold">
            E-mail
          </Link>
          <Link
            href={'https://shinju4n.notion.site/fb02d767e5164273aa2168b899f6022c?pvs=4'}
            className="text-blue-500 whitespace-pre-wrap font-bold"
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
