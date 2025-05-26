import React, { useState } from "react";
import Button from "../../Button"; 
import InputField from "../../InputField"; 


const ContactForm = ({ className: passedClassName = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (fieldName) => (e) => {
    setFormData((prev) => ({ ...prev, [fieldName]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg font-[Poppins] w-full flex flex-col ${passedClassName}`}
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
        Feel Free to Write
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:gap-5 flex-grow"
      >
        <div className="space-y-4 sm:space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <InputField
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange("name")}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange("email")}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone
            </label>
            <InputField
              id="phone"
              name="phone"
              type="tel"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleInputChange("phone")}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="p-3 border border-gray-300 rounded-lg w-full bg-white text-gray-700 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange("message")}
            ></textarea>
          </div>
        </div>

        <div className="mt-auto pt-4 sm:pt-6">
          <Button
            type="submit"
            text="Send Message"
            className="w-full sm:w-auto sm:self-center py-3 text-base" 
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;