import { FC, PropsWithChildren } from 'react';
import Typography from '../ui/typography';
import Link from 'next/link';
import { github, email, portfolioNotion } from '@/lib/me';
import Image from 'next/image';
import { EmailIcon, GithubIcon, PortfolioIcon, ResumeIcon } from '../icons';

const getGithubProfile = async () => {
  const res = await fetch('https://api.github.com/users/shinju4n', {
    cache: 'default',
  });
  const data = await res.json();
  return data;
};

const IconContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex justify-start items-center gap-2">{children}</div>;
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href={github}
            target="_blank"
            className="text-neutral-500 whitespace-pre-wrap font-bold hover:-translate-y-1 transition-all "
          >
            <IconContainer>
              <GithubIcon size={20} />
              <Typography size="small">Github</Typography>
            </IconContainer>
          </Link>
          <Link
            href={'mailto:' + email}
            className="text-neutral-500 whitespace-pre-wrap font-bold hover:-translate-y-1 transition-all "
          >
            <IconContainer>
              <EmailIcon size={20} />
              <Typography size="small">Email</Typography>
            </IconContainer>
          </Link>
          <Link
            href={'/resume?type=blog'}
            className="text-neutral-500 whitespace-pre-wrap font-bold hover:-translate-y-1 transition-all "
          >
            <IconContainer>
              <ResumeIcon size={20} />
              <Typography size="small">Resume</Typography>
            </IconContainer>
          </Link>
          <Link
            href={portfolioNotion}
            className="text-neutral-500 whitespace-pre-wrap font-bold hover:-translate-y-1 transition-all "
            target="_blank"
          >
            <IconContainer>
              <PortfolioIcon size={20} />
              <Typography size="small">Portfolio</Typography>
            </IconContainer>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
