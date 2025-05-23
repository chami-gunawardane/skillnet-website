import ContactInfo from "../../components/ContactUs/ContactInfo";
import ContactSection from "../../components/ContactUs/ContactSection";
import Button from "../../components/Button";
import logo from "../../assets/Logo.webp";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ContactPage = () => {
  return (
    <>
    <Navbar />
      <div className="flex justify-between items-center px-10 mr-[100px] ml-[100px] mb-3 font-[Poppins]">
      </div>
      <div className="p-6">
        <div className="max-w-4xl mx-auto mb-6">
          <ContactInfo />
        </div>
        <ContactSection />
      </div>
      <footer className={`bg-slate-800 text-slate-300 text-center py-10`}>
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} SkillNet. All rights reserved.</p>
          <p className="text-sm text-slate-400 mt-2">
            Building a Smarter Future, Together.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactPage;
