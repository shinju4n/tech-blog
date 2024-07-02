import { FC } from 'react';
import Link from 'next/link';
import Typography from '@/components/ui/typography';
import PostTagList from '@/components/posts/post-tag-list';
import Badge from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { getPostCategories, getPostTags } from '@/service/post-service';

interface PostCategoryListProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
  };
}

const PostCategoryList: FC<PostCategoryListProps> = async ({ searchParams }) => {
  const currentCategory = searchParams.category || 'All';
  const categories = await getPostCategories();
  const tags = await getPostTags(searchParams.category);

  return (
    <>
      <div className="relative shadow-sm">
        <span className="absolute bg-background -top-3 left-2 px-4 text-center">
          <Typography size="small" className="font-bold">
            {'> Category'}
          </Typography>
        </span>
        <div className="flex justify-start items-center gap-4 border border-foreground/10 rounded-xl p-4 overflow-x-auto scrollbar-hide">
          <Link href={`/posts?category=All`}>
            <Badge
              className={cn(currentCategory === 'All' ? 'ring-2 ring-primary' : 'ring-1 ring-foreground/10')}
              label={'All'}
            />
          </Link>
          {categories?.map(({ category, count }) => {
            return (
              <Link key={category} href={`/posts?category=${category}`}>
                <Badge
                  className={cn(
                    currentCategory === category ? 'ring-2 ring-primary' : 'ring-1 ring-foreground/10',
                    'self-stretch relative'
                  )}
                  label={category + ` (${count})`}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <PostTagList searchParams={searchParams} tags={tags} />
    </>
  );
};
export default PostCategoryList;
