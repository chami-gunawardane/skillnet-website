import React from "react";
import Navbar from "../../components/Navbar";
import HomeImage from "../../assets/home image.jpg";
import back from "../../assets/background.jpg";

export default function HomePage() {
  return (
    <div className="bg-white text-[#3a3a3a] font-sans">
      <Navbar />
      <section
        className="flex flex-col lg:flex-row justify-between items-center px-10 py-12 bg-cover bg-center "
        
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-4 ml-28">
            Partner in Career Transformation
          </h2>
          <p className="text-[#6c6c6c] mb-6 ml-28 text-lg">
            <br />
            An Intelligent Web-Based Platform for Verifying Identity, Checking Fluency, Evaluating Essays, and Matching Job Skills
          </p>
          <button className="px-6 py-3 bg-[#3a3a3a] text-white rounded hover:bg-blue-400 ml-[110px]">
            Explore courses
          </button>
        </div>
        <div className="mt-5 lg:mt-0">
          <img
            src={HomeImage}
            alt="Student Hero"
            className="rounded-xl max-w-2xl mx-auto h-[400px]"
          />
        </div>
      </section>
    </div>
  );
}
