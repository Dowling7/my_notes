import React from 'react';
import Layout, { InlineMath, BlockMath, SyntaxHighlighter } from '../../Layout';

const Nutshell: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Nutshell review for basic quamtum mechanics</h1>
        
        <section>
          <h2>Dirac Equation</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>
          <BlockMath math={`P(X_{n+1} = x | X_n = x_n, X_{n-1} = x_{n-1}, ..., X_0 = x_0) = P(X_{n+1} = x | X_n = x_n)`} />
          
          <h2>Schrödinger Equation</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>
          <BlockMath math={`P(X_{n+1} = x | X_n = x_n, X_{n-1} = x_{n-1}, ..., X_0 = x_0) = P(X_{n+1} = x | X_n = x_n)`} />
          
          <h2>First and Second Quantization</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>

          <h2>Dispersion relation</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>

          <h2>Klein Gordan Equation/Coefficients</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>

          <h2>Random Matrix Theory</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>

          <h2>Heisenberg eom, picture</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>
          
        </section>
        
      </div>
    </Layout>
  );
};

export default Nutshell;
