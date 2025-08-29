import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }
    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Signup successful! Please login.");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
