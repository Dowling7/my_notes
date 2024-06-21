import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Algorithm from "./sections/Algorithm";
import Physics from "./sections/Physics";
import MachineLearning from "./sections/MachineLearning";
import Coding from "./sections/Coding"
import Reference from "./sections/Reference"
import Research from "./sections/Research"


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
          <Route path="/" element={<div>Welcome to the Academic Notes</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
