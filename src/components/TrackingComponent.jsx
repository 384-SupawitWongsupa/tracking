// TrackingStatus.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const TrackingStatus = () => {
  const location = useLocation();
  const trackingData = location.state?.trackingData; // ใช้ optional chaining เพื่อป้องกันข้อผิดพลาด

  if (!trackingData) {
    return (
      <div className="text-center mt-10 text-red-500">
        No tracking data available.
      </div>
    ); // แจ้งเตือนเมื่อไม่มีข้อมูล
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Tracking Status</h2>
      <div className="mb-4 border-b pb-4">
        <span className="font-semibold">Sender:</span>
        <p className="text-gray-700">{trackingData.sender.name}</p>
      </div>
      <div className="mb-4 border-b pb-4">
        <span className="font-semibold">Recipient:</span>
        <p className="text-gray-700">{trackingData.recipient.name}</p>
      </div>
      <div className="mb-4 border-b pb-4">
        <span className="font-semibold">Tracking Code:</span>
        <p className="text-gray-700">{trackingData.trackingCode}</p>
      </div>
      <div className="mb-4 border-b pb-4">
        <span className="font-semibold">Shipping Company:</span>
        <p className="text-gray-700">{trackingData.shippingCompany}</p>
      </div>
      <div className="mb-4">
        <span className="font-semibold">Current Location:</span>
        <p className="text-gray-700">{trackingData.location}</p>
      </div>
      <div className="mt-6 text-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default TrackingStatus;
