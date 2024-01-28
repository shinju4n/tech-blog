import { type NextPage } from "next";
import { getPost } from "@/service/post-service";
import MarkdownRender from "@/components/MarkdownRender";
import Typography from "@/components/ui/typography";

interface PostingDetailProps {
  params: {
    slug: string;
  };
}

const PostingDetail: NextPage<PostingDetailProps> = async ({ params }) => {
  const post = await getPost(decodeURIComponent(params.slug));

  return (
    <div className="w-full">
      <div className=" pb-3">
        <Typography size="h2">{post?.title}</Typography>
      </div>
      <div className="py-4">
        <MarkdownRender markdown={post.content} />
      </div>
    </div>
  );
};
export default PostingDetail;
