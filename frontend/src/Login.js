import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      console.log(response.data);

      alert("Login Successful");

    } catch (error) {

  console.log("FULL ERROR:", error);

  if(error.response){
    console.log("RESPONSE:", error.response.data);
  }

  alert("Login Failed");

}

  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>Role Based SaaS Billing Portal</h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;