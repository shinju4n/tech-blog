import { PostType } from "@/types/PostType";
import { FC } from "react";
import Typography from "@/components/ui/typography";
import Image from "next/image";

const PostListItem: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 w-full h-full bg-background border border-foreground/10 rounded-xl p-4 hover:bg-muted">
      <div className="flex justify-center items-center w-full sm:max-w-[200px] h-[250px] sm:h-[200px] overflow-hidden bg-foreground/5 ">
        <Image
          src={post.thumbnailUrl}
          alt="thumbnail"
          width={500}
          height={500}
          sizes="5vh"
          className="transition-all hover:scale-125 ease-in-out duration-300"
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
