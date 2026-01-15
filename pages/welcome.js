import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link"; // Import this at the top

export default function Welcome() {
  const router = useRouter();
  const { room } = router.query;
  const [guestName, setGuestName] = useState("State");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // 1. Clock Logic - Updates every second
    // const clockInterval = setInterval(() => {
    //   const now = new Date();
    //   setCurrentTime(
    //     now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    //   );
    // }, 1000);
    const clockInterval = setInterval(() => {
      const now = new Date();

      // This forces the clock to use Uzbekistan time, no matter what the TV says
      const uzbekistanTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Tashkent", // This locks it to your local time zone
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setCurrentTime(uzbekistanTime);
    }, 1000);
    // 2. Data Fetching Logic
    const fetchData = () => {
      if (room) {
        fetch(`/api/guest?room=${room}`)
          .then((res) => res.json())
          .then((data) => setGuestName(data.name));
      }
    };

    fetchData(); // Run immediately on load
    const dataInterval = setInterval(fetchData, 10000); // Check for name changes every 10 seconds

    return () => {
      clearInterval(clockInterval);
      clearInterval(dataInterval);
    };
  }, [room]);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("/bluecourt.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        margin: 0,
        position: "relative", // Ensures absolute elements stay in place
      }}
    >
      {/* HOTEL name in Topleft */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "50px",
          color: "#00d4ff",
          fontWeight: "bold",
          fontSize: "1.2rem",
          letterSpacing: "4px",
        }}
      >
        BLUECOURT{" "}
        <span style={{ fontWeight: "200", color: "white" }}>HOTEL</span>
      </div>

      {/* Clock in Top Right */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          right: "50px",
          fontSize: "2rem",
          fontWeight: "300",
        }}
      >
        {currentTime}
      </div>

      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            color: "#00d4ff",
            letterSpacing: "4px",
            marginBottom: "10px",
          }}
        >
          WELCOME
        </h3>
        <h1 style={{ fontSize: "6rem", fontWeight: "bold", margin: "0" }}>
          Mr. {guestName}!
        </h1>

        <p
          style={{
            color: "#00d4ff",
            fontSize: "1.5rem",
            marginTop: "20px",
            opacity: "0.8",
          }}
        >
          TO BLUECOURT HOTEL
        </p>
      </div>

      {/* QR Code and Offers URL in Bottom Right */}
      {/* Enlarged QR Code and Offers URL in Bottom Right */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "60px",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          backgroundColor: "rgba(255, 255, 255, 0.05)", // Glass effect
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          padding: "25px 35px",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
        }}
      >
        {/* Left Side: QR Code */}
        <div style={{ textAlign: "center" }}>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://bluecourthotel.com/offers&color=00d4ff&bgcolor=ffffff00`}
            alt="QR Code"
            style={{
              width: "110px",
              height: "110px",
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "12px",
            }}
          />
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "0.7rem",
              opacity: 0.6,
              letterSpacing: "1px",
            }}
          >
            SCAN TO MOBILE
          </p>
        </div>

        {/* Right Side: Text and Link */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "bold",
              fontSize: "1.5rem",
              letterSpacing: "1px",
            }}
          >
            Special Offers
          </p>
          <p
            style={{
              margin: "5px 0 15px 0",
              fontSize: "1rem",
              color: "#00d4ff",
              fontWeight: "300",
            }}
          >
            bluecourthotel.com/offers
          </p>

          <Link href="/">
            <div
              style={{
                padding: "12px 25px",
                background: "linear-gradient(45deg, #00d4ff, #0070f3)",
                color: "white",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                boxShadow: "0 4px 15px rgba(0, 212, 255, 0.3)",
                textAlign: "center",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              GO TO HOMEPAGE
            </div>
          </Link>
        </div>
      </div>

      {/* Subtle bottom text */}
      <div style={{ position: "absolute", bottom: "40px", opacity: "0.5" }}>
        Press Home for TV Channels
      </div>
    </div>
  );
}
