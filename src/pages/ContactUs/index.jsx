import React from "react";
import ContactInfo from "../../components/ContactUs/ContactInfo"; 
import ContactSection from "../../components/ContactUs/ContactSection"; 
import Navbar from "../../components/Navbar"; 

const ContactPage = () => {
  return (
    <>
      <Navbar />

      {/* Main Content Area with responsive padding */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* ContactInfo wrapper: max-w and mx-auto are good for centering. Made margin-bottom responsive. */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <ContactInfo /> {/* Assuming ContactInfo component is already responsive */}
        </div>

        <ContactSection />
      </div>

      {/* Footer with responsive padding */}
      <footer className="bg-slate-800 text-slate-300 text-center py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Responsive padding for inner container */}
          <p className="text-sm sm:text-base"> {/* Slightly larger base text for footer */}
            © {new Date().getFullYear()} SkillNet. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2"> {/* Adjusted text size */}
            Building a Smarter Future, Together.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;