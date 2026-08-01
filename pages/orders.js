// pages/orders.js
import { useState } from "react";
import axios from "axios";
import OrderTakePage from "../components/OrderTakePage";

export default function Orders({ isAuthenticated: initialAuth }) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuth);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Send password to server API endpoint for secure validation
      await axios.post("/api/login", { password });
      setIsAuthenticated(true);
    } catch (err) {
      setError("Incorrect password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  // 1. Authenticated State: Show Order Page with Logout Button
  if (isAuthenticated) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#0A0A0A",
            padding: "12px 24px",
            textAlign: "right",
            borderBottom: "1px solid #222",
          }}
        >
          <button onClick={handleLogout} style={logoutButtonStyle}>
            LOGOUT STAFF
          </button>
        </div>
        <OrderTakePage />
      </>
    );
  }

  // 2. Unauthenticated State: Show Luxury Login Form
  return (
    <div style={containerStyle}>
      <form onSubmit={handleLogin} style={cardStyle}>
        <span style={labelStyle}>STAFF ACCESS</span>
        <h2 style={titleStyle}>Order System</h2>

        <div style={{ width: "100%", marginBottom: "16px" }}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            autoFocus
          />
          {error && <p style={errorStyle}>{error}</p>}
        </div>

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? "VERIFYING..." : "UNLOCK ACCESS"}
        </button>
      </form>
    </div>
  );
}

// Server-Side Verification before page renders
export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = req.headers.cookie || "";

  // Check if the secure auth cookie is present
  const isAuthenticated = cookies.includes("orders_auth=authenticated");

  return {
    props: {
      isAuthenticated,
    },
  };
}

// Styles
const containerStyle = {
  backgroundColor: "#0A0A0A",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  fontFamily: '"Cinzel", "Didot", "Garamond", "Georgia", serif',
};

const cardStyle = {
  backgroundColor: "#161616",
  border: "1px solid #222222",
  padding: "40px 32px",
  borderRadius: "2px",
  width: "100%",
  maxWidth: "360px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
};

const labelStyle = {
  fontSize: "11px",
  letterSpacing: "2px",
  fontWeight: "600",
  color: "#D4AF37",
  marginBottom: "8px",
};

const titleStyle = {
  color: "#F3F3F3",
  fontSize: "22px",
  fontWeight: "500",
  marginBottom: "28px",
  letterSpacing: "1px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  backgroundColor: "#121212",
  border: "1px solid #2A2A2A",
  color: "#F3F3F3",
  fontSize: "14px",
  borderRadius: "2px",
  outline: "none",
  textAlign: "center",
  letterSpacing: "2px",
  boxSizing: "border-box",
};

const errorStyle = {
  color: "#e53e3e",
  fontSize: "12px",
  marginTop: "8px",
  textAlign: "center",
  fontFamily: "sans-serif",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#D4AF37",
  color: "#000000",
  border: "none",
  borderRadius: "2px",
  fontWeight: "600",
  fontSize: "12px",
  letterSpacing: "2px",
  cursor: "pointer",
};

const logoutButtonStyle = {
  backgroundColor: "transparent",
  color: "#D4AF37",
  border: "1px solid #D4AF37",
  padding: "6px 14px",
  fontSize: "11px",
  letterSpacing: "1px",
  cursor: "pointer",
  borderRadius: "2px",
};
