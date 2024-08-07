import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { type PostType } from '@/types/PostType';

const postsDirectory = path.join(process.cwd(), 'posts');

const readPostFile = async (filePath: string): Promise<PostType> => {
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    id: path.basename(filePath, '.md'),
    ...matterResult.data,
  } as PostType;
};

interface GetPostListParams {
  search?: string;
  category?: string;
  tag?: string;
}

const getAllPostList = async (): Promise<PostType[]> => {
  const postFiles = await fs.promises.readdir(postsDirectory);
  const postDataPromises = postFiles.map(postFile => {
    const filePath = path.join(postsDirectory, postFile);
    return readPostFile(filePath);
  });
  return await Promise.all(postDataPromises);
};

export const getPostList = async ({ search, category, tag }: GetPostListParams): Promise<PostType[]> => {
  let postData = await getAllPostList();
  if (search) {
    postData = postData.filter(post =>
      post.title.toLowerCase().replace(/\s+/g, '').includes(search.toLowerCase().replace(/\s+/g, ''))
    );
  }

  if (category && category !== 'All') {
    const lowerCaseCategory = category.toLowerCase();
    postData = postData.filter(post => post?.category?.toLocaleLowerCase() === lowerCaseCategory);
  }
  if (tag) {
    postData = postData.filter(post => post?.tags?.includes(tag));
  }

  const orderByDate = postData.sort((a, b) => (a.date > b.date ? -1 : 1));
  return orderByDate;
};

export const getPostDetail = async (id: string): Promise<PostType> => {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);
  const { next, previous } = await getNextAndPreviousPost(id);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
    next,
    previous,
  } as PostType;
};

type PostCategories = {
  category: string;
  count: number;
};

export const getPostCategories = async (): Promise<PostCategories[]> => {
  const posts = await getAllPostList();
  const categoryCountMap: { [key: string]: number } = posts.reduce(
    (acc, post) => {
      acc[post.category] = (acc[post.category] || 0) + 1;
      return acc;
    },
    {} as { [key: string]: number }
  );
  const order = ['FE', 'BE', 'Database', 'CS'];
  const sortedCategoriesWithCount = Object.keys(categoryCountMap)
    .sort((a, b) => order.indexOf(a) - order.indexOf(b))
    .map(category => ({
      category,
      count: categoryCountMap[category],
    }));

  return sortedCategoriesWithCount;
};

export const getPostTags = async (category?: string): Promise<string[]> => {
  const posts = await getAllPostList();
  const categoryPosts = posts.filter(post => post?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase());
  const tags = categoryPosts.flatMap(post => post.tags);
  const sortedTags = tags.sort();
  return Array.from(new Set(sortedTags));
};

export const getNextAndPreviousPost = async (
  id: string
): Promise<{ next: PostType | null; previous: PostType | null }> => {
  const postData = await getAllPostList();
  const orderByDate = postData.sort((a, b) => (a.date > b.date ? -1 : 1));
  const currentIndex = orderByDate.findIndex(post => post.id === id);
  const next = orderByDate[currentIndex - 1] || null;
  const previous = orderByDate[currentIndex + 1] || null;
  return { next, previous };
};

export const getPinnedPosts = async (): Promise<PostType[]> => {
  const postData = await getAllPostList();
  return postData.filter(post => post.pinned);
};
