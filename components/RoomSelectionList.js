import React from "react";
import { useTranslations } from "next-intl";
import roomsData from "../roomData/data.json"; // Adjust relative path as needed

export default function RoomSelectionList({
  onSelectRoom,
  selectedRoomId,
  onConfirmSelection,
}) {
  // Hook up your next-intl translation namespace
  const t = useTranslations("Checkinbox");

  return (
    <div
      className="container py-3 px-3"
      style={{ background: "#fcfaf7", fontFamily: "serif" }}
    >
      {/* Dynamic Keyframes Injection for Smooth Confirm Fade */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Elegant Editorial Header Section */}
      <div
        className="border-bottom text-center text-md-start"
        style={{ borderColor: "#dfd5c6" }}
      >
        <p
          className="fw-light tracking-wide text-dark mb-3"
          style={{ fontSize: "2.25rem" }}
        >
          {t("title")}
        </p>
      </div>

      {/* Main Luxury Rows Stack */}
      <div className="d-flex flex-column gap-4 mt-4">
        {roomsData.map((room) => {
          const isSelected = selectedRoomId === room.id;

          return (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className="row g-0 align-items-stretch position-relative"
              style={{
                backgroundColor: "#ffffff",
                border: isSelected ? "1px solid #131b2e" : "1px solid #dfd5c6",
                boxShadow: isSelected
                  ? "0 20px 40px rgba(19, 27, 46, 0.08)"
                  : "0 4px 20px rgba(0, 0, 0, 0.02)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {/* LEFT COLUMN: Horizontal Touch-Scroll Image Gallery */}
              <div
                className="col-12 col-md-5 col-lg-4 position-relative"
                style={{ minHeight: "260px" }}
              >
                <div
                  className="d-flex h-100 overflow-auto"
                  style={{
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {room.imageUrls.map((url, index) => (
                    <div
                      key={index}
                      className="w-100 flex-shrink-0"
                      style={{
                        scrollSnapAlign: "center",
                        position: "relative",
                      }}
                    >
                      <img
                        src={url}
                        alt={`${room.name} view`}
                        className="w-100"
                        style={{ objectFit: "cover", height: "260px" }}
                      />
                    </div>
                  ))}
                </div>

                {/* Micro Swipe Label Hint on Mobile Screens */}
                <div
                  className="position-absolute bottom-0 end-0 m-3 px-2 py-1 text-white text-uppercase d-md-none"
                  style={{
                    backgroundColor: "rgba(12, 17, 27, 0.6)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                  }}
                >
                  <i className="fas fa-exchange-alt me-1"></i> {t("swipe")}
                </div>
              </div>

              {/* RIGHT COLUMN: Luxury Content Information Layout */}
              <div className="col-12 col-md-7 col-lg-8 p-4 p-lg-5 d-flex flex-column justify-content-between">
                {/* Header Context Details */}
                <div>
                  <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap mb-2">
                    <div>
                      <span
                        className="text-muted text-uppercase d-block mb-1"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.15em",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {t("room")} {room.id.replace("rm-", "")}
                      </span>
                      <h4
                        className="fw-normal text-dark tracking-wide mb-0"
                        style={{ fontSize: "1.4rem" }}
                      >
                        {room.name}
                      </h4>
                    </div>

                    {/* Golden Elegant Price Presentation */}
                    <div className="text-md-end">
                      <span
                        className="fw-light text-dark"
                        style={{ fontSize: "1.6rem", color: "#131b2e" }}
                      >
                        ${room.price}
                      </span>
                      <span
                        className="text-muted text-uppercase d-block"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.1em",
                          fontFamily: "sans-serif",
                        }}
                      >
                        / {t("night")}
                      </span>
                    </div>
                  </div>

                  {/* Font Awesome Luxury Amenity Strip Layout */}
                  <div
                    className="d-flex flex-wrap align-items-center gap-4 py-3 my-4 border-top border-bottom"
                    style={{
                      borderColor: "#f1ede6",
                      fontSize: "13px",
                      color: "#5c6475",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <i
                        className="fas fa-wifi"
                        style={{ color: "#c5a880" }}
                      ></i>
                      <span>{t("wifi")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fas fa-tv" style={{ color: "#c5a880" }}></i>
                      <span>{t("tv")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i
                        className="fas fa-coffee"
                        style={{ color: "#c5a880" }}
                      ></i>
                      <span>{t("coffee")}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i
                        className="fas fa-bath"
                        style={{ color: "#c5a880" }}
                      ></i>
                      <span>{t("bath")}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Actions Alignment */}
                <div
                  className="d-flex align-items-center justify-content-between flex-wrap gap-3 pt-2"
                  style={{ fontFamily: "sans-serif" }}
                >
                  <p className="text-muted small mb-0 fst-italic">
                    {room.description}
                  </p>

                  {/* 2. CONDITIONAL CONFIRM BUTTON */}
                  {isSelected ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents row layout click triggers
                        if (onConfirmSelection) onConfirmSelection(room);
                      }}
                      className="btn px-4 py-2 text-uppercase fw-bold rounded-0"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.15em",
                        backgroundColor: "#131b2e",
                        color: "#ffffff",
                        border: "1px solid #131b2e",
                        animation: "fadeIn 0.3s ease forwards",
                      }}
                    >
                      {t("confirmBtn2")}{" "}
                      <i
                        className="fas fa-arrow-right ms-2"
                        style={{ fontSize: "9px" }}
                      ></i>
                    </button>
                  ) : (
                    <span
                      className="text-uppercase fw-bold rounded-0 px-3 py-1"
                      style={{
                        fontSize: "11px",
                        color: "#131b2e",
                        letterSpacing: "0.15em",
                        border: "1px solid #dfd5c6",
                        backgroundColor: "transparent",
                        display: "inline-block",
                      }}
                    >
                      {t("clickToChoose")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
