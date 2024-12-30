import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter"; // Parses frontmatter
import Layout from "./Layout";

const MarkdownPage = ({ markdownFile }) => {
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(markdownFile)
      .then((res) => res.text())
      .then((text) => {
        const { content, data } = matter(text);
        setContent(content);
        setMeta(data);
      });
  }, [markdownFile]);

  return (
    <Layout>
      <div>
        <h1>{meta.title || "Untitled Page"}</h1>
        {meta.toc_sticky && <div>(Table of Contents goes here)</div>}
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </Layout>
  );
};

export default MarkdownPage;
