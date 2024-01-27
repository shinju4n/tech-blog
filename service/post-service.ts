import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostType } from "@/types/PostType";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostList = async (category?: string): Promise<PostType[]> => {
  const postFiles = fs.readdirSync(postsDirectory);
  const postData = postFiles.map((postFile, i) => {
    const fileName = postFile.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName + ".md");
    console.log(filePath);
    const fileContents = fs.readFileSync(filePath, "utf8");
    console.log(fileContents);
    const matterResult = matter(fileContents) as GrayMatterFile<string>;
    return {
      id: fileName,
      ...matterResult.data,
    } as PostType;
  });
  return postData;
};

export const getPost = async (id: string): Promise<PostType> => {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  console.log(matterResult);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostType;
};
