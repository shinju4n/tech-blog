import Typography from "@/components/ui/typography";
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
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?category=${searchParams}`
  );
  const data = await res.json();
  return data;
};

const PostsPage: NextPage<PostsProps> = async ({ searchParams }) => {
  return (
    <div>
      <Typography>category={searchParams.category}</Typography>
    </div>
  );
};

export default PostsPage;
