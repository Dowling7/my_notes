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
      <h2>Gradient descent</h2>
      <BlockMath math="\\mathbf{x}_{\\text{new}} = \\mathbf{x} - \\eta \\nabla f(\\mathbf{x})" />
      <SyntaxHighlighter language="python">
        {`import numpy as np
          def gradient_descent(x, grad, eta=0.01, n_iter=100):
            for _ in range(n_iter):
              x -= eta * grad(x)
            return x
          `}
      </SyntaxHighlighter>
      <hr />
      <h2>Newton's Method for Optimization</h2>
      <p>
        Newton's method, also known as the Newton-Raphson method, is an advanced optimization technique that uses second-order information to find the minima of a function more efficiently compared to first-order methods like gradient descent. This method not only considers the gradient (first derivatives) but also the curvature of the function via the Hessian (second derivatives), allowing for adaptive step sizes and faster convergence.
      </p>
      <p>
        Here’s how Newton's step works in the context of optimization:
        <ol>
          <li><strong>Objective Function</strong>: You have a function you want to minimize.</li>
          <li><strong>Gradient and Hessian</strong>: Compute the gradient and the Hessian matrix.</li>
          <li><strong>Newton's Update Rule</strong>: Update the parameters using both the gradient and the inverse of the Hessian.</li>
          <li><strong>Convergence</strong>: Repeat until the change is small, indicating proximity to a minimum.</li>
        </ol>
      </p>
      <BlockMath math="\\mathbf{x}_{\\text{new}} = \\mathbf{x} - H(\\mathbf{x})^{-1} \\nabla f(\\mathbf{x})" />
      <SyntaxHighlighter language="python">
        {`def newtons_method(f, df, ddf, x0, tol=1e-5, max_iter=50):
            x = x0
            for _ in range(max_iter):
                H_inv = np.linalg.inv(ddf(x))
                x_new = x - H_inv @ df(x)
                if np.linalg.norm(x_new - x) < tol:
                    break
                x = x_new
            return x
          `}
      </SyntaxHighlighter>
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
    </main>
  );
}

export default Algorithm;
