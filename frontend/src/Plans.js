import React from "react";

function Plans() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Subscription Plans</h1>

      <div>
        <h3>Basic Plan</h3>
        <p>₹499 / month</p>
      </div>

      <hr />

      <div>
        <h3>Pro Plan</h3>
        <p>₹999 / month</p>
      </div>

      <hr />

      <div>
        <h3>Enterprise Plan</h3>
        <p>₹1999 / month</p>
      </div>
    </div>
  );
}

export default Plans;

