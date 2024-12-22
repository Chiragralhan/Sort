import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import WOW from 'wowjs'; // Import WOW.js
import BackToTop from './Components/BackToTop'; // Import BackToTop component
import Carousel from './Components/Carousel';
import Contact from './Components/Contact'; // Import Contact component
import Events from './Components/Events'; // Import Events component
import Experience from './Components/Experience'; // Import Experience component
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Spinner from './Components/Spinner';

window.jQuery = $;
window.$ = $;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW().init();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show spinner for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner show={loading} /> // Pass loading state to Spinner
      ) : (
        <>
          <Navbar />
          <Carousel />
          <Experience /> {/* Add the Experience section */}
          <Events /> {/* Add the Events section */}
          <Contact /> {/* Add the Contact section */}
          <BackToTop /> {/* Add Back to Top button */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
