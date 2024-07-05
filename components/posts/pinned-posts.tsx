import { getPinnedPosts } from '@/service/post-service';
import { FC, ReactNode } from 'react';
import Typography from '../ui/typography';
import ClientInfiniteScroll from './ClientInfiniteScroll';

const PinnedPosts: FC<{ children: ReactNode }> = async ({ children }) => {
  const pinned = await getPinnedPosts();

  return (
    <>
      <Typography size="h4">📌 Pinned Posts</Typography>
      {children}
    </>
  );
};
export default PinnedPosts;
