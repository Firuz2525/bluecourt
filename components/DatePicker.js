import React, { useState } from "react";

export default function DatePicker({
  label = "Select Date",
  value,
  onChange,
  min,
  max,
  disabled = false,
}) {
  const [internalDate, setInternalDate] = useState(value || "");

  const handleChange = (e) => {
    const selectedDate = e.target.value;
    setInternalDate(selectedDate);
    if (onChange) {
      onChange(selectedDate);
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full max-w-xs">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        type="date"
        value={value !== undefined ? value : internalDate}
        onChange={handleChange}
        min={min}
        max={max}
        disabled={disabled}
        className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
    </div>
  );
}
