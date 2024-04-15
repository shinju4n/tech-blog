import { FC } from 'react';
import Link from 'next/link';
import Badge from '@/components/ui/badge';
import Typography from '@/components/ui/typography';
import { cn } from '@/lib/utils';

interface PostTagListProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
  };
  tags: string[];
}

const PostTagList: FC<PostTagListProps> = ({ searchParams, tags }) => {
  const currentCategory = searchParams.category || 'All';
  if (currentCategory === 'All') return null;

  return (
    <div className="relative">
      <div className="flex justify-start items-center gap-4 border border-foreground/10 rounded-xl p-4 overflow-x-auto scrollbar-hide bg-background/60">
        {tags?.map(tag => {
          return (
            <Link key={tag} href={`/posts?category=${currentCategory}&tag=${tag}`}>
              <Badge
                className={cn(searchParams.tag === tag && 'ring-2 ring-primary', 'self-stretch')}
                label={'#' + tag}
              />
            </Link>
          );
        })}
      </div>
      <span className="absolute bg-background -top-3 left-2 px-4 text-center">
        <Typography size="small" className="font-bold">
          {'# HashTag'}
        </Typography>
      </span>
    </div>
  );
};
export default PostTagList;
