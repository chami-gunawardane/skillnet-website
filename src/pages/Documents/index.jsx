import React, { useState } from "react";
import Navbar from "../../components/Navbar"; // Assuming your Navbar path
import { CloudArrowDownIcon } from "@heroicons/react/24/outline"; // Or /24/solid for filled icons

// Sample data for documents
// In a real app, this might come from an API or a CMS
const documentCategories = [
  {
    id: "proposalDocument",
    title: "Proposal Document",
    documentIdentifier: "2023-045",
    downloadLink: "https://mysliit-my.sharepoint.com/:f:/g/personal/it21356704_my_sliit_lk/EjHtSwdoA4JGtn1nYbv-EAsBYbz-LxgmOaVtbYJvifxaUg?e=JASr3n",
  },
  {
    id: "statusDocument1",
    title: "Check List Document - 1",
    documentIdentifier: "2023-051-A",
    downloadLink: "https://drive.google.com/drive/folders/105E8qIyBfvxW2OEDYpu2qMgeXj8tX4JN?usp=drive_link",
  },
  {
    id: "statusDocument2",
    title: "Check List Document - 2",
    documentIdentifier: "2023-051-B",
    downloadLink: "https://drive.google.com/drive/folders/10sROQrUDSiJuYqZu5p1_MRLkb-V-J8RT?usp=drive_link",
  },
  {
    id: "finalReports",
    title: "Final Reports",
    // If there was a single combined download for all final reports, you could add:
    // documentIdentifier: "ALL-FIN-REPORTS",
    // downloadLink: "/downloads/final-reports-all.zip",
    // And the logic below would need to accommodate showing this AND subDocuments, or prioritize.
    // For this request, we assume finalReports primarily lists individual documents.
    subDocuments: [
      { id: "fr_group099", title: "Group 099", downloadLink: "https://drive.google.com/file/d/10I_J0rS2IW9NDZL3QzmeqGkLoZJeAMTp/view?usp=sharing" },
      { id: "fr_it21387180", title: "IT21387180", downloadLink: "https://drive.google.com/file/d/1XFxQzsYv44njjFuAqrGUYkddG4wH5SC7/view?usp=sharing" },
      { id: "fr_it21356704", title: "IT21356704", downloadLink: "https://drive.google.com/file/d/1n8XwbZlcAhU4Td2ZyXYykxkDadATq6kJ/view?usp=sharing" },
      { id: "fr_it21166310", title: "IT21166310", downloadLink: "https://drive.google.com/file/d/1CHSr0b5srCyJni7h9f6GFRJ5QEjEsKfK/view?usp=sharing" },
      { id: "fr_it21159794", title: "IT21159794", downloadLink: "https://drive.google.com/file/d/19XyUJXj_9KHbSZdqCWtDAzhub_zk_qtl/view?usp=sharing" },
    ]
  },
];

function DocumentsPage() {
  const [activeTab, setActiveTab] = useState(null); // Stores the ID of the active tab

  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId); // Toggle: if clicked again, close it
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold text-center mb-10 text-sky-700">
          Documents
        </h1> */}

        <div className="max-w-3xl mx-auto space-y-8">
          {documentCategories.map((doc) => (
            <div key={doc.id}>
              {/* Clickable Tab Header */}
              <button
                onClick={() => handleTabClick(doc.id)}
                className={`w-full text-left px-6 py-6 rounded-full transition-all duration-300 ease-in-out
                            ${
                              activeTab === doc.id
                                ? "bg-sky-500 text-white shadow-md"
                                : "bg-sky-500 hover:bg-sky-600 text-slate-800 hover:text-white"
                            }
                            focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-opacity-50`}
              >
                <span className="font-semibold text-lg">{doc.title}</span>
              </button>

              {/* Content - shown if tab is active */}
              {activeTab === doc.id && (
                <div className="mt-1 mb-3 bg-white border border-sky-300 rounded-xl shadow-sm animate-fadeIn overflow-hidden">
                  {doc.subDocuments && doc.subDocuments.length > 0 ? (
                    // Display grid of sub-documents for "Final Reports"
                    <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-4 p-6"> {/* p-6 for padding, gap-4 (1rem) */}
                      {doc.subDocuments.map(subDoc => (
                        <div 
                          key={subDoc.id} 
                          className="bg-white border-2 border-sky-300 rounded-2xl p-4 flex flex-col items-center space-y-4"
                          // Card width: max-w-3xl parent is 768px. p-6 on content div = 48px padding.
                          // Available width for cards area: 768 - 48 = 720px.
                          // For 5 cards with gap-x-4 (16px): (720px - 4 * 16px) / 5 = (720 - 64) / 5 = 131.2px per card.
                          style={{ width: '130px' }} // Set fixed width for cards
                        >
                          <h3 
                            className="text-md font-semibold text-sky-700 text-center"
                            style={{ minHeight: '2.5em' }} // Approx 2 lines for text-md, adjust if needed
                          >
                            {subDoc.title} 
                          </h3>
                          <a
                            href={subDoc.downloadLink}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 border-2 border-sky-300 rounded-full text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 transition-colors"
                            style={{ width: '110px' }} // Fixed width for button consistency
                          >
                            <CloudArrowDownIcon
                              className="h-5 w-5 mr-1.5 text-black" // Icon color black as per image
                              aria-hidden="true"
                            />
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : doc.downloadLink ? (
                    // Original content for single document categories
                    <div className="flex justify-between items-center p-6">
                      <span className="text-sky-700 font-medium text-lg">
                        {doc.documentIdentifier}
                      </span>
                      <a
                        href={doc.downloadLink}
                        download 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-5 py-2.5 border border-gray-300 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                      >
                        <CloudArrowDownIcon
                          className="h-5 w-5 mr-2 text-sky-600"
                          aria-hidden="true"
                        />
                        Download
                      </a>
                    </div>
                  ) : (
                    // Fallback if no subDocuments and no main downloadLink
                    <div className="p-6 text-center text-gray-500">
                      No specific documents available for download in this section.
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocumentsPage;