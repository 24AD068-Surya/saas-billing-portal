import React, { useEffect, useState } from "react";
import axios from "axios";

function CustomerDashboard() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/billing",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBills(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer Dashboard</h1>

      <h2>My Bills</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill._id}>
              <td>{bill.customerName}</td>
              <td>₹{bill.amount}</td>
              <td>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerDashboard;