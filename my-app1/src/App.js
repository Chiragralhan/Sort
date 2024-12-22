import React, { useEffect, useState } from 'react';
import Carousel from './Components/Carousel';
import Navbar from './Components/Navbar';
import Spinner from './Components/Spinner'; // Import Spinner component

function App() {
  const [loading, setLoading] = useState(true); // State to control spinner visibility

  useEffect(() => {
    // Simulate loading time (e.g., fetching data or loading assets)
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner /> // Show Spinner while loading is true
      ) : (
        <>
          <Navbar />
          <Carousel />
          <main>
            {/* Your main content goes here */}
            <h1>Welcome to the App!</h1>
          </main>
        </>
      )}
    </div>
  );
}

export default App;

