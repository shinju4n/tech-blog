import { NextPage } from "next";
import Link from "next/link";
import { getPostList, getPostTags } from "@/service/post-service";
import PostListItem from "@/components/posts/PostsListItem";
import PostTagList from "@/components/posts/PostTagList";
import { type PostType } from "@/types/PostType";

interface PostsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category?: string;
    tag?: string;
  };
}

const PostListPage: NextPage<PostsProps> = async ({ searchParams }) => {
  const postList = await getPostList(searchParams);
  const postTags = await getPostTags();
  return (
    <div className="flex flex-col gap-2 pt-10">
      <PostTagList searchParams={searchParams} tags={postTags} />
      {postList?.map((post: PostType) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostListItem post={post} />
          </Link>
        );
      })}
    </div>
  );
};

export default PostListPage;
