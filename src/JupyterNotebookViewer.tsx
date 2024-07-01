import React, { useEffect, useState } from 'react';
import { NbViewer } from 'nbviewer-react';
import axios from 'axios';

interface JupyterNotebookViewerProps {
  notebookUrl: string;
}

const JupyterNotebookViewer: React.FC<JupyterNotebookViewerProps> = ({ notebookUrl }) => {
  const [notebookContent, setNotebookContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotebook = async () => {
      try {
        const response = await axios.get(notebookUrl);
        setNotebookContent(JSON.stringify(response.data));
      } catch (err) {
        setError('Failed to load the notebook.');
      }
    };

    fetchNotebook();
  }, [notebookUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!notebookContent) {
    return <div>Loading...</div>;
  }

  return <NbViewer notebook={notebookContent} />;
};

export default JupyterNotebookViewer;
