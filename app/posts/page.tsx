import { NextPage } from 'next';
import { getPostList, getPostTags } from '@/service/post-service';

import PostListItem from '@/components/posts/PostsListItem';
import { type PostType } from '@/types/PostType';
import PostAnimation from '@/components/posts/PostAnimation';
import PostCategoryList from '@/components/posts/PostCategoryList';
import MyProfile from '@/components/posts/MyProfile';

interface PostsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
  };
}

const PostListPage: NextPage<PostsProps> = async ({ searchParams }) => {
  const postList = await getPostList(searchParams);
  const postTags = await getPostTags(searchParams.category);
  return (
    <div className="flex flex-col gap-2 pt-10">
      <MyProfile />
      <PostCategoryList searchParams={searchParams} tags={postTags} />
      <PostAnimation>
        {postList?.map((post: PostType, index) => {
          return <PostListItem post={post} key={post.id} index={index} />;
        })}
      </PostAnimation>
    </div>
  );
};

export default PostListPage;
