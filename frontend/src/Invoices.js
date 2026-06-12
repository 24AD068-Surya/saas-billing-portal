import React, { useEffect, useState } from "react";
import axios from "axios";

function Invoices() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
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
      <h1>Invoices</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill._id}>
              <td>{bill._id}</td>
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

export default Invoices;
