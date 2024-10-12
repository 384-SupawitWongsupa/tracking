// Homepage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../components/Product'; // นำเข้าข้อมูลผลิตภัณฑ์
import ComplexNavbar from "../components/Navbar"; // นำเข้าคอมโพเนนต์ Navbar
import CarouselWithContent from "../components/CarouselWithContent"; // นำเข้า Carousel

const Homepage = () => {
  const [trackingCode, setTrackingCode] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleInputChange = (e) => {
    setTrackingCode(e.target.value);
  };

  const handleTrack = () => {
    if (trackingCode.length !== 10) {
      setError('Tracking code must be 10 digits long.');
      return;
    }

    const foundData = products.find(item => item.trackingCode === trackingCode);
    
    if (foundData) {
      setError('');
      navigate('/tracking-status', { state: { trackingData: foundData } });
    } else {
      setError('Tracking code not found.');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <ComplexNavbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      
      <CarouselWithContent /> {/* เพิ่ม Carousel ที่นี่ */}

      <div className="flex flex-col items-center justify-center w-full py-10">
        <h2 className="text-5xl font-bold mb-4 text-center">Track Your Package</h2>
        <p className="text-xl mb-8 text-center">Enter your 10-digit tracking code below:</p>
        
        <div className={`max-w-lg w-full p-6 shadow-lg rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <input
            type="text"
            value={trackingCode}
            onChange={handleInputChange}
            placeholder="Enter 10-digit tracking code"
            className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white'}`}
          />
          <button
            onClick={handleTrack}
            className={`w-full ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition`}
          >
            Track Package
          </button>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
            <p>Get updates on your package's location as it moves through the shipping process.</p>
          </div>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-2">Easy Access</h3>
            <p>Track your package with just a few clicks using our simple interface.</p>
          </div>
          <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <h3 className="text-xl font-bold mb-2">Customer Support</h3>
            <p>Our support team is here to help you with any questions or issues.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
