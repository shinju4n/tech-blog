import { PostType } from "@/types/PostType";
import { FC } from "react";
import Typography from "@/components/ui/typography";
import Image from "next/image";

const PostListItem: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="flex flex-col items-start w-full bg-background border border-foreground/10 rounded-xl p-4">
      {/* <Image src={post.thumbnailUrl} alt="thumbnail" width={300} height={300} /> */}
      <div>
        <img src={post.thumbnailUrl} className="w-[50px] h-[50px]" />
      </div>
      <Typography size="large">{post.title}</Typography>
    </div>
  );
};

export default PostListItem;
