import React from "react";

function Physics() {
  return (
    <div>
      <h1>This is the Physics page.</h1>
      {/* Center-aligned container */}
      <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' // Adjust height as needed
        }}
      >
        {/* Centered PDF Viewer */}
        <div style={{ 
            height: '750px', 
            width: "50%", 
            border: '1px solid rgba(0, 0, 0, 0.3)' 
          }}
        >
          <iframe
            src="/nutshell_formula.pdf" // Replace with the actual PDF path
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  );
}

export default Physics;
