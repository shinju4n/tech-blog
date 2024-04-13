import { FC } from 'react';
import Typography from '../ui/typography';
import Link from 'next/link';
import { github, email, portfolioNotion } from '@/lib/me';
import Image from 'next/image';

const getGithubProfile = async () => {
  const res = await fetch('https://api.github.com/users/shinju4n', {
    cache: 'default',
  });
  const data = await res.json();
  return data;
};

const MyProfile: FC = async () => {
  const { avatar_url } = await getGithubProfile();
  return (
    <section className="flex w-full mb-4 items-center">
      <div className=" bg-primary min-w-[100px] min-h-[100px] rounded-full overflow-hidden">
        <Image src={avatar_url} alt="profile" width={100} height={100} loading="eager" />
      </div>
      <div className="p-5">
        <span className="font-bold text-2xl">신주안</span>
        <Typography size="p">불편함과 문제를 해결하는 것에 보람을 느끼는 프론트엔드 개발자입니다.</Typography>
        <div className="flex gap-4">
          <Link
            href={github}
            target="_blank"
            className="text-neutral-500 hover:text-foreground whitespace-pre-wrap font-bold"
          >
            Github
          </Link>
          <Link
            href={'mailto:' + email}
            className="text-neutral-500 hover:text-foreground whitespace-pre-wrap font-bold"
          >
            E-mail
          </Link>
          <Link
            href={'/resume?type=blog'}
            className="text-neutral-500 hover:text-foreground whitespace-pre-wrap font-bold"
          >
            Resume
          </Link>
          <Link
            href={portfolioNotion}
            className="text-neutral-500 hover:text-foreground whitespace-pre-wrap font-bold"
            target="_blank"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
