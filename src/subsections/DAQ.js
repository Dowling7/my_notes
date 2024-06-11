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
      <h2>Generative Adversarial Network (GAN) Example</h2>
      <p>Generative Adversarial Networks (GANs) consist of two models, a generator and a discriminator, which are trained simultaneously in a zero-sum game framework. The generator's role is to create data that looks as close as possible to real data, while the discriminator tries to distinguish between real and generated data. Here are the key steps involved:</p>
      <ul>
        <li><strong>Select Data:</strong> Choose the type of data you want the GAN to generate. This could be images, text, music, etc.</li>
        <li><strong>Prepare Models:</strong> Design and initialize the generator and discriminator models with appropriate architectures.</li>
        <li><strong>Train Models:</strong> Alternately train the discriminator and generator. The discriminator learns to differentiate real data from fake, and the generator learns to fool the discriminator.</li>
        <li><strong>Evaluate:</strong> Regularly evaluate the generator's output and adjust parameters or model architecture as needed.</li>
        <li><strong>Generate Data:</strong> Once trained, use the generator to create data. This data can be used for various applications such as art, music, or as training data for other models.</li>
      </ul>
      <SyntaxHighlighter language="python">
      {`import tensorflow as tf
      from tensorflow.keras import layers

      # Generator Model
      def create_generator():
          model = tf.keras.Sequential([
              layers.Dense(256, use_bias=False, input_shape=(100,)),
              layers.BatchNormalization(),
              layers.LeakyReLU(),
              layers.Dense(512),
              layers.BatchNormalization(),
              layers.LeakyReLU(),
              layers.Dense(784, activation='tanh'),
              layers.Reshape((28, 28, 1))
          ])
          return model

      # Discriminator Model
      def create_discriminator():
          model = tf.keras.Sequential([
              layers.Flatten(input_shape=(28, 28, 1)),
              layers.Dense(512),
              layers.LeakyReLU(),
              layers.Dropout(0.3),
              layers.Dense(1)
          ])
          return model

      # Compile and set up the GAN
      generator = create_generator()
      discriminator = create_discriminator()

      discriminator.compile(optimizer='adam', loss='binary_crossentropy')
      # The generator is trained through the combined model where it tries to deceive the discriminator
      combined = tf.keras.Sequential([generator, discriminator])
      combined.compile(optimizer='adam', loss='binary_crossentropy')

      def train(generator, discriminator, combined, epochs, batch_size):
          for epoch in range(epochs):
              # Here, you would include the steps to train your models.
              # This typically involves generating noise, creating fake images from the noise using the generator,
              # passing real and fake images to the discriminator, and adjusting the weights based on their performance.
              pass

      # Example of calling the train function
      # train(generator, discriminator, combined, epochs=50, batch_size=32)`}
</SyntaxHighlighter>
<SyntaxHighlighter language="python">
{`import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    # Send a HTTP request to the specified URL
    response = requests.get(url)
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the content of the request with BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        # Extract elements as needed, here we take an example of extracting all paragraph tags
        paragraphs = soup.find_all('p')
        for p in paragraphs:
            print(p.text)
    else:
        print("Failed to retrieve the website")

# Example URL to scrape
scrape_website('http://example.com')`}
</SyntaxHighlighter>


      <hr />
    </main>
  );
}

export default Algorithm;
