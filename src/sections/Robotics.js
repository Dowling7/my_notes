import React from "react";
import Layout from "../Layout";
import MarkdownRenderer from "../MarkdownRenderer";

function Robotics() {
  return (
    <Layout>
      <main>
        <MarkdownRenderer filePath="/Robotics.md" />
      </main>
    </Layout>
  );
}

export default Robotics;
