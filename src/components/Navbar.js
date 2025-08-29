import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      {!loggedIn ? (
        <>
          <Link to="/" style={{ margin: "0 10px" }}>Login</Link>
          <Link to="/signup" style={{ margin: "0 10px" }}>Signup</Link>
        </>
      ) : (
        <>
          <Link to="/notes" style={{ margin: "0 10px" }}>Notes</Link>
          <button onClick={handleLogout} style={{ marginLeft: "10px" }}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
