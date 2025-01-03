// MarkdownPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";

const MarkdownPage = () => {
  const { slug } = useParams(); // Get the dynamic part of the URL (e.g., "about")
  const [content, setContent] = useState("");

  useEffect(() => {
    // Load the corresponding Markdown file
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/content/${slug}.md`);
        if (!response.ok) {
          setContent("# Page Not Found\n\nThe requested page does not exist.");
          return;
        }
        const markdown = await response.text();
        setContent(markdown);
      } catch (error) {
        setContent("# Error\n\nFailed to load the page.");
      }
    };

    fetchMarkdown();
  }, [slug]);

  return (
    <div style={{ padding: "20px" }}>
      <div
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      />
    </div>
  );
};

export default MarkdownPage;
