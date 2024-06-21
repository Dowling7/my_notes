import React from "react";
import Layout, { InlineMath, BlockMath, SyntaxHighlighter } from "../Layout";
import { Link } from "react-router-dom";


import PID from "../subsections/Algorithm/PID"
import MonteCarlo from "../subsections/Algorithm/MonteCarlo"

const content = (
    <main>
      <h2>Kmeans by SKlearn</h2>
      <BlockMath math="c = \\pm\\sqrt{a^2 + b^2}" />
      <SyntaxHighlighter language="python">
        {`import numpy as np
          from sklearn.cluster import KMeans
          X = np.array([[1, 2], [1, 4], [1, 0],
                        [10, 2], [10, 4], [10, 0]])
          kmeans = KMeans(n_clusters=2, random_state=0).fit(X)
          print(kmeans.labels_)
          `}
      </SyntaxHighlighter>
      <hr />
      <h2>MonteCarlo</h2>
      <Link to="/MonteCarlo" style={{ marginRight: "10px" }}>MonteCarlo</Link>
      <hr />
      <h2>DarkQuest</h2>
      <SyntaxHighlighter language="cpp">
        {`#include <iostream>
          int main() {
            std::cout << "Hello, World!";
            return 0;
          }
          `}
      </SyntaxHighlighter>
      <hr />
      <h2>Support Vector Machine by SKlearn</h2>
      <hr />
      <h2>PID control</h2>
      <Link to="/PID" style={{ marginRight: "10px" }}>PID control</Link>

    </main>
);


function Algorithm() {
  return content;
}

export default Algorithm;
