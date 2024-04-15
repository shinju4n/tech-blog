import { FC } from 'react';
import Link from 'next/link';
import Typography from '@/components/ui/typography';
import PostTagList from '@/components/posts/post-tag-list';
import Badge from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PostCategoryListProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
  };
  tags: string[];
}

const PostCategoryList: FC<PostCategoryListProps> = ({ searchParams, tags }) => {
  const currentCategory = searchParams.category || 'All';
  return (
    <>
      <div className="relative">
        <div className="flex justify-start items-center gap-4 border border-foreground/10 rounded-xl p-4 overflow-x-auto scrollbar-hide">
          {CATEGORY?.map(category => {
            return (
              <Link key={category} href={`/posts?category=${category}`}>
                <Badge
                  className={cn(currentCategory === category && 'ring-2 ring-primary', 'self-stretch')}
                  label={category}
                />
              </Link>
            );
          })}
        </div>
        <span className="absolute bg-background -top-3 left-2 px-4 text-center">
          <Typography size="small" className="font-bold">
            {'> Category'}
          </Typography>
        </span>
      </div>
      <PostTagList searchParams={searchParams} tags={tags} />
    </>
  );
};
export default PostCategoryList;

const CATEGORY = ['All', 'FE', 'BE', 'Database'];
