import { NextPage } from "next";
import Link from "next/link";

import PostListItem from "@/components/posts/PostsListItem";
import { getPostList } from "@/service/post-service";
import { PostType } from "@/types/PostType";

interface PostsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category: "FE" | "BE";
  };
}

const PostsPage: NextPage<PostsProps> = async ({ searchParams }) => {
  const postList = await getPostList(searchParams.category);
  return (
    <div className="flex flex-col gap-2 ">
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

export default PostsPage;
