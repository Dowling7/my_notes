// src/components/Layout.js

import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div style={{ margin: "20px" }}>
      <header style={{ marginBottom: "20px", borderBottom: "2px solid #ccc" }}>
        <h1>Academic Topics</h1>
        <nav style={{ paddingBottom: "10px", borderBottom: "2px solid black" }}> {/* Added bottom border */}
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/algorithm" style={{ marginRight: "10px" }}>Algorithm</Link>
          <Link to="/physics" style={{ marginRight: "10px" }}>Physics</Link>
          <Link to="/machine-learning">Machine Learning</Link>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer style={{ marginTop: "20px" }}>
        <p>© 2024 Academic Page</p>
      </footer>
    </div>
  );
};

export default Layout;
