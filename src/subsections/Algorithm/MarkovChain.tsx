import React from 'react';
import Layout, { InlineMath, BlockMath, SyntaxHighlighter } from '../../Layout';

const MyPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>Markov Chains and Markov Chain Monte Carlo (MCMC)</h1>
        
        <section>
          <h2>Markov Chain</h2>
          <p>
            A Markov Chain is a stochastic process that satisfies the Markov property, which states that the future state depends only on the current state and not on the sequence of events that preceded it. Mathematically, it can be defined as:
          </p>
          <BlockMath math={`P(X_{n+1} = x | X_n = x_n, X_{n-1} = x_{n-1}, ..., X_0 = x_0) = P(X_{n+1} = x | X_n = x_n)`} />
          <p>
            Here, <InlineMath math={`X_n`} /> represents the state at step <InlineMath math={`n`} />, and the above equation shows that the probability of moving to the next state <InlineMath math={`X_{n+1}`} /> depends only on the current state <InlineMath math={`X_n`} />.
          </p>
          <h3>Python Code Example</h3>
          <SyntaxHighlighter language="python">
            {`
import numpy as np

# Transition matrix
P = np.array([[0.5, 0.5],
              [0.2, 0.8]])

# Initial state distribution
state = np.array([1, 0])

# Number of steps
n_steps = 10

# Simulate the Markov chain
states = [state]
for _ in range(n_steps):
    state = np.dot(state, P)
    states.append(state)

print("States after each step:")
for i, s in enumerate(states):
    print(f"Step {i}: {s}")
            `}
          </SyntaxHighlighter>
        </section>
        
        <section>
          <h2>Markov Chain Monte Carlo (MCMC)</h2>
          <p>
            Markov Chain Monte Carlo (MCMC) methods are a class of algorithms that sample from a probability distribution based on constructing a Markov Chain that has the desired distribution as its equilibrium distribution. One commonly used MCMC method is the Metropolis-Hastings algorithm.
          </p>
          <h3>Metropolis-Hastings Algorithm</h3>
          <p>
            The Metropolis-Hastings algorithm generates a sequence of samples from a probability distribution for which direct sampling is difficult. The algorithm involves the following steps:
          </p>
          <ol>
            <li>Start with an initial state.</li>
            <li>Propose a new state based on a proposal distribution.</li>
            <li>Accept or reject the new state based on an acceptance criterion that ensures the samples represent the desired distribution.</li>
          </ol>
          <h3>Python Code Example</h3>
          <SyntaxHighlighter language="python">
            {`
import numpy as np

def target_distribution(x):
    return np.exp(-0.5 * x**2)  # Standard normal distribution

def metropolis_hastings(n_samples, proposal_std):
    samples = []
    current_sample = 0
    for _ in range(n_samples):
        proposed_sample = np.random.normal(current_sample, proposal_std)
        acceptance_ratio = target_distribution(proposed_sample) / target_distribution(current_sample)
        if np.random.rand() < acceptance_ratio:
            current_sample = proposed_sample
        samples.append(current_sample)
    return samples

n_samples = 10000
proposal_std = 1.0
samples = metropolis_hastings(n_samples, proposal_std)

print("Generated samples:")
print(samples[:10])  # Print first 10 samples
            `}
          </SyntaxHighlighter>
        </section>
      </div>
    </Layout>
  );
};

export default MyPage;
