import { type FC } from "react";
import Image from "next/image";
import Typography from "@/components/ui/typography";
import { type PostType } from "@/types/PostType";

const PostListItem: FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 w-full h-full bg-background border border-foreground/10 rounded-xl p-4 hover:bg-muted group">
      <div className="flex justify-center items-center w-full sm:max-w-[200px] h-[250px] sm:h-[200px] overflow-hidden bg-foreground/5 ">
        <Image
          src={post.thumbnailUrl}
          alt="thumbnail"
          width={0}
          height={0}
          sizes="30vw"
          className="transition-all group-hover:scale-125 ease-in-out duration-300 w-full h-auto"
        />
      </div>
      <div className="w-full flex flex-col justify-between py-2">
        <Typography size="h4">{post.title}</Typography>
        <Typography size="p" className="line-clamp-3">
          {post.summary}
        </Typography>
        <Typography size="small" className="text-end">
          {post.date}
        </Typography>
      </div>
    </div>
  );
};

export default PostListItem;
