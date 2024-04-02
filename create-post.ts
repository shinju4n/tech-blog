import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';

const prompt = (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
};

const createMarkdownFile = (filename: string, content: string): void => {
  const postsDirectory = path.join(process.cwd(), 'posts', filename);
  fs.writeFileSync(postsDirectory, content);
};

const main = async (): Promise<void> => {
  const title: string = await prompt('제목을 입력하세요: ');
  const category: string = await prompt('카테고리를 입력하세요: ');
  const date = await prompt('날짜를 입력하세요 ex) 2024-03-31 : ');
  const tags = await prompt('태그를 입력하세요: ');
  const content: string = `
  ---
  title: "${title}"
  date: "${date || new Date().toISOString().split('T')[0]}"
  category: "${category}"
  tags: [${tags}]
  summary: 
  pinned:
  thumbnailUrl:
  ---
`;
  createMarkdownFile(`${title.replace(/\s+/g, '-')}.md`, content);
};

main();
