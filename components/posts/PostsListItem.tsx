'use client';
import { type FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typography from '@/components/ui/typography';
import { type PostType } from '@/types/PostType';
import { cn, setScrollPosition } from '@/lib/utils';
import Link from 'next/link';

const PostListItem: FC<{ post: PostType; index: number }> = ({ post, index }) => {
  return (
    <motion.div
      key={post.id}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <Link href={`/posts/${post.id}`}>
          <div
            className={cn(
              'flex flex-col w-full h-full gap-5 justify-center items-center',
              'sm:flex-row',
              'bg-background border border-foreground/10 rounded-xl  group overflow-hidden hover:bg-foreground/5'
            )}
            onClick={setScrollPosition}
          >
            <Thumbnail src={post.thumbnailUrl} />
            <Content title={post.title} summary={post.summary} date={post.date} />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PostListItem;

const Thumbnail: FC<{ src: string }> = ({ src }) => {
  return (
    <div
      className={cn(
        'relative flex justify-center items-start w-full  overflow-hidden bg-foreground/5 h-[200px]',
        'sm:max-w-[170px] sm:max-h-[170px] sm:items-center'
      )}
    >
      <div className="flex justify-center items-center relative w-[200px] h-[200px]">
        <Image
          src={src}
          alt="thumbnail"
          width={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-all group-hover:scale-125 ease-in-out duration-300 w-auto h-auto scale-150"
        />
      </div>
    </div>
  );
};

const Content: FC<{ title: string; summary: string; date: string }> = ({ title, summary, date }) => {
  return (
    <div className="w-full flex flex-col justify-between pb-4 px-4">
      <Typography size="h4">{title}</Typography>
      <Typography size="lead" className="line-clamp-3">
        {summary}
      </Typography>
      <Typography size="small" className="text-end text-foreground/50">
        {date}
      </Typography>
    </div>
  );
};
