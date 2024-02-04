import { PostType } from "@/types/PostType";
import { FC } from "react";
import Typography from "@/components/ui/typography";
import Image from "next/image";

const PostListItem: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full h-full bg-background border border-foreground/10 rounded-xl p-4">
      <div className="flex justify-center items-center w-full sm:w-36 sm:h-36 bg-foreground/5 ">
        <Image
          src={post.thumbnailUrl}
          alt="thumbnail"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full flex flex-col justify-between py-2">
        <Typography size="h4">{post.title}</Typography>
        <Typography size="p">{post.summary}</Typography>
        <Typography size="small" className="text-end">
          {post.date}
        </Typography>
      </div>
    </div>
  );
};

export default PostListItem;
