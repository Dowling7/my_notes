import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Algorithm from "./pages/Algorithm";
import Physics from "./pages/Physics";
import MachineLearning from "./pages/MachineLearning";
import Coding from "./pages/Coding"
import Reference from "./pages/Reference"
import Research from "./pages/Research"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/research" element={<Research />} />
          <Route path="/algorithm" element={<Algorithm />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/" element={<div>Welcome to the Academic Page</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
