import React from "react";
import Layout from "../Layout";
import { Link } from 'react-router-dom';


function Reference() {
  return (
    <div>
    <h1>References for the note pages</h1>
    <main>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Coding Techniques</h2>
        <ul>
          <li>
            <Link to="https://changkun.de/modern-cpp/zh-cn/01-intro/"><strong>Modern C++:</strong> </Link> Comprehansive introduction for C++.
          </li>
          <li>
            <Link to="https://changkun.de/modern-cpp/en-us/00-preface/"><strong>C-extension in Python:</strong> </Link> From Python cookbook, Chinese translation hosted on github.
          </li>
          <li>
            <Link to="https://docs.python.org/zh-cn/3/library/asyncio-task.html#coroutines"><strong>Coroutines and Tasks:</strong> </Link> Official Python documentation on coroutines and threads.
          </li>
          <li>
            <Link to="https://cppyy.readthedocs.io/en/latest/"><strong>cppyy:</strong> </Link> Automatic Python-C++ bindings.
          </li>
          <li>
            <Link to="https://rpucella.net/courses/webdev-sp24/"><strong>Full-stack web development:</strong> </Link> React, flask, and WebAssembly.
          </li>
          <li>
            <Link to="https://docs.python.org/3/c-api/memory.html"><strong>Python Memory Management:</strong> </Link> Automatic Python-C++ bindings.
          </li>
        </ul>
        <hr /> {/* Horizontal line separating content and references */}
        <h2>Data Science, Statistics and Machine Learning</h2>
        <ul>
          <li>
            <Link to="https://jduarte.physics.ucsd.edu/phys139_239/README.html"><strong>Machine Learning in Physics:</strong> </Link> UCSD PHYS 139/239, By Javier Duart.
          </li>
          <li>
            <Link to="https://theoryandpractice.org/stats-ds-book/intro.html"><strong>Statistics and Data Science:</strong> </Link> NYU Physics titled Statistics and Data Science. Interactive Jupyter book.
          </li>
          <li>
            <Link to="https://github.com/mit-physics-data/lectures"><strong>8.316 Data Science in Physics:</strong> </Link> @MIT, by Phil Harris.
          </li>
          <li>
            <Link to="https://jduarte.physics.ucsd.edu/capstone-particle-physics-domain/README.html"><strong>Particle Physics and Machine Learning:</strong> </Link> Developed by Javier Duarte,  Frank Würthwein.
          </li>
          <li style={{ marginBottom: "10px"}}>
            <Link to="https://jduarte.physics.ucsd.edu/iaifi-summer-school/intro.html"><strong>IAIFI Summer School Tutorials</strong> </Link> Model compression, ML in particle physics. By Javier Duart, Dylan Rankins, Patrick McCormack.
          </li>
          <li>
            <Link to="https://www.nbi.dk/~koskinen/Teaching/AdvancedMethodsInAppliedStatistics2018/AdvancedMethodsAppliedStatistics2018.html"><strong>Advanced Methods in Applied Statistics 2018:
</strong> </Link> BDTs, MultiNest bayesian, Markov Chain Monte Carlo, Likelihood.
          </li>
          <li>
            <Link to="https://github.com/jeffheaton/t81_558_deep_learning"><strong>Keras-Applications of Deep Neural Networks @WUSTL:</strong> </Link> React, flask, and WebAssembly.
          </li>
          <li>
            <Link to="https://guangzhengli.com/blog/zh/vector-database/"><strong>Vector Database:</strong> </Link> Vector store, similarity search/measurement, filtering.
          </li>
          <li>
            <Link to="https://github.com/pgvector/pgvector"><strong>PGVector:</strong> </Link> Open-source vector similarity search for Postgres.
          </li>
          <li>
            <Link to="https://github.com/Denis2054/Transformers-for-NLP-and-Computer-Vision-3rd-Edition"><strong>Transformers for Natural Language Processing and Computer Vision</strong> </Link> Take Generative AI and LLMs to the next level with Hugging Face, Google Vertex AI, ChatGPT, GPT-4V, and DALL-E 3 3rd Edition
          </li>
          <li>
            <Link to="https://github.com/MalayAgr/generative-ai-with-llms-notes?tab=readme-ov-file"><strong>Generative AI with LLM, Notes</strong> </Link> Notes for the course Generative AI With Large Language Models.
          </li>
        </ul>
      </main>
      <footer style={{ marginTop: "20px" }}>
        <p>© 2024 Dowling Wong. All rights reserved.</p>
      </footer>
    </div>
    
  );
}

export default Reference;
