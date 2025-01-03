import React from "react";
import { Link } from "react-router-dom";
import 'prismjs/themes/prism-okaidia.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Layout = ({ children }) => {
  const mathJaxConfig = {
    loader: { load: ["input/asciimath", "output/chtml"] },
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div style={{ margin: "20px" }}>
        <header style={{ marginBottom: "20px", borderBottom: "2px solid #ccc" }}>
          <h1>Academic Topics</h1>
          <nav style={{ paddingBottom: "10px", borderBottom: "2px solid black" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/research" style={{ marginRight: "10px" }}>Research</Link>
            <Link to="/robotics" style={{ marginRight: "10px" }}>Robotics</Link>
            <Link to="/machine-learning" style={{ marginRight: "10px" }}>Data Science and ML</Link>
            <Link to="/Coding" style={{ marginRight: "10px" }}>Coding Techniques</Link>
            <Link to="/Reference" style={{ marginRight: "10px" }}>Reference</Link>
          </nav>
        </header>
        <main>
          <MathJax>
            {children}
          </MathJax>
        </main>
        <footer style={{ marginTop: "20px" }}>
          <p>© 2024 Dowling Wong. All rights reserved</p>
        </footer>
      </div>
    </MathJaxContext>
  );
};

export { SyntaxHighlighter };
export default Layout;
