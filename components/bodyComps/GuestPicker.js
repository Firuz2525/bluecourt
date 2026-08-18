import React, { useState } from "react";

export default function GuestPicker({
  label = "ADULTS",
  placeholder,
  value,
  person,
  singularLabel = "Guest",
  pluralLabel = "Guests",
  onChange,
  disabled = false,
  min = 1,
  max = 9,
}) {
  const [internalValue, setInternalValue] = useState(
    value !== undefined ? value : min
  );
  const [isFocused, setIsFocused] = useState(false);

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (e) => {
    const selectedCount = Number(e.target.value);
    setInternalValue(selectedCount);
    if (onChange) {
      onChange(selectedCount);
    }
  };

  // Generate numbers from min (1) to max (9)
  const options = [];
  for (let i = min; i <= max; i++) {
    options.push(i);
  }

  // Format display string (e.g., "1 Guest" vs "2 Adults")
  const formatDisplay = (count) => {
    if (count === undefined || count === null) return null;
    const currentLabel =
      count === 1 ? singularLabel : pluralLabel || `${singularLabel}s`;
    return `${count} ${currentLabel}`;
  };

  // Matching Luxury Styles
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

  const nativeSelectStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0, // Fully invisible select overlay over the luxury card
    cursor: "pointer",
    colorScheme: "dark",
    backgroundColor: "#121212",
  };

  const userIconStyle = {
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
          {currentValue ? (
            <span style={valueStyle}>{formatDisplay(currentValue)}</span>
          ) : (
            <span style={placeholderStyle}>{placeholder}</span>
          )}
        </div>

        {/* Minimalist SVG Guest Icon */}
        <svg style={userIconStyle} viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>

        {/* Overlayed HTML Select Input */}
        <select
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={nativeSelectStyle}
        >
          {options.map((num) => {
            const itemLabel =
              num === 1 ? singularLabel : pluralLabel || `${singularLabel}s`;
            return (
              <option
                key={num}
                value={num}
                style={{ backgroundColor: "#161616", color: "#F3F3F3" }}
              >
                {num} {itemLabel}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
