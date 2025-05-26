import React from "react";
import emailIcon from "../../../assets/email_contactus.webp"; 
import whatsappIcon from "../../../assets/whatsappImage.webp"; 

const ContactInfo = () => {
  return (
    // Use mx-auto and max-w for centering and width control, responsive padding
    <div className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg font-[Poppins] mx-auto max-w-6xl my-8 sm:my-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        {/* Text Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-2 sm:mb-3"> {/* Adjusted color, margin */}
            Get in Touch
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed tracking-wide">
            Have questions or need assistance? We're here to help! Reach out via
            phone or email, and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Details */}
        <div className="md:w-1/3 flex flex-col gap-3 sm:gap-4 items-center md:items-start mt-6 md:mt-0">
          <a href="mailto:admin@aigl.com" className="flex items-center gap-3 group">
            <span className="bg-blue-200 group-hover:bg-blue-300 p-2 rounded-full transition-colors">
              <img src={emailIcon} alt="Email" className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-gray-700 group-hover:text-blue-600 text-sm sm:text-base transition-colors">
              admin@aigl.com
            </span>
          </a>
          <a href="https://wa.me/12395550108" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group"> {/* Added WhatsApp link */}
            <span className="bg-green-200 group-hover:bg-green-300 p-2 rounded-full transition-colors"> {/* Changed color for WhatsApp */}
              <img src={whatsappIcon} alt="WhatsApp" className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-gray-700 group-hover:text-green-600 text-sm sm:text-base transition-colors">
              (239) 555-0108
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;