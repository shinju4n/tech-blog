import { NextPage } from 'next';
import { getPinnedPosts, getPostList } from '@/service/post-service';

import PostListItem from '@/components/posts/posts-list-item';
import { type PostType } from '@/types/PostType';
import PostAnimation from '@/components/posts/post-animation';
import PostCategoryList from '@/components/posts/post-categoryList';
import MyProfile from '@/components/posts/my-profile';
import PinnedPosts from '@/components/posts/pinned-posts';
import ClientInfiniteScroll from '@/components/posts/ClientInfiniteScroll';
import PostSearch from '@/components/posts/post-search';

interface PostsProps {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
    search?: string;
  }>;
}

const PostListPage: NextPage<PostsProps> = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const postList = await getPostList(resolvedSearchParams);
  const pinned = await getPinnedPosts();

  return (
    <div className="flex flex-col gap-2 pt-10">
      <MyProfile />
      <PostSearch search={resolvedSearchParams.search as string} />
      <PinnedPosts>
        <ClientInfiniteScroll initialPosts={pinned} />
      </PinnedPosts>
      <PostCategoryList searchParams={resolvedSearchParams} />
      <PostAnimation>
        {postList.length === 0 && (
          <div className="flex justify-center items-center w-full font-bold text-xl">포스팅이 없습니다.</div>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          {postList?.map((post: PostType, index) => {
            return <PostListItem post={post} key={post.id} index={index} />;
          })}
        </div>
      </PostAnimation>
    </div>
  );
};

export default PostListPage;
