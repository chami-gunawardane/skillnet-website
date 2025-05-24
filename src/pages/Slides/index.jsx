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

const CloudDownloadIcon = ({ className }) => (
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
    <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
    <path d="M12 13l0 9" />
    <path d="M9 20l3 3l3 -3" />
  </svg>
);

const slidesData = [
  {
    title: "Proposal Presentation",
    id: "proposal",
    fileUrl: "https://drive.google.com/drive/folders/1K2jrf5nn_Yx8yeuD3IAWAHNtAo356Uxj?usp=drive_link", 
    fileName: "Proposal_Presentation.pptx",
  },
  {
    title: "Progress Presentation -1",
    id: "progress1",
    fileUrl: "https://drive.google.com/drive/folders/11mjenDTNbO-L9mD1GxifExTzSe_IswVP?usp=drive_link", 
    fileName: "Progress_Presentation_1.pptx",
  },
  {
    title: "Progress Presentation -2",
    id: "progress2",
    fileUrl: "https://drive.google.com/drive/folders/1aidquXid8BBcV8KXTDcC4hrFG0N6GAcZ?usp=drive_link",
    fileName: "Progress_Presentation_2.pptx",
  },
  {
    title: "Final Presentation",
    id: "final",
    fileUrl: "/downloads/Final_Presentation.pptx", 
    fileName: "Final_Presentation.pptx",
  },
];

function SlidesPage() {
  const handleDownload = (fileUrl, fileName) => {
   
    if (fileUrl.includes("drive.google.com/drive/folders")) {
        window.open(fileUrl, '_blank');
    } else {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", fileName || "download");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        {/* Updated grid classes here */}
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
              <FilePIcon className="w-16 h-16 mb-6" iconColor="#0e7490" /> {/* text-cyan-700 */}
              
              <button
                type="button"
                onClick={() => handleDownload(slide.fileUrl, slide.fileName)}
                className={`
                  flex items-center justify-center space-x-2 py-2.5 px-6 rounded-lg 
                  font-medium transition-colors duration-150 w-full text-sm
                  bg-white text-cyan-700 border border-cyan-600 
                  hover:bg-sky-500 hover:text-white hover:border-sky-500 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400
                `}
              >
                <CloudDownloadIcon className="w-5 h-5" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default SlidesPage;