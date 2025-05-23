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

  const buttonPrimaryColor = "cyan-400";
  const buttonPrimaryHoverColor = "cyan-500";
  const buttonPrimaryRingColor = "white";

  const textColor = "slate-800";
  const secondaryTextColor = "slate-600";
  const lightTextColor = "slate-100";
  const subtleBgColor = "slate-50";

  return (
    <div className={`font-sans bg-white text-${textColor}`}>
      <Navbar />

      <main>
        <section
          className="relative text-white overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-400 to-indigo-500"></div>

          <div
            className={`relative container mx-auto px-6 flex flex-col lg:flex-row lg:items-stretch`}
          >

            <div className="text-center lg:text-left z-10 flex flex-col justify-center py-20 md:py-28 lg:py-32 mb-12 lg:mb-0">
              <h1
                id="hero-heading"
                className={`text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-${lightTextColor} drop-shadow-md`}
              >
                Transform Career Path <br className="hidden md:inline" /> with
                Intelligent Insights
              </h1>
              <p
                className={`text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto lg:mx-0`}
              >
                Our AI-powered platform offers seamless identity verification,
                fluency checks, essay evaluations, and precise job skill
                matching.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start">
                <button
                  onClick={scrollToAbout}
                  className={`px-8 py-3 bg-${buttonPrimaryColor} text-white border-2 border-white font-semibold rounded-lg hover:bg-${buttonPrimaryHoverColor} transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${buttonPrimaryRingColor} focus:ring-opacity-75 shadow-md hover:shadow-lg cursor-pointer`}
                >
                  What is this about
                </button>
              </div>
            </div>

            <div className="lg:w-2/5 xl:w-1/2 z-10">
              {" "}
              <img
                src={HomeImage}
                alt="People silhouettes with an upward arrow signifying career growth"
                className="w-full h-64 sm:h-80 lg:h-full object-cover shadow-xl"
              />
            </div>
          </div>
        </section>

        <section
          id="about-project"
          className={`py-20 md:py-28 bg-${subtleBgColor}`}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2
                className={`text-3xl sm:text-4xl font-bold text-${textColor} mb-4`}
              >
                Pioneering the Future of Online Assessment
              </h2>
              <p className={`text-lg ${secondaryTextColor} leading-relaxed`}>
                Our platform integrates cutting-edge AI to create a trustworthy
                and efficient environment for learning and recruitment.
              </p>
            </div>

            <div
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto`}
            >
              <article
                className={`text-left ${secondaryTextColor} space-y-6 leading-relaxed bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl`}
              >
                <h3 className={`text-xl font-semibold text-${textColor} mb-3`}>
                  Our Vision
                </h3>
                <p>
                  In today's rapidly evolving digital landscape, the need for
                  reliable and comprehensive online assessment tools is
                  paramount. Our intelligent web-based platform is designed to
                  address the core challenges in online education and
                  recruitment.
                </p>
                <p>
                  We provide a seamless, integrated solution for robust identity
                  verification, accurate language fluency checking, insightful
                  essay evaluation, and precise job skills matching.
                </p>
              </article>
              <article
                className={`text-left ${secondaryTextColor} space-y-6 leading-relaxed bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl`}
              >
                <h3 className={`text-xl font-semibold text-${textColor} mb-3`}>
                  Empowering Growth
                </h3>
                <p>
                  By leveraging cutting-edge technologies in Artificial
                  Intelligence, Natural Language Processing, and Computer
                  Vision, we aim to enhance academic integrity, provide valuable
                  feedback to learners, and connect talent with the right
                  opportunities.
                </p>
                <p>
                  Our mission is to empower students and professionals by
                  offering tools that support their learning journey and career
                  advancement in a trustworthy and efficient manner.
                </p>
              </article>
            </div>
            <p
              className={`mt-10 text-center text-md ${secondaryTextColor} max-w-3xl mx-auto`}
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

      <footer className={`bg-slate-800 text-slate-300 text-center py-10`}>
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} SkillNet. All rights reserved.</p>
          <p className="text-sm text-slate-400 mt-2">
            Building a Smarter Future, Together.
          </p>
        </div>
      </footer>
    </div>
  );
}
