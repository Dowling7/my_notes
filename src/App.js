// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Algorithm from "./pages/Algorithm";
import Physics from "./pages/Physics";
import MachineLearning from "./pages/MachineLearning";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/" element={<div>Welcome to the Academic Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
