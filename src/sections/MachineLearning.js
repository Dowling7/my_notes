import React from "react";
import Layout from "../Layout";
import { Link } from 'react-router-dom';


import DAQ from "../subsections/MachineLearning/DAQ"
import VectorDatabase from "../subsections/MachineLearning/VectorDatabase"


function MachineLearning() {
  return (
    
    <div>
    <h1>Data Science and Machine Learning</h1>
    <main>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Regression</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Clustering</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Descision Tree</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Random Forest</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Neural Network</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Naive Bayes classifier</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Support Vector Machine</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <h2>Data Acquision</h2>
        <ul>
          <li>
          <Link to="/DAQ" style={{ marginRight: "10px" }}><strong>DAQ</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        <h2>VectorDatabase</h2>
        <ul>
          <li>
          <Link to="/VectorDatabase" style={{ marginRight: "10px" }}><strong>Vector Database</strong> </Link> Comprehansive introduction for C++.
          </li>
        </ul>
        
    </main>
    </div>
    
  );
}

export default MachineLearning;
