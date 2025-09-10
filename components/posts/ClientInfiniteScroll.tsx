"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
  thumbnailUrl: string;
}

interface ClientInfiniteScrollProps {
  initialPosts: Post[];
}

const ClientInfiniteScroll: React.FC<ClientInfiniteScrollProps> = ({
  initialPosts,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const endOfListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMorePosts();
        }
      },
      { root: scrollContainerRef.current, threshold: 1.0 }
    );

    if (endOfListRef.current) {
      observer.observe(endOfListRef.current);
    }

    return () => {
      if (endOfListRef.current) {
        observer.unobserve(endOfListRef.current);
      }
    };
  }, [endOfListRef.current]);

  const loadMorePosts = () => {
    setPosts((prevPosts) => [...prevPosts, ...initialPosts]);
  };

  return (
    <div
      className="flex w-full mb-4 overflow-x-auto gap-2 scrollbar-hide"
      ref={scrollContainerRef}
    >
      {posts.map((post, i) => (
        <Link href={`/posts/${post.id}`} key={i}>
          <div className="flex flex-col justify-center h-full border rounded-lg shadow-md overflow-hidden">
            <div className="relative w-64 h-32">
              <Image
                src={post.thumbnailUrl}
                alt={`${post.id} thumbnail`}
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
      ))}
      <div ref={endOfListRef}></div>
    </div>
  );
};

export default ClientInfiniteScroll;
