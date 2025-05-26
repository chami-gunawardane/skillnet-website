import React from "react";

const Button = ({ text, variant = "primary", className = "", onClick, image }) => {

    const baseStyles =
        "px-4 py-2 sm:px-6 sm:py-2 rounded-lg transition font-medium flex items-center justify-center text-sm sm:text-base font-[Poppins]";

    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        outline: "border bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
        custom: "bg-blue-100 text-blue-500 hover:bg-blue-200 cursor-pointer"
    };

    const iconBaseSize = "h-5 w-5";
    const iconResponsiveSize = "sm:h-7 sm:w-7";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {image && (
                <img
                    src={image}
                    alt="Button Icon" // Consider making this more dynamic or an empty string if text is present and icon is decorative
                    className={`${iconBaseSize} ${iconResponsiveSize} ${text ? 'mr-2' : ''}`} // Add margin-right if text is also present
                />
            )}
            {text}
        </button>
    );
};

export default Button;