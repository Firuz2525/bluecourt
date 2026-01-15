import { useState } from "react";

export default function Reception() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const RECEPTION_PASSWORD = "hotel_admin_2026";

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === RECEPTION_PASSWORD) setIsAuthorized(true);
    else alert("Access Denied");
  };

  const updateGuest = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/guest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ room, name }),
    });
    if (res.ok) {
      setMessage(`Room ${room} updated to ${name}`);
      setRoom("");
      setName("");
      setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  // --- LOGIN STYLING ---
  if (!isAuthorized) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
            width: "350px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "white", marginBottom: "20px" }}>Staff Portal</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin PIN"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #334155",
                background: "#0f172a",
                color: "white",
                marginBottom: "15px",
                boxSizing: "border-box",
              }}
            />
            <button
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#3b82f6",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Enter Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD STYLING ---
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Sidebar Area */}
      <div
        style={{
          width: "250px",
          backgroundColor: "#1e293b",
          padding: "30px",
          borderRight: "1px solid #334155",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "50px",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            letterSpacing: "4px",
          }}
        >
          BLUECOURT{" "}
          <span style={{ fontWeight: "200", color: "#00d4ff" }}>HOTEL</span>
        </div>
        <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
          <p
            style={{
              background: "#334155",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🏨 Guest Check-In
          </p>
          <p style={{ padding: "10px", opacity: 0.5 }}>📊 Room Status</p>
          <p style={{ padding: "10px", opacity: 0.5 }}>⚙️ System Settings</p>
          <button
            onClick={() => setIsAuthorized(false)}
            style={{
              marginTop: "50px",
              background: "none",
              border: "1px solid #ef4444",
              color: "#ef4444",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "60px" }}>
        <h1 style={{ marginBottom: "10px" }}>Guest Check-In</h1>
        <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
          Update the welcome screen for any room instantly.
        </p>

        <div
          style={{
            background: "#1e293b",
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "500px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
        >
          <form onSubmit={updateGuest}>
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  color: "#94a3b8",
                  marginBottom: "8px",
                  fontSize: "0.8rem",
                }}
              >
                ROOM NUMBER
              </label>
              <input
                type="text"
                placeholder="e.g. 101"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "1.1rem",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  color: "#94a3b8",
                  marginBottom: "8px",
                  fontSize: "0.8rem",
                }}
              >
                GUEST NAME
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "1.1rem",
                  boxSizing: "border-box",
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "8px",
                background: "#3b82f6",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                border: "none",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Update TV Display
            </button>
          </form>

          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "rgba(34, 197, 94, 0.2)",
                border: "1px solid #22c55e",
                color: "#22c55e",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
