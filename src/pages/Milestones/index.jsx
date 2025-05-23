// src/components/MilestonesPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

const milestonesData = [
  {
    date: "April 3rd 2023",
    title: "Project Proposal",
    description: "Presented to a panel of judges in order to provide an overview of the proposed research.",
    marks: "5%"
  },
  {
    date: "25th May 2023",
    title: "Progress Presentation - 1",
    description: "Evaluation of 50% completion of the proposed solution by a panel of judges.",
    marks: "10%"
  },
  {
    date: "07th Sept 2023",
    title: "Progress Presentation - 2",
    description: "Evaluation of 90% completion of the proposed solution by a panel of judges.",
    marks: "18%"
  },
  {
    date: "30th October 2023",
    title: "Final Assessment & Viva",
    description: "Final evaluation of the completed product.",
    marks: "25%"
  }
];

const MilestonesPage = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: (isLeft) => ({ opacity: 0, x: isLeft ? -100 : 100 }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
    <Navbar />
    <div className="bg-slate-50 min-h-screen mt-4 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-sky-600 text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        </motion.h1>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Central Timeline Bar for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-sky-300 transform -translate-x-1/2"></div>
          {/* Left Timeline Bar for Mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-4 w-1 bg-sky-300 transform -translate-x-1/2"></div>

          {milestonesData.map((milestone, index) => {
            const isLeftAligned = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className="mb-4 relative"
                custom={isLeftAligned} // Pass to variants if needed for direction
                variants={itemVariants}
              >
                {/* Timeline Circle - Desktop */}
                <div className="hidden md:block absolute top-0 left-1/2 w-6 h-6 bg-white rounded-full border-4 border-sky-500 transform -translate-x-1/2 -translate-y-[-8px] shadow-md"></div>
                {/* Timeline Circle - Mobile */}
                <div className="md:hidden absolute top-0 left-4 w-6 h-6 bg-white rounded-full border-4 border-sky-500 transform -translate-x-1/2 -translate-y-[-8px] shadow-md"></div>

                <div className={`
                  md:flex 
                  ${isLeftAligned ? 'md:flex-row-reverse' : 'md:flex-row'} 
                  items-start
                `}>
                  {/* Spacer for desktop to push content to one side */}
                  <div className="md:w-1/2"></div>

                  {/* Content section */}
                  <div className={`
                    w-full md:w-[calc(50%-2rem)] 
                    ${isLeftAligned ? 'md:pr-0' : 'md:pl-0'} 
                    pl-12 md:pl-0
                  `}>
                    {/* Date Banner with Pointer */}
                    <div className={`
                      relative py-3 px-4 rounded-lg text-white font-semibold shadow-xl 
                      bg-sky-500 hover:bg-sky-600 transition-colors duration-300
                      ${isLeftAligned ? 'md:text-right' : 'md:text-left'} text-left
                      mb-4
                    `}>
                      {milestone.date}
                      {/* Pointer for Desktop */}
                      <div className={`
                        hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-sky-500 transform rotate-45
                        ${isLeftAligned ? '-right-[8px]' : '-left-[8px]'}
                      `}></div>
                       {/* Pointer for Mobile */}
                      <div className={`
                        md:hidden absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-sky-500 transform rotate-45
                        -left-[calc(theme(spacing.12)_-_theme(spacing.4)_-_theme(spacing.2))] 
                        sm:-left-[calc(theme(spacing.12)_-_theme(spacing.4)_-_8px)]
                        -left-[30px)]
                      `}></div> {/* Approx: pl-12 (48px) - left-4 (16px for line) - half pointer width (8px) = 24px from banner edge */}
                    </div>
                    
                    {/* Milestone Details Card */}
                    <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-sky-700 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">{milestone.description}</p>
                      <p className="text-gray-800 font-bold text-sm">Marks allocated - {milestone.marks}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default MilestonesPage;