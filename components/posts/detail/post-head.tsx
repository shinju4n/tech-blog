import Badge from '@/components/ui/badge';
import Typography from '@/components/ui/typography';
import Link from 'next/link';
import { FC } from 'react';
interface PostHeadProps {
  title: string;
  createdAt: string;
  tags?: string[];
}

const PostHead: FC<PostHeadProps> = ({ title, createdAt, tags }) => {
  return (
    <div className="mb-5 border-b border-foreground/30 py-2">
      <Typography size="h1" className="my-6">
        {title}
      </Typography>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <Typography size="lead">{createdAt}</Typography>
        <div className="flex justify-start items-center gap-2">
          {tags?.map((tag, i) => {
            return (
              <Link key={i} href={`/posts?tag=${tag}`}>
                <Badge label={'# ' + tag} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostHead;
