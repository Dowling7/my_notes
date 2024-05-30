import React from "react";
import Layout from "../Layout";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import 'prismjs/themes/prism-okaidia.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function Algorithm() {
  return (
    <main>
      <hr />
      <h2>Kmeans implementation at SKlearn</h2>
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
      <h2>Silicon Modules at CMS</h2>
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
    </main>
  );
}

export default Algorithm;
