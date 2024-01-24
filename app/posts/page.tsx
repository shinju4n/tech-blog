import PostListItem from "@/components/posts/PostsListItem";
import Typography from "@/components/ui/typography";
import { supabase } from "@/lib/supabase/supabase";
import { PostType } from "@/types/PostType";

import { NextPage } from "next";

interface PostsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category: "FE" | "BE";
  };
}

const getPosts = async (
  searchParams: PostsProps["searchParams"]["category"]
) => {
  const { data } = await supabase
    .from("BlogPosts")
    .select("*")
    .filter("category", "eq", searchParams);
  return data;
};

const PostsPage: NextPage<PostsProps> = async ({ searchParams }) => {
  const posts = await getPosts(searchParams.category);
  return (
    <div>
      {posts?.map((post: PostType) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
