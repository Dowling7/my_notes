import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import { marked } from "marked";

function Robotics() {
  const { slug } = useParams(); // Get the slug from the URL
  const [content, setContent] = useState("");

  useEffect(() => {
    // Load the corresponding Markdown file dynamically
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/content/robotics/${slug || "index"}.md`); // Default to "index.md" if no slug
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
    <Layout>
      <main>
        <div
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </main>
    </Layout>
  );
}

export default Robotics;
