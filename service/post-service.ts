import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type PostType } from "@/types/PostType";

const postsDirectory = path.join(process.cwd(), "posts");

const readPostFile = async (filePath: string): Promise<PostType> => {
  const fileContents = await fs.promises.readFile(filePath, "utf8");
  const matterResult = matter(fileContents);
  return {
    id: path.basename(filePath, ".md"),
    ...matterResult.data,
  } as PostType;
};

export const getPostList = async (
  category?: string,
  tag?: string
): Promise<PostType[]> => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const postFiles = await fs.promises.readdir(postsDirectory);
  const postDataPromises = postFiles.map((postFile) => {
    const filePath = path.join(postsDirectory, postFile);
    return readPostFile(filePath);
  });
  let postData = await Promise.all(postDataPromises);

  if (category) {
    const lowerCaseCategory = category.toLowerCase();
    postData = postData.filter(
      (post) => post.category.toLocaleLowerCase() === lowerCaseCategory
    );
  }
  if (tag) {
    const lowerCaseTag = tag.toLowerCase();
    postData = postData.filter((post) => post.tags.includes(lowerCaseTag));
  }

  const orderByDate = postData.sort((a, b) => (a.date > b.date ? -1 : 1));
  return orderByDate;
};

export const getPostDetail = async (id: string): Promise<PostType> => {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  } as PostType;
};

export const getPostCategories = async (): Promise<string[]> => {
  const posts = await getPostList();
  const categories = posts.map((post) => post.category);
  const sortedCategories = categories.sort();
  return Array.from(new Set(sortedCategories));
};

export const getPostTags = async (): Promise<string[]> => {
  const posts = await getPostList();
  const tags = posts.flatMap((post) => post.category);
  const sortedTags = tags.sort();
  return Array.from(new Set(sortedTags));
};
