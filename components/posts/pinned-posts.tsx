import { FC, ReactNode } from 'react';
import Typography from '../ui/typography';

const PinnedPosts: FC<{ children: ReactNode }> = async ({ children }) => {
  return (
    <>
      <Typography size="h4">📌 Pinned Posts</Typography>
      {children}
    </>
  );
};
export default PinnedPosts;
