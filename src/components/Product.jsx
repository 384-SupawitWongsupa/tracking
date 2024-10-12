// Product.jsx
export const products = [
    {
      trackingCode: '1234567890',
      location: 'Bangkok',
      sender: { name: 'Sender Company A' }, // เพิ่มข้อมูลผู้ส่ง
      recipient: { name: 'Recipient A' }, // เพิ่มข้อมูลผู้รับ
      shippingCompany: 'Shipping Company A',
    },
    {
      trackingCode: '0987654321',
      location: 'Chiang Mai',
      sender: { name: 'Sender Company B' },
      recipient: { name: 'Recipient B' },
      shippingCompany: 'Shipping Company B',
    },
    // ข้อมูลอื่นๆ ...
  ];
  