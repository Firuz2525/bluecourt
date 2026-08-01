import React, { useState } from "react";

export default function DatePicker({
  label = "CHECK-IN",
  placeholder = "Select Date",
  value,
  onChange,
  min,
  max,
  disabled = false,
}) {
  const [internalDate, setInternalDate] = useState(value || "");
  const [isFocused, setIsFocused] = useState(false);

  const currentDate = value !== undefined ? value : internalDate;

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setInternalDate(selectedDate);
    if (onChange) {
      onChange(selectedDate);
    }
  };

  // Format date nicely for luxury display (e.g., "Thu, Oct 24")
  const formatDisplayDate = (dateString) => {
    if (!dateString) return null;
    const dateObj = new Date(dateString + "T00:00:00");
    return dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "300px",
    fontFamily: '"Cinzel", "Didot", "Garamond", "Georgia", serif',
  };

  const labelStyle = {
    fontSize: "11px",
    letterSpacing: "2px",
    fontWeight: "600",
    color: "#D4AF37", // Luxury Metallic Gold Accent
    marginBottom: "6px",
    textTransform: "uppercase",
  };

  const cardStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 18px",
    backgroundColor: "#121212", // Obsidian dark background
    border: isFocused ? "1px solid #D4AF37" : "1px solid #2A2A2A",
    borderRadius: "2px", // Sharp, elegant corners
    boxShadow: isFocused ? "0 0 15px rgba(212, 175, 55, 0.15)" : "none",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
  };

  const textGroupStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const placeholderStyle = {
    fontSize: "14px",
    color: "#666666",
    letterSpacing: "0.5px",
    fontFamily: "sans-serif",
  };

  const valueStyle = {
    fontSize: "15px",
    fontWeight: "500",
    color: "#F3F3F3", // Off-white cream
    letterSpacing: "0.5px",
  };

  const nativeInputStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0, // Fully invisible native input floating over the luxury UI
    cursor: "pointer",
    colorScheme: "dark", // Native calendar modal opens in dark mode
  };

  const calendarIconStyle = {
    width: "18px",
    height: "18px",
    fill: "#D4AF37",
    opacity: 0.85,
  };

  return (
    <div style={containerStyle}>
      {label && <span style={labelStyle}>{label}</span>}
      <div style={cardStyle}>
        <div style={textGroupStyle}>
          {currentDate ? (
            <span style={valueStyle}>{formatDisplayDate(currentDate)}</span>
          ) : (
            <span style={placeholderStyle}>{placeholder}</span>
          )}
        </div>

        {/* Minimalist SVG Calendar Icon */}
        <svg style={calendarIconStyle} viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
        </svg>

        {/* Overlayed HTML Date Input */}
        <input
          type="date"
          value={currentDate}
          onChange={handleChange}
          min={min}
          max={max}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={nativeInputStyle}
        />
      </div>
    </div>
  );
}
