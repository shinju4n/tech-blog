import { getPinnedPosts } from '@/service/post-service';
import { FC } from 'react';
import Image from 'next/image';
import Typography from '../ui/typography';
import Link from 'next/link';

const PinnedPosts: FC = async () => {
  const pinned = await getPinnedPosts();
  return (
    <>
      <Typography size="h4">📌 Pinned Posts</Typography>
      <div className="flex w-full mb-4 overflow-scroll gap-2 scrollbar-hide">
        {pinned.map((post, i) => {
          return (
            <Link href={`/posts/${post.id}`} key={i}>
              <div className="flex flex-col justify-center h-full border rounded-lg shadow-md overflow-hidden">
                <div className="relative w-64 h-32">
                  <Image
                    src={post.thumbnailUrl}
                    alt={post.id + 'thumbnail'}
                    width={200}
                    height={100}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="pl-2 py-2 font-bold line-clamp-2">{post.title}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default PinnedPosts;
