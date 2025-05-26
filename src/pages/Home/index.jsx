import React from "react";
import Navbar from "../../components/Navbar"; 
import HomeImage from "../../assets/homeImage.jpg";

export default function HomePage() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-project");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="font-sans bg-white text-slate-800">
      <Navbar />

      <main>
        <section
          className="relative text-white overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-400 to-indigo-500"></div>

          <div
            className="relative container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row lg:items-stretch"
          >
            {/* Text Content Block */}
            <div className="text-center lg:text-left z-10 flex flex-col justify-center py-16 sm:py-20 md:py-28 lg:py-32 mb-12 lg:mb-0 lg:w-3/5 lg:pr-8 xl:pr-12">
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-slate-100 drop-shadow-md"
              >
                Transform Career Path <br className="hidden md:inline" /> with
                Intelligent Insights
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto lg:mx-0"
              >
                Our AI-powered platform offers seamless identity verification,
                fluency checks, essay evaluations, and precise job skill
                matching.
              </p>
              {/* MODIFIED DIV FOR BUTTON GROUP */}
              <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={scrollToAbout}
                  // ADDED w-fit HERE
                  className="w-fit px-6 sm:px-8 py-3 bg-cyan-400 text-white border-2 border-white font-semibold rounded-lg hover:bg-cyan-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 shadow-md hover:shadow-lg cursor-pointer"
                >
                  What is this about
                </button>
              </div>
            </div>

            {/* Image Block */}
            <div className="lg:w-2/5 z-10 flex items-center justify-center">
              <img
                src={HomeImage}
                alt="People silhouettes with an upward arrow signifying career growth"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section
          id="about-project"
          // Applied bg-slate-50 directly. Responsive padding.
          className="py-16 sm:py-20 md:py-28 bg-slate-50"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                // Applied text-slate-800 directly. Responsive text sizes.
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4"
              >
                Pioneering the Future of Online Assessment
              </h2>
              <p
                // Applied text-slate-600 directly. Responsive text sizes.
                className="text-md sm:text-lg text-slate-600 leading-relaxed"
              >
                Our platform integrates cutting-edge AI to create a trustworthy
                and efficient environment for learning and recruitment.
              </p>
            </div>

            <div
              // Responsive grid layout and gap
              className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start max-w-5xl mx-auto"
            >
              <article
                // Applied text-slate-600 directly. Added responsive padding.
                className="text-left text-slate-600 space-y-4 sm:space-y-6 leading-relaxed bg-white p-4 sm:p-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
              >
                <h3
                  // Applied text-slate-800 directly. Responsive text sizes.
                  className="text-lg sm:text-xl font-semibold text-slate-800 mb-3"
                >
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base">
                  In today's rapidly evolving digital landscape, the need for
                  reliable and comprehensive online assessment tools is
                  paramount. Our intelligent web-based platform is designed to
                  address the core challenges in online education and
                  recruitment.
                </p>
                <p className="text-sm sm:text-base">
                  We provide a seamless, integrated solution for robust identity
                  verification, accurate language fluency checking, insightful
                  essay evaluation, and precise job skills matching.
                </p>
              </article>
              <article
                // Applied text-slate-600 directly. Added responsive padding.
                className="text-left text-slate-600 space-y-4 sm:space-y-6 leading-relaxed bg-white p-4 sm:p-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
              >
                <h3
                  // Applied text-slate-800 directly. Responsive text sizes.
                  className="text-lg sm:text-xl font-semibold text-slate-800 mb-3"
                >
                  Empowering Growth
                </h3>
                <p className="text-sm sm:text-base">
                  By leveraging cutting-edge technologies in Artificial
                  Intelligence, Natural Language Processing, and Computer
                  Vision, we aim to enhance academic integrity, provide valuable
                  feedback to learners, and connect talent with the right
                  opportunities.
                </p>
                <p className="text-sm sm:text-base">
                  Our mission is to empower students and professionals by
                  offering tools that support their learning journey and career
                  advancement in a trustworthy and efficient manner.
                </p>
              </article>
            </div>
            <p
              // Applied text-slate-600 directly. Responsive text sizes and margin.
              className="mt-8 sm:mt-10 text-center text-sm sm:text-md text-slate-600 max-w-3xl mx-auto"
            >
              Whether you are an educational institution looking to secure your
              online examinations, a student aiming to improve your
              communication skills, or an employer seeking the best-fit
              candidates, our platform offers the features and reliability you
              need.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-300 text-center py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-sm sm:text-base">© {new Date().getFullYear()} SkillNet. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Building a Smarter Future, Together.
          </p>
        </div>
      </footer>
    </div>
  );
}