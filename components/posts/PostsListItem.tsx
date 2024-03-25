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
            className="flex flex-col sm:flex-row gap-10 w-full h-full bg-background border border-foreground/10 rounded-xl p-4 hover:bg-muted group"
            onClick={setScrollPosition}
          >
            <div className="flex justify-center items-center w-full sm:max-w-[200px] h-[250px] sm:h-[200px] overflow-hidden bg-foreground/5 ">
              <div className="relative w-52 h-52 flex justify-center items-center overflow-hidden">
                <Image
                  src={post.thumbnailUrl}
                  alt="thumbnail"
                  width={300}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="transition-all group-hover:scale-125 ease-in-out duration-300"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-between py-2">
              <Typography size="h4">{post.title}</Typography>
              <Typography size="p" className="line-clamp-3">
                {post.summary}
              </Typography>
              <Typography size="small" className="text-end">
                {post.date}
              </Typography>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default PostListItem;
