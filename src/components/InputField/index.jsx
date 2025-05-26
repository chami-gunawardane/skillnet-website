import React from "react";

const InputField = ({ type, placeholder, icon, className = "", value, onChange }) => {
  return (
    <div className={`flex items-center border border-gray-300 rounded-lg px-4 py-2 bg-white shadow-sm ${className}`}>
      {icon && <span className="text-gray-500 mr-2 flex-shrink-0">{icon}</span>} {/* Added mr-2 and flex-shrink-0 */}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full outline-none bg-transparent" // Removed ml-2 as icon now has mr-2
        value={value}
        onChange={(e) => {
          if (onChange) onChange(e); // Call the onChange prop passed from parent
        }}
      />
    </div>
  );
};

export default InputField;