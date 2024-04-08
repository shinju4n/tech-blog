import { Metadata, ResolvingMetadata, type NextPage } from 'next';
import { getPostDetail } from '@/service/post-service';
import MarkdownRender from '@/components/MarkdownRender';
import PostHead from '@/components/posts/detail/PostHead';
import NextAndPreviousPost from '@/components/posts/detail/NextAndPreviousPost';

interface PostingDetailProps {
  params: {
    slug: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

export async function generateMetadata({ params }: PostingDetailProps, parent: ResolvingMetadata): Promise<Metadata> {
  const post = await getPostDetail(decodeURIComponent(params.slug));

  const previousImages = (await parent).openGraph?.images || [];

  const title = post.title + ' | Ju4n_Devlog ';

  return {
    title: title,
    description: post.summary,
    openGraph: {
      title: title,
      description: post.summary,
      locale: 'ko_KR',
      siteName: 'Ju4n_Devlog',
      url: 'https://ju4n-devlog.site',
      images: [...previousImages, post.thumbnailUrl],
    },
  };
}

const PostingDetail: NextPage<PostingDetailProps> = async ({ params }) => {
  const post = await getPostDetail(decodeURIComponent(params.slug));

  return (
    <div className="w-full">
      <PostHead title={post.title} createdAt={post.date} tags={post.tags} />
      <MarkdownRender markdown={post.content} />
      <NextAndPreviousPost next={post.next} previous={post.previous} />
    </div>
  );
};
export default PostingDetail;
