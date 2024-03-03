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
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents) as GrayMatterFile<string>;
    return {
      id: fileName,
      ...matterResult.data,
    } as PostType;
  });
  const orderByDate = postData.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });
  return orderByDate;
};

export const getPost = async (id: string): Promise<PostType> => {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostType;
};
