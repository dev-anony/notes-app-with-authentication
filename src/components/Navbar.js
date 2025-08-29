import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  const loggedIn = localStorage.getItem("loggedIn");

  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Login</Link>
      <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
      {loggedIn && (
        <>
          <Link to="/notes" style={{ margin: "0 10px" }}>Notes</Link>
          <button onClick={handleLogout} style={{ marginLeft: "10px" }}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
