import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/notes");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
