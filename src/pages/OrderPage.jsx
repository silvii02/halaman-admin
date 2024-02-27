import React, { useState } from 'react';

const OrderPage = () => {
  // State untuk menyimpan daftar pesanan
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerImg: 'burger.jpg', // Path gambar pelanggan
      contact: '0857190000',
      paymentMethod: 'Cash',
      orderStatus: 'Pending',
      paymentStatus: 'Unpaid'
    },
    {
      id: 2,
      customerImg: 'pizza.jpg', // Path gambar pelanggan
      contact: '0898800000',
      paymentMethod: 'Card',
      orderStatus: 'Delivered',
      paymentStatus: 'Paid'
    }
  ]);

  // Fungsi untuk menampilkan detail pesanan
  const viewDetails = (orderId) => {
    // Lakukan sesuatu untuk menampilkan detail pesanan
    console.log("View details for order ID:", orderId);
  };

  // Fungsi untuk menambahkan kategori
  const addCategory = () => {
    // Lakukan sesuatu untuk menambahkan kategori
    console.log("Add category");
  };

  return (
    <div className='order'>
      <h2>Order Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>O.N.</th>
            <th>Customer</th>
            <th>Contact</th>
            <th>Payment method</th>
            <th>Order status</th>
            <th>Payment status</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td><img src={order.customerImg} alt={`Customer ${order.id}`} /></td> {/* Kolom untuk gambar pelanggan */}
              <td>{order.contact}</td>
              <td>{order.paymentMethod}</td>
              <td style={{ color: order.orderStatus === "Pending" ? "orange" : "green" }}>{order.orderStatus}</td>
              <td style={{ color: order.paymentStatus === "Unpaid" ? "red" : "green" }}>{order.paymentStatus}</td>
              <td><button onClick={() => viewDetails(order.id)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addCategory}>Add Category</button>
    </div>
  );
};

export default OrderPage;
