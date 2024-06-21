import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Algorithm from "./sections/Algorithm";
import Physics from "./sections/Physics";
import MachineLearning from "./sections/MachineLearning";
import Coding from "./sections/Coding"
import Reference from "./sections/Reference"
import Research from "./sections/Research"

import GradientDescent from "./subsections/Algorithm/GradientDescent"
import MonteCarlo from "./subsections/Algorithm/MonteCarlo"
import PID from "./subsections/Algorithm/PID"

import DAQ from "./subsections/MachineLearning/DAQ"
import VectorDatabase from "./subsections/MachineLearning/VectorDatabase"


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

          <Route path="/GradientDescent" element={<GradientDescent />} />
          <Route path="/MonteCarlo" element={<MonteCarlo />} />
          <Route path="/PID" element={<PID />} />

          <Route path="/DAQ" element={<DAQ />} />
          <Route path="/VectorDatabase" element={<VectorDatabase />} />


          <Route path="/" element={<div>Welcome to the Academic Notes</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
