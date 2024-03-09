import { Metadata, ResolvingMetadata, type NextPage } from "next";
import { getPost } from "@/service/post-service";
import MarkdownRender from "@/components/MarkdownRender";
import PostHead from "@/components/posts/detail/PostHead";

interface PostingDetailProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata(
  { params }: PostingDetailProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(decodeURIComponent(params.slug));

  const previousImages = (await parent).openGraph?.images || [];

  const title = "주안 블로그 | " + post.title;

  return {
    title: title,
    description: post.summary,
    openGraph: {
      title: title,
      description: post.summary,
      locale: "ko_KR",
      siteName: "주안 블로그",
      url: "https://ju4n-blog.vercel.app",
      images: [...previousImages, post.thumbnailUrl],
    },
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
