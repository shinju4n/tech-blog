"use client";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeCodeTitles from "rehype-code-titles";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface MarkdownRenderProps {
  markdown: string;
}
const MarkdownRender: FC<MarkdownRenderProps> = ({ markdown }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeCodeTitles]}
      components={{
        code: ({ node, className, children, ...props }) => {
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
          <Image
            src={image.src || ""}
            alt={image.alt || ""}
            width={500}
            height={300}
          />
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRender;
