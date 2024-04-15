'use client';
import { FC, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';

const PostAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};
export default PostAnimation;
