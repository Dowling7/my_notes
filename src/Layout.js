import React from "react";
import { Link } from "react-router-dom";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import 'prismjs/themes/prism-okaidia.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Layout = ({ children }) => {
  return (
    <div style={{ margin: "20px" }}>
      <header style={{ marginBottom: "20px", borderBottom: "2px solid #ccc" }}>
        <h1>Academic Topics</h1>
        <nav style={{ paddingBottom: "10px", borderBottom: "2px solid black" }}> {/* Added bottom border */}
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/research" style={{ marginRight: "10px" }}>Research</Link>
          <Link to="/algorithm" style={{ marginRight: "10px" }}>Algorithm</Link>
          <Link to="/physics" style={{ marginRight: "10px" }}>Physics</Link>
          <Link to="/machine-learning"style={{ marginRight: "10px" }}>Data Science and ML</Link>  
          <Link to="/Coding"style={{ marginRight: "10px" }}>Coding Techniques</Link>
          <Link to="/Reference"style={{ marginRight: "10px" }}>Reference</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer style={{ marginTop: "20px" }}>
        <p>© 2024 Dowling Wong. All rights reserved</p>
      </footer>
    </div>
  );
};

export { InlineMath, BlockMath, SyntaxHighlighter };
export default Layout;
