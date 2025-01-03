import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";

import Robotics from "./sections/Robotics";
import MachineLearning from "./sections/MachineLearning";
import Coding from "./sections/Coding";
import Reference from "./sections/Reference";
import Research from "./sections/Research";

import DAQ from "./subsections/MachineLearning/DAQ";
import VectorDatabase from "./subsections/MachineLearning/VectorDatabase";

function App() {
  return (
    <Router>
      <Layout>
        <Routes >
          {/* Static sections */}
          <Route path="/research" element={<Research />} />
          <Route path="/machine-learning" element={<MachineLearning />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/reference" element={<Reference />} />

          {/* Robotics section with dynamic Markdown rendering */}
          <Route path="/robotics/:slug" element={<Robotics />} />
          <Route path="/robotics" element={<Robotics />} /> {/* Default Robotics route */}

          {/* Subsections under Machine Learning */}
          <Route path="/DAQ" element={<DAQ />} />
          <Route path="/VectorDatabase" element={<VectorDatabase />} />

          {/* Default homepage with links to external resources */}
          <Route
            path="/"
            element={
              <div>
                Welcome to the Academic Notes
                <br />
                <a href="ref/index.html" target="_blank" rel="noopener noreferrer">
                  Redirect to Dowling's library of books and papers
                </a>
                <br />
                <a href="py501/index.html" target="_blank" rel="noopener noreferrer">
                  Redirect to mirror of py501 mathematical physics
                </a>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
