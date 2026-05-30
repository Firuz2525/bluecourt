import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function BookingSuccessModal({
  isOpen,
  onClose,
  bookingId = "BC-9842",
}) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const t = useTranslations("Checkinbox");

  // Handles smooth CSS transitions before unmounting the component from the DOM
  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className="d-flex align-items-center justify-content-center p-3"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(12, 17, 27, 0.85)", // Luxury dark tint overlay
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)", // Safari support
        zIndex: 99999,
        opacity: isOpen ? 1 : 0,
        transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      onTransitionEnd={() => {
        if (!isOpen) setShouldRender(false);
      }}
    >
      {/* Main Container Card */}
      <div
        className="w-100 bg-white p-4 p-md-5 text-center position-relative"
        style={{
          maxWidth: "440px",
          border: "1px solid #dfd5c6", // Muted champagne gold border framework
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
          transform: isOpen
            ? "scale(1) translateY(0)"
            : "scale(0.95) translateY(10px)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Decorative Top Accent Ribbon */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, #c5a880 0%, #e5d5be 50%, #c5a880 100%)",
          }}
        />

        {/* Dismiss Button */}
        <button
          onClick={onClose}
          className="position-absolute top-0 end-0 m-3 text-secondary bg-transparent border-0"
          style={{
            fontSize: "26px",
            lineHeight: "1",
            cursor: "pointer",
            opacity: 0.5,
            padding: "5px 10px",
          }}
        >
          &times;
        </button>

        {/* Minimal Circle Checkmark Badge */}
        <div className="d-flex justify-content-center mb-4 mt-2">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "68px",
              height: "68px",
              backgroundColor: "#fcfaf7",
              border: "1px solid #e5d5be",
              borderRadius: "50%",
              display: "flex",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#c5a880"
              className="bi bi-check2"
              viewBox="0 0 16 16"
            >
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
            </svg>
          </div>
        </div>

        {/* Localized Header Title */}
        <h4
          className="fw-bold mb-2 text-uppercase text-center"
          style={{
            color: "#131b2e",
            letterSpacing: "0.06em",
            fontSize: "19px",
          }}
        >
          {t("successTitle")}
        </h4>

        {/* Localized Status Subtitle */}
        <p
          className="text-uppercase text-muted text-center mb-4"
          style={{ fontSize: "10px", letterSpacing: "0.18em" }}
        >
          {t("successSubtitle")}
        </p>

        {/* Premium Diamond Separator */}
        <div className="d-flex align-items-center justify-content-center my-4 opacity-50">
          <div
            style={{ height: "1px", width: "35%", backgroundColor: "#e2e8f0" }}
          />
          <div
            className="mx-2"
            style={{
              transform: "rotate(45deg)",
              width: "5px",
              height: "5px",
              backgroundColor: "#c5a880",
            }}
          />
          <div
            style={{ height: "1px", width: "35%", backgroundColor: "#e2e8f0" }}
          />
        </div>

        {/* Localized Explanation Body */}
        <p
          className="text-muted px-2 mb-4 text-center"
          style={{ fontSize: "13.5px", lineHeight: "1.6" }}
        >
          {t("successBody")}
        </p>

        {/* Reference Confirmation Box */}
        <div
          className="p-3 mb-4 text-center"
          style={{ backgroundColor: "#fbf9f6", border: "1px dashed #e5d5be" }}
        >
          <span
            className="text-muted d-block text-uppercase mb-1"
            style={{ fontSize: "9px", letterSpacing: "0.1em" }}
          >
            {t("bookingCode")}
          </span>
          <span
            className="text-dark fw-bold"
            style={{
              fontFamily: "monospace",
              fontSize: "16px",
              letterSpacing: "0.1em",
            }}
          >
            {bookingId}
          </span>
        </div>

        {/* Execution Button CTA */}
        <button
          onClick={onClose}
          className="btn w-100 py-3 rounded-0 text-white text-uppercase fw-bold"
          style={{
            backgroundColor: "#131b2e",
            fontSize: "11px",
            letterSpacing: "0.2em",
            border: "none",
            boxShadow: "0 4px 12px rgba(19, 27, 46, 0.15)",
            cursor: "pointer",
          }}
        >
          {t("closeBtn")}
        </button>
      </div>
    </div>
  );
}
