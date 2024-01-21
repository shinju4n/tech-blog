import Typography from "@/components/ui/typography";
import { NextPage } from "next";

interface PostsProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
    category: "FE" | "BE";
  };
}

const Posts: NextPage<PostsProps> = ({ searchParams }) => {
  return (
    <div>
      <Typography>category={searchParams.category}</Typography>
    </div>
  );
};

export default Posts;
