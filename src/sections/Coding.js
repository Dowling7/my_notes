import React from "react";
import Layout, {SyntaxHighlighter } from "../Layout";
import { MathJax } from 'better-react-mathjax';

import { Link } from "react-router-dom";

function Coding() {
  return (
    
    <div>This is the Coding Techniques page.
      <h2>Calling Async Functions in Threads in Python</h2>
      <p>
        Running asynchronous functions in threads can significantly enhance the efficiency of Python applications, especially those that require concurrent execution without blocking the main execution thread. This technique is particularly useful in scenarios where you need to perform I/O-bound or network-bound tasks asynchronously within a traditionally synchronous Python application.
      </p>
      <p>
        In the provided Python example, we first define a function <code>start_async_loop</code> that sets up and runs an asyncio event loop within a new thread. The <code>async_task</code> function demonstrates an asynchronous task, in this case, a simple operation that mimics a delay using <code>asyncio.sleep</code>. We then define <code>run_async_in_thread</code>, which initializes a new event loop, starts a thread with that loop, and safely schedules the asynchronous task to be run on this separate thread.
      </p>
      <p>
        This setup allows the asynchronous code to run independently of the main program's flow, enabling tasks to be handled in the background without interruption. It's an effective strategy for integrating asynchronous programming patterns into applications that are not inherently asynchronous, thereby improving performance and responsiveness.
      </p>
      <MathJax>{"\\[E = mc^2\\]"}</MathJax> // Block Math
      <MathJax>{"\\(a^2 + b^2 = c^2\\)"}</MathJax> // Inline Math

      <SyntaxHighlighter language="python">
      {`
      import asyncio
      import threading
      def start_async_loop(loop):
      asyncio.set_event_loop(loop)
      loop.run_forever()

      async def async_task():
      print("Task Start")
      await asyncio.sleep(1)
      print("Task Complete")

      def run_async_in_thread():
      new_loop = asyncio.new_event_loop()
      t = threading.Thread(target=start_async_loop, args=(new_loop,))
      t.start()
      asyncio.run_coroutine_threadsafe(async_task(), new_loop)

      Execute the function to run async task in a new thread
      run_async_in_thread()`}
      </SyntaxHighlighter>
    </div>
    
    
  );
}

export default Coding;
