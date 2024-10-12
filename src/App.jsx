import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TrackingStatus from './pages/TrackingStatus'; // นำเข้า TrackingStatus

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tracking-status" element={<TrackingStatus />} /> {/* เพิ่มเส้นทางสำหรับ TrackingStatus */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
