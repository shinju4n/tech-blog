export type PostType = {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  isPinned: boolean;
  thumbnailUrl: string;
  content: string;
  next?: PostType;
  previous?: PostType;
};
