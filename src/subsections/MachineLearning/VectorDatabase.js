import React from "react";
import Layout, { InlineMath, BlockMath, SyntaxHighlighter } from "../../Layout";

function Vector_Database() {
  return (
    <main>
      <h2>Key Concepts</h2>
    <h3>1. Vector Databases</h3>
    <ul>
        <li>Emerged due to limitations in traditional databases and the rise of AI applications.</li>
        <li>Store and manage vector embeddings which represent data in high-dimensional spaces.</li>
    </ul>
    <h3>2. Vector Embeddings</h3>
    <ul>
        <li>Process of converting data (text, images, audio) into high-dimensional vectors.</li>
        <li>Examples include OpenAI's text-embedding-ada-002 for text and clip-vit-base-patch32 for images.</li>
    </ul>
    <h3>3. Similarity Search</h3>
    <ul>
        <li>Core function of vector databases, finding similar vectors in high-dimensional space.</li>
        <li>Algorithms include K-Means, Product Quantization (PQ), Hierarchical Navigable Small Worlds (HNSW), and Locality Sensitive Hashing (LSH).</li>
    </ul>
    <h3>4. Feature Engineering</h3>
    <ul>
        <li>Process of extracting features from raw data to better represent its underlying patterns.</li>
        <li>Essential for creating effective vector embeddings.</li>
    </ul>

    <h2>Important Algorithms and Methods</h2>
    <h3>1. K-Means Clustering</h3>
    <ul>
        <li>Divides data into k clusters by minimizing within-cluster variance.</li>
        <li>Steps: initialize centroids, assign points to nearest centroid, update centroids, repeat until convergence.</li>
    </ul>
    <h3>2. Product Quantization (PQ)</h3>
    <ul>
        <li>Reduces memory usage by splitting vectors into sub-vectors and quantizing each sub-vector independently.</li>
        <li>Maintains search efficiency by encoding vectors into compact representations.</li>
    </ul>
    <h3>3. Hierarchical Navigable Small Worlds (HNSW)</h3>
    <ul>
        <li>Constructs a multi-layer graph where each layer is a small-world network.</li>
        <li>Provides efficient search by navigating through higher layers (coarse search) down to lower layers (fine search).</li>
    </ul>
    <h3>4. Locality Sensitive Hashing (LSH)</h3>
    <ul>
        <li>Hashes similar vectors into the same bucket with high probability.</li>
        <li>Uses random projections to map high-dimensional data into low-dimensional hash buckets for quick comparison.</li>
    </ul>

    <h2>Similarity Measurements</h2>
    <h3>1. Euclidean Distance</h3>
    <p>
        <code>d(A, B) = √(Σ(A_i - B_i)^2)</code>
    </p>
    <ul>
        <li>Measures the straight-line distance between two points in Euclidean space.</li>
    </ul>
    <h3>2. Cosine Similarity</h3>
    <p>
        <code>cos(θ) = (A · B) / (||A|| ||B||)</code>
    </p>
    <ul>
        <li>Measures the cosine of the angle between two vectors, focusing on direction rather than magnitude.</li>
    </ul>
    <h3>3. Dot Product Similarity</h3>
    <p>
        <code>A · B = Σ(A_i * B_i)</code>
    </p>
    <ul>
        <li>Simple and efficient, combines magnitude and direction of vectors.</li>
    </ul>

    <h2>Filtering</h2>
    <ul>
        <li>Combines vector and metadata indexing to refine search results.</li>
        <li>Can be pre-filtering (before similarity search) or post-filtering (after similarity search).</li>
    </ul>

    <h2>Selection of Vector Databases</h2>
    <ul>
        <li>Factors include distributed architecture, high availability, fault tolerance, access control, and integration with existing APIs and SDKs.</li>
        <li>Examples of vector databases: Chroma, Milvus, Pinecone, Qdrant, Typesense, Weaviate.</li>
    </ul>

    <h2>Conclusion</h2>
    <ul>
        <li>Vector databases are pivotal in AI and machine learning applications, offering efficient similarity search in high-dimensional spaces.</li>
        <li>They require careful selection and implementation based on the specific needs of the application and the characteristics of the data.</li>
    </ul>
    </main>
  );
}

export default Vector_Database;
