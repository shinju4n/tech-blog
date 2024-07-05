import { NextPage } from 'next';
import { getPinnedPosts, getPostList } from '@/service/post-service';

import PostListItem from '@/components/posts/posts-list-item';
import { type PostType } from '@/types/PostType';
import PostAnimation from '@/components/posts/post-animation';
import PostCategoryList from '@/components/posts/post-categoryList';
import MyProfile from '@/components/posts/my-profile';
import PinnedPosts from '@/components/posts/pinned-posts';
import ClientInfiniteScroll from '@/components/posts/ClientInfiniteScroll';

interface PostsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
  };
}

const PostListPage: NextPage<PostsProps> = async ({ searchParams }) => {
  const postList = await getPostList(searchParams);
  const pinned = await getPinnedPosts();

  return (
    <div className="flex flex-col gap-2 pt-10">
      <MyProfile />
      <PinnedPosts>
        <ClientInfiniteScroll initialPosts={pinned} />
      </PinnedPosts>
      <PostCategoryList searchParams={searchParams} />
      <PostAnimation>
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
