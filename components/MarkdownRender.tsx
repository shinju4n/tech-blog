"use client";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeCodeTitles from "rehype-code-titles";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Typography from "./ui/typography";
import Link from "next/link";

interface MarkdownRenderProps {
  markdown: string;
}
const MarkdownRender: FC<MarkdownRenderProps> = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeCodeTitles]}
      components={{
        code: ({ className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <>
              <SyntaxHighlighter
                language={match[1]}
                PreTag="div"
                style={materialDark}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </>
          ) : (
            <code {...props}>{children}</code>
          );
        },
        img: (image) => (
          <span className="flex justify-center items-center mb-6 bg-foreground/5">
            <Image
              src={image.src || ""}
              alt={image.alt || ""}
              width={500}
              height={300}
            />
          </span>
        ),
        h1: ({ children }) => <Typography size="h1">{children}</Typography>,
        h2: ({ children }) => <Typography size="h2">{children}</Typography>,
        h3: ({ children }) => <Typography size="h3">{children}</Typography>,
        h4: ({ children }) => <Typography size="h4">{children}</Typography>,
        p: ({ children }) => <Typography size="p">{children}</Typography>,
        strong: ({ children }) => (
          <Typography size="strong">{children}</Typography>
        ),
        a: ({ children, href }) => {
          console.log;
          return (
            <Link href={href ?? ""} target="_blank" className="text-blue-500">
              [{children}]
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
