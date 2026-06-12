import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [customerName, setCustomerName] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Pending");
  const [bills, setBills] = useState([]);

  const token = localStorage.getItem("token");

  const fetchBills = async () => {
    try {
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

  useEffect(() => {
    fetchBills();
  }, []);

  const createBill = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/billing",
        {
          customerName,
          amount,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Bill Created");
      fetchBills();

      setCustomerName("");
      setAmount("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Create Bill</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Paid</option>
      </select>

      <br /><br />

      <button onClick={createBill}>
        Create Bill
      </button>

      <hr />

      <h2>All Bills</h2>

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

export default AdminDashboard;