'use client';
import { type FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typography from '@/components/ui/typography';
import { type PostType } from '@/types/PostType';
import { setScrollPosition } from '@/lib/utils';
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
            className="flex flex-col sm:flex-row gap-5 w-full h-full bg-background border border-foreground/10 rounded-xl hover:bg-foreground/5 group overflow-hidden"
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
    <div className="relative flex justify-center items-center w-full max-w-[170px] overflow-hidden bg-foreground/5 ">
      <Image
        src={src}
        alt="thumbnail"
        width={300}
        height={300}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="transition-all group-hover:scale-125 ease-in-out duration-300 w-auto h-auto"
      />
    </div>
  );
};

const Content: FC<{ title: string; summary: string; date: string }> = ({ title, summary, date }) => {
  return (
    <div className="w-full flex flex-col justify-between pb-4 pr-4">
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
