// TrackingStatus.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const TrackingStatus = () => {
    const location = useLocation();
    const trackingData = location.state?.trackingData; // ใช้ optional chaining

    // ตรวจสอบว่า trackingData มีค่าอยู่หรือไม่
    if (!trackingData) {
        return <div>No tracking data available.</div>;
    }

    return (
        <div>
            <h2>Tracking Status</h2>
            <p>Sender: {trackingData.sender.name}</p>
            <p>Recipient: {trackingData.recipient.name}</p>
            <p>Tracking Code: {trackingData.trackingCode}</p>
            <p>Shipping Company: {trackingData.shippingCompany}</p>
            {/* ข้อมูลอื่นๆ */}
        </div>
    );
};

export default TrackingStatus;
