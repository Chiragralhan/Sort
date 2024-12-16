import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import React from 'react';
import './Spinner.css'; // Optional: Add custom styles if needed

function Spinner({ show }) {
    if (!show) return null; // Don't render anything if not visible
  
    return (
      <div
        id="spinner"
        className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  
  export default Spinner;
  
