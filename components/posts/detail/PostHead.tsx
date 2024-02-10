import Badge from "@/components/ui/badge";
import Typography from "@/components/ui/typography";
import { FC } from "react";
interface PostHeadProps {
  title: string;
  createdAt: string;
  category?: string[];
}

const PostHead: FC<PostHeadProps> = ({ title, createdAt, category }) => {
  return (
    <div className="py-5 border-b border-foreground/50">
      <Typography size="h1" className="mb-4">
        {title}
      </Typography>
      <div className="flex justify-between">
        <Typography size="lead">{createdAt}</Typography>
        <div className="flex justify-start items-center gap-2">
          {category?.map((category, i) => (
            <Badge key={i} label={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostHead;
