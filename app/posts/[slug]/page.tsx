import { getPost } from "@/service/post-service";
import { NextPage } from "next";

interface PostingDetailProps {
  params: {
    slug: string;
  };
}

const PostingDetail: NextPage<PostingDetailProps> = async ({ params }) => {
  const post = await getPost(decodeURIComponent(params.slug));
  console.log(post);

  return (
    <div>
      {post?.title}
      {post?.content}
    </div>
  );
};
export default PostingDetail;
