import React from "react";
import ContactForm from "../ContactForm"; 
import contactImage1 from "../../../assets/contactImage.webp";

const ContactSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-10 lg:gap-12">
        <div className="w-full md:w-5/12 lg:w-1/2 flex flex-col items-center justify-center bg-white p-6 sm:p-8 rounded-lg shadow-lg order-1 md:order-none">
          <img
            src={contactImage1}
            alt="Contact Support Team Illustration"
            className="w-full h-full object-contain max-h-[400px] md:max-h-[450px] lg:max-h-[500px]"
          />
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex order-2 md:order-none">
          <ContactForm className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;