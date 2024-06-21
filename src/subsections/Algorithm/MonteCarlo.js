import React from "react";
import Layout, { InlineMath, BlockMath, SyntaxHighlighter } from "../../Layout";

function Monte_Carlo() {
  return (
    <main>
      Monte Carlo methods are a class of computational algorithms that rely on repeated random sampling to obtain numerical results. The core principle behind these methods is to use randomness to solve problems that might be deterministic in principle. They are especially useful for problems involving high-dimensional integrals, optimization, and probabilistic analysis.
        <b>General Mathematical Definition:</b>
        Let X be a random variable with a known probability distribution P. Monte Carlo methods estimate the expected value or other properties of X by performing the following steps:
        <ol>
            <li><b>Random Sampling:</b> Generate a large number of independent and identically distributed (i.i.d.) samples X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub> from the probability distribution P.</li>
            <li><b>Function Evaluation:</b> Evaluate the function of interest f(X) for each sample to obtain f(X<sub>1</sub>), f(X<sub>2</sub>), ..., f(X<sub>n</sub>).</li>
            <li><b>Averaging:</b> Compute the average of the function values to estimate the expected value E[f(X)]:
            <div>
                E[f(X)] = (1/n) &sum;<sub>i=1</sub><sup>n</sup> f(X<sub>i</sub>)
            </div></li>
        </ol>

        <b>Example: Estimating an Integral</b>
        Monte Carlo methods are often used to estimate the value of integrals, especially in higher dimensions. Consider the integral of a function f(x) over a domain D:
        <div >
            I = &int;<sub>D</sub> f(x) dx
        </div>
        The Monte Carlo estimate of this integral is obtained as follows:
        <ol>
            <li><b>Uniform Sampling:</b> Generate n random samples X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub> uniformly distributed over the domain D.</li>
            <li><b>Function Evaluation:</b> Evaluate the function f at each sample point X<sub>i</sub>.</li>
            <li><b>Estimate the Integral:</b>
            <div >
                &hat;I = (Volume of D / n) &sum;<sub>i=1</sub><sup>n</sup> f(X<sub>i</sub>)
            </div></li>
        </ol>
        Here, the volume of D is a scaling factor to account for the domain over which the function is integrated.

        <b>Convergence and Error</b>
        The law of large numbers ensures that the Monte Carlo estimate converges to the true expected value or integral as the number of samples n increases:
        <div >
            &hat;E[f(X)] &rarr; E[f(X)] as n &rarr; &infin;
        </div>
        The central limit theorem provides a measure of the error in the Monte Carlo estimate, indicating that the error decreases as O(1/&radic;n). This means that the standard deviation of the estimate decreases with the square root of the number of samples.

        <b>Key Properties</b>
        <ol>
            <li><b>Probabilistic Convergence:</b> The accuracy of the Monte Carlo estimate improves with an increasing number of samples.</li>
            <li><b>Dimensional Independence:</b> Monte Carlo methods are less affected by the dimensionality of the problem compared to deterministic methods.</li>
            <li><b>Versatility:</b> They can be applied to a wide range of problems, including those with complex geometries and constraints.</li>
        </ol>

        <b>Applications</b>
        <ul>
            <li><b>Physics:</b> Simulation of particle interactions and statistical mechanics.</li>
            <li><b>Finance:</b> Option pricing and risk analysis.</li>
            <li><b>Engineering:</b> Reliability analysis and optimization.</li>
            <li><b>Computer Graphics:</b> Rendering and global illumination.</li>
        </ul>

        <b>Summary</b>
        Monte Carlo methods use random sampling to estimate mathematical quantities that are otherwise difficult to compute deterministically. By leveraging the properties of random variables and statistical analysis, these methods provide powerful tools for numerical integration, optimization, and probabilistic modeling across various scientific and engineering disciplines.
    </main>
  );
}

export default Monte_Carlo;
