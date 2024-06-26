import { NextPage } from 'next';
import { getPostList, getPostTags } from '@/service/post-service';

import PostListItem from '@/components/posts/posts-list-item';
import { type PostType } from '@/types/PostType';
import PostAnimation from '@/components/posts/post-animation';
import PostCategoryList from '@/components/posts/post-categoryList';
import MyProfile from '@/components/posts/my-profile';

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
