import { getPinnedPosts } from '@/service/post-service';
import { FC } from 'react';
import Image from 'next/image';
import Typography from '../ui/typography';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const PinnedPosts: FC = async () => {
  const pinned = await getPinnedPosts();
  return (
    <>
      <Typography size="h4">📌 Pinned Posts</Typography>
      <div className="flex overflow-scroll gap-2 w-full scrollbar-hide">
        {pinned.map((post, i) => {
          return (
            <Link href={`/posts/${post.id}`} key={i}>
              <div
                className={cn(
                  'flex flex-1 flex-col w-[18rem] h-[15rem] gap-5 justify-center items-center shadow-md',
                  'bg-background border border-foreground/10 rounded-xl  group overflow-hidden hover:bg-foreground/5'
                )}
              >
                <Thumbnail src={post.thumbnailUrl} />
                <Content title={post.title} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default PinnedPosts;

const Thumbnail: FC<{ src: string }> = ({ src }) => {
  return (
    <div
      className={cn('relative flex flex-[2] justify-center items-center w-full h-full overflow-hidden bg-foreground/5')}
    >
      <div className="flex justify-center items-center relative w-2/3 min-h-[15rem]">
        <Image
          src={src}
          alt="thumbnail"
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="transition-all group-hover:scale-125 ease-in-out duration-300 w-auto h-auto scale-150"
        />
      </div>
    </div>
  );
};

const Content: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="w-full flex flex-1 flex-col justify-between pb-4 px-4">
      <Typography size="h4" className="line-clamp-2 font-bold text-xl">
        {title}
      </Typography>
    </div>
  );
};
