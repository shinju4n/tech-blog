import { type NextPage } from "next";
import { getPost } from "@/service/post-service";
import MarkdownRender from "@/components/MarkdownRender";
import PostHead from "@/components/posts/detail/PostHead";

interface PostingDetailProps {
  params: {
    slug: string;
  };
}

const PostingDetail: NextPage<PostingDetailProps> = async ({ params }) => {
  const post = await getPost(decodeURIComponent(params.slug));

  return (
    <div className="w-full lg:max-w-xl xl:max-w-5xl transition-all">
      <PostHead
        title={post.title}
        createdAt={post.date}
        category={post.category}
      />
      <MarkdownRender markdown={post.content} />
    </div>
  );
};
export default PostingDetail;
