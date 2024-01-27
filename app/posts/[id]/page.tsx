import { NextPage } from "next";

interface PostingDetailProps {
  params: {
    id: string;
  };
}

const PostingDetail: NextPage<PostingDetailProps> = ({ params }) => {
  return <div>{params.id}</div>;
};
export default PostingDetail;
