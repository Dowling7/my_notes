import React, { useState } from 'react';
import Layout from './Layout';
import JupyterNotebookViewer from './JupyterNotebookViewer';

const MyPage: React.FC = () => {
  const [notebookUrl, setNotebookUrl] = useState('https://path.to/your/first_notebook.ipynb');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNotebookUrl(event.target.value);
  };

  return (
    <Layout>
      <div>
        <h1>Jupyter Notebook Viewer</h1>
        <select onChange={handleSelectChange} value={notebookUrl}>
          <option value="https://path.to/your/first_notebook.ipynb">First Notebook</option>
          <option value="https://path.to/your/second_notebook.ipynb">Second Notebook</option>
          {/* Add more options as needed */}
        </select>
        <JupyterNotebookViewer notebookUrl={notebookUrl} />
      </div>
    </Layout>
  );
};

export default MyPage;
