// Spinner.js
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import React, { useEffect, useState } from 'react';
import './Styles/Spinner.css'; // Optional: Add custom styles if needed

function Spinner({ show }) {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 500); // Timeout matches the transition duration
            return () => clearTimeout(timer); // Cleanup on component unmount
        }
    }, [show]); // Trigger effect when 'show' prop changes

    if (!isVisible) return null; // Don't render if not visible

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


