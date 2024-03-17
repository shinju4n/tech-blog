'use client';
import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeCodeTitles from 'rehype-code-titles';
import { materialDark, materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import toast from 'react-hot-toast';

import Typography from '@/components/ui/typography';
import ImageDialog from '@/components/ImageDialog';
import { CopyIcon } from '@/components/Icons';

interface MarkdownRenderProps {
  markdown: string;
}
const MarkdownRender: FC<MarkdownRenderProps> = ({ markdown }) => {
  const { theme } = useTheme();
  const handleCopyClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success('클립보드에 복사되었습니다.', {
      position: 'bottom-center',
    });
  };
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeCodeTitles]}
      components={{
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <div className="relative">
              <div
                className="absolute top-4 right-4 z-10 p-1 fill-neutral-50/30 hover:fill-neutral-50 rounded-md cursor-pointer transition-colors"
                onClick={() => handleCopyClipBoard(String(children).replace(/\n$/, ''))}
              >
                <CopyIcon size={20} className="font-extrabold" />
              </div>
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                style={theme === 'light' ? materialOceanic : materialDark}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code {...props} className="bg-neutral-600 rounded-sm p-1">
              <Typography size="strong" className="text-white">
                {children}
              </Typography>
            </code>
          );
        },
        img: image => (
          <span className="flex justify-center items-center mb-6 bg-foreground/5">
            <ImageDialog src={image.src || ''} alt={image.alt || ''}>
              <Image
                src={image.src || ''}
                alt={image.alt || ''}
                width={500}
                height={300}
                loading="lazy"
                sizes="(max-width: 768px) 50vw,(max-width: 1024px) 100vw"
              />
            </ImageDialog>
          </span>
        ),
        h1: ({ children }) => <Typography size="h1">{children}</Typography>,
        h2: ({ children }) => <Typography size="h2">{children}</Typography>,
        h3: ({ children }) => <Typography size="h3">{children}</Typography>,
        h4: ({ children }) => <Typography size="h4">{children}</Typography>,
        p: ({ children }) => (
          <Typography size="p" className="whitespace-pre-line">
            {children}
          </Typography>
        ),
        strong: ({ children }) => <Typography size="strong">{children}</Typography>,
        ol: ({ children }) => <ol className="pl-6 list-decimal">{children}</ol>,
        ul: ({ children }) => <ul className="pl-6 list-disc">{children}</ul>,
        li: props => {
          return (
            <li>
              <Typography size="p" className="mb-0">
                {props.children}
              </Typography>
            </li>
          );
        },
        a: ({ href }) => {
          return (
            <Link href={href ?? ''} target="_blank" className="text-blue-500 whitespace-pre-wrap">
              [링크]
            </Link>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
