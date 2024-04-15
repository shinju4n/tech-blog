import Typography from '@/components/ui/typography';
import { PostType } from '@/types/PostType';
import Link from 'next/link';
import { FC, ReactNode, memo } from 'react';

interface NextAndPreviousPostProps {
  next: PostType | null;
  previous: PostType | null;
}

const NextAndPreviousPost: FC<NextAndPreviousPostProps> = ({ next, previous }) => {
  return (
    <div className="w-full flex gap-5 mt-10">
      <div className="w-1/2">
        {previous && (
          <Wrapper>
            <Link href={`/posts/${previous.id}`} className="flex flex-col items-start gap-1 w-full">
              <Typography size="small">Previous Post</Typography>
              <Typography size="large" className="line-clamp-1">
                {previous.title}
              </Typography>
            </Link>
          </Wrapper>
        )}
      </div>
      <div className="w-1/2">
        {next && (
          <Wrapper>
            <Link href={`/posts/${next.id}`} className="flex flex-col items-start gap-1 w-full ">
              <Typography size="small">Next Post</Typography>
              <Typography size="large" className="line-clamp-1">
                {next.title}
              </Typography>
            </Link>
          </Wrapper>
        )}
      </div>
    </div>
  );
};

export default memo(NextAndPreviousPost);

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-full border rounded-lg p-4 hover:border-primary">{children}</div>;
};
