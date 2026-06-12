import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import CustomerDashboard from "./CustomerDashboard";
import Invoices from "./Invoices";
import Plans from "./Plans";
import AdminDashboard from "./AdminDashboard";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;