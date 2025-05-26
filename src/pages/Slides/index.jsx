import React from "react";
import Navbar from "../../components/Navbar";

const FilePIcon = ({ className, iconColor = "currentColor" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.6667 5.33331H16C13.4367 5.33331 11.3333 7.43665 11.3333 10V54C11.3333 56.5633 13.4367 58.6666 16 58.6666H48C50.5633 58.6666 52.6667 56.5633 52.6667 54V16L42.6667 5.33331Z"
      stroke={iconColor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M42.6667 5.33331V16H52.6667"
      stroke={iconColor}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="32"
      y="38"
      fontFamily="Arial, sans-serif"
      fontSize="26"
      fontWeight="bold"
      fill={iconColor}
      textAnchor="middle"
      dominantBaseline="central"
    >
      P
    </text>
  </svg>
);

const EyeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor" 
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M21 12c-2.4 4 -5.4 6 -9 6s-6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6s6.6 2 9 6" />
  </svg>
);

const slidesData = [
  {
    title: "Proposal Presentation",
    id: "proposal",
    fileUrl: "https://docs.google.com/presentation/d/1JPPfqcCL5TwN0dkAGYk1SI9iuiaA8Xqp/edit?usp=drive_link&ouid=116553326166076009192&rtpof=true&sd=true",
    fileName: "Proposal_Presentation.pptx", 
  },
  {
    title: "Progress Presentation -1",
    id: "progress1",
    fileUrl: "https://docs.google.com/presentation/d/1Nzu0smAwG4IXi_-Ag86UzEMXr-uOaZDx/edit?usp=drive_link&ouid=116553326166076009192&rtpof=true&sd=true",
    fileName: "Progress_Presentation_1.pptx",
  },
  {
    title: "Progress Presentation -2",
    id: "progress2",
    fileUrl: "https://docs.google.com/presentation/d/1S5b-x7kfQQoTqkIxQAJVeQ4-Oa0BV1ZQ/edit?usp=drive_link&ouid=116553326166076009192&rtpof=true&sd=true",
    fileName: "Progress_Presentation_2.pptx",
  },
  {
    title: "Final Presentation",
    id: "final",
    fileUrl: "https://docs.google.com/presentation/d/1dRbue-RHfg-3yTkNwA8UOPww-W9cCI8Y/edit?usp=sharing&ouid=116553326166076009192&rtpof=true&sd=true", 
    fileName: "Final_Presentation.pptx",
  },
];

function SlidesPage() {
  const handleView = (fileUrl, fileName) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <>
      <div className=" bg-slate-50">
        <Navbar />
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className=" flex justify-center ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {slidesData.map((slide) => (
                <div
                  key={slide.id}
                  className="bg-white p-6 rounded-xl border-2 border-cyan-200 shadow-lg w-full max-w-[300px] flex flex-col items-center"
                >
                  <h2 className="text-lg font-semibold text-cyan-700 text-center mb-4 min-h-[3.5rem] flex items-center justify-center">
                    {slide.title}
                  </h2>
                  <FilePIcon className="w-16 h-16 mb-6" iconColor="#0e7490" /> 

                  <button
                    type="button"
                    onClick={() => handleView(slide.fileUrl, slide.fileName)} 
                    className={`
                      flex items-center justify-center space-x-2 py-2.5 px-6 rounded-lg
                      font-medium transition-colors duration-150 w-full text-sm
                      bg-white text-cyan-700 border border-cyan-600
                      hover:bg-sky-500 hover:text-white hover:border-sky-500
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400
                    `}
                  >
                    <EyeIcon className="w-5 h-5" /> 
                    <span>View</span> 
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
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
}

export default SlidesPage;