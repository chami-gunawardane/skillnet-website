import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { CloudArrowDownIcon, EyeIcon } from "@heroicons/react/24/outline";

const documentCategories = [
  {
    id: "proposalDocument",
    title: "Proposal Document",
    documentIdentifier: "24-25J-099",
    downloadLink:
      "https://drive.google.com/drive/folders/1MzT9gyWgZhnzmGyjWeZP0LMnJ7v0TPvN?usp=sharing",
  },
  {
    id: "statusDocument1",
    title: "Check List Document - 1",
    documentIdentifier: "24-25J-099-A",
    downloadLink:
      "https://drive.google.com/drive/folders/105E8qIyBfvxW2OEDYpu2qMgeXj8tX4JN?usp=drive_link",
  },
  {
    id: "statusDocument2",
    title: "Check List Document - 2",
    documentIdentifier: "24-25J-099-B",
    downloadLink:
      "https://drive.google.com/drive/folders/10sROQrUDSiJuYqZu5p1_MRLkb-V-J8RT?usp=drive_link",
  },
  {
    id: "finalReports",
    title: "Final Reports",
    subDocuments: [
      {
        id: "fr_group099",
        title: "Group 099",
        downloadLink:
          "https://drive.google.com/file/d/10I_J0rS2IW9NDZL3QzmeqGkLoZJeAMTp/view?usp=sharing",
      },
      {
        id: "fr_it21387180",
        title: "IT21387180",
        downloadLink:
          "https://drive.google.com/file/d/1XFxQzsYv44njjFuAqrGUYkddG4wH5SC7/view?usp=sharing",
      },
      {
        id: "fr_it21356704",
        title: "IT21356704",
        downloadLink:
          "https://drive.google.com/file/d/1n8XwbZlcAhU4Td2ZyXYykxkDadATq6kJ/view?usp=sharing",
      },
      {
        id: "fr_it21166310",
        title: "IT21166310",
        downloadLink:
          "https://drive.google.com/file/d/1CHSr0b5srCyJni7h9f6GFRJ5QEjEsKfK/view?usp=sharing",
      },
      {
        id: "fr_it21159794",
        title: "IT21159794",
        downloadLink:
          "https://drive.google.com/file/d/19XyUJXj_9KHbSZdqCWtDAzhub_zk_qtl/view?usp=sharing",
      },
    ],
  },
];

function DocumentsPage() {
  const [activeTab, setActiveTab] = useState(null);
  const handleTabClick = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  return (
    <>
      <div className="bg-slate-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-8 mt-12 mb-28">
            {documentCategories.map((doc) => (
              <div key={doc.id}>
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

                {activeTab === doc.id && (
                  <div className="mt-1 mb-3 bg-white border border-sky-300 rounded-xl shadow-sm animate-fadeIn overflow-hidden">
                    {doc.subDocuments && doc.subDocuments.length > 0 ? (
                      <div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-4 p-6">
                        {" "}
                        {doc.subDocuments.map((subDoc) => (
                          <div
                            key={subDoc.id}
                            className="bg-white border-2 border-sky-300 rounded-2xl p-4 flex flex-col items-center space-y-4"
                            style={{ width: "130px" }}
                          >
                            <h3
                              className="text-md font-semibold text-sky-700 text-center"
                              style={{ minHeight: "2.5em" }}
                            >
                              {subDoc.title}
                            </h3>
                            <a
                              href={subDoc.downloadLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-3 py-2 border-2 border-sky-300 rounded-full text-sm font-medium text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-400 transition-colors"
                              style={{ width: "110px" }}
                            >
                              <EyeIcon 
                                className="h-5 w-5 mr-1.5 text-black"
                                aria-hidden="true"
                              />
                              View
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : doc.downloadLink ? (
                      <div className="flex justify-between items-center p-6">
                        <span className="text-sky-700 font-medium text-lg">
                          {doc.documentIdentifier}
                        </span>
                        <a
                          href={doc.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 border border-gray-300 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors"
                        >
                          <EyeIcon 
                            className="h-5 w-5 mr-2 text-sky-600"
                            aria-hidden="true"
                          />
                          View 
                        </a>
                      </div>
                    ) : (
                      <div className="p-6 text-center text-gray-500">
                        No specific documents available for viewing in this
                        section.
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
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

export default DocumentsPage;