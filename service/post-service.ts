import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostType } from "@/types/PostType";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostList = async (category?: string): Promise<PostType[]> => {
  const postFiles = fs.readdirSync(postsDirectory);
  const postData = postFiles.map((fileName, i) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents) as GrayMatterFile<string>;
    return {
      id: i + 1,
      ...matterResult.data,
    } as PostType;
  });
  return postData;
};
