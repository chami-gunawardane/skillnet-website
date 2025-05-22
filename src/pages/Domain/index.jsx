import React from "react";
import Navbar from "../../components/Navbar"; 
import aws from "../../assets/aws-logo.png";
import flask from "../../assets/flask-logo.png";
import github from "../../assets/GitHub-logo.png";
import mongodb from "../../assets/MongoDB-Logo.png"; 
import node from "../../assets/node-logo.jpg";
import python from "../../assets/Python-logo.png"; 
import tailwind from "../../assets/tailwind-logo.png";
import tensorFlow from "../../assets/TensorFlow-logo.png";
import vscode from "../../assets/vscode-logo.png";
import react from "../../assets/react-logo.png";

const tools = [
  { src: python, alt: "Python Logo", name: "Python" },
  { src: react, alt: "React Logo", name: "React" },
  { src: vscode, alt: "VSCode Logo", name: "VSCode" },
  { src: aws, alt: "AWS Logo", name: "AWS" },
  { src: flask, alt: "Flask Logo", name: "Flask" },
  { src: tailwind, alt: "Tailwind CSS Logo", name: "Tailwind CSS" },
  { src: github, alt: "GitHub Logo", name: "GitHub" },
  { src: mongodb, alt: "MongoDB Logo", name: "MongoDB" },
  { src: node, alt: "Node.js Logo", name: "Node.js" },
  { src: tensorFlow, alt: "TensorFlow Logo", name: "TensorFlow" },
];

// Reusable Section Card Component
const SectionCard = ({ title, children, className = "" }) => (
  <section
    className={`bg-white shadow-lg rounded-xl p-6 md:p-8 transform transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl ${className}`}
  >
    {title && <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>}
    <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
  </section>
);

const DomainPage = () => {
  return (
    <div className="font-sans bg-slate-50 text-gray-800 min-h-screen">
      <Navbar />

      {/* Hero Section - Text Only */}
      <header className="py-20 md:py-28 bg-gradient-to-br from-cyan-500 to-indigo-700 text-white text-center shadow-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Advancing Online Learning
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
            Exploring innovative solutions for secure and effective e-learning experiences.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Literature Survey */}
        <SectionCard title="Literature Survey">
          <p className="text-lg text-justify">
            The shift to online exams during the COVID-19 pandemic led to a
            significant rise in student cheating, with 54.7% confessing to it
            post-pandemic, up from 29.9%. This highlights the need for
            stronger academic integrity measures in online learning.
            Traditional ID checks are prone to impersonation; hence, real-time
            continuous identity verification using biometric techniques like
            face recognition and head pose estimation is proposed.
            Technologies like MTCNN and ArcFace ensure accurate face detection
            and matching, while 3D model fitting and CNN-based pose estimation
            enhance reliability under head movements.
          </p>
          <p className="text-lg text-justify">
            Language fluency assessment, especially for non-native English speakers, has
            advanced with NLP and deep learning. This study uses T5-small for
            grammar correction, text preprocessing for filler word detection,
            and pydub for pause analysis. It also uses bigram techniques to
            detect word repetition. Together, these components form a
            comprehensive, automated fluency analysis system.
          </p>
          <p className="text-lg text-justify">
            For descriptive answer evaluation, traditional keyword-based and TF-IDF methods
            lacked semantic depth. Recent models use transformer-based
            embeddings like SBERT and GTE-large to assess answers based on
            semantic similarity. This research fine-tunes
            Alibaba-NLP/gte-large-en-v1.5 for enhanced evaluation.
          </p>
          <p className="text-lg text-justify">
            In recruitment, the system uses transformer models like BERT and
            Llama to extract data from CVs and match them to job descriptions.
            Unlike basic keyword methods, it employs clustering, semantic
            grouping, and ontology-based skill matching for improved accuracy.
            The integration of Doc2Vec, NER, and Word2Vec further enhances
            skill extraction. Llama’s advanced semantic capabilities enable
            persona-based matching, aiming to simplify and optimize job
            recommendation processes.
          </p>
        </SectionCard>

        {/* Research Problem & Gap */}
        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Research Problem</h3>
            <p className="text-lg text-justify">
              This research focuses on developing an integrated online
              learning platform that addresses major gaps in current
              educational technologies. Existing systems often work in
              isolation—online proctoring lacks continuous authentication,
              language tools miss real-time evaluation, coding platforms offer
              limited feedback, and job matching relies on basic keyword
              searches. The proposed solution combines computer vision for
              secure proctoring, NLP for detailed language assessment,
              adaptive code analysis for programming evaluation, and semantic
              AI for intelligent job matching. By unifying these technologies,
              the platform ensures academic integrity, offers accurate skill
              assessment, and helps students better prepare for real-world job
              opportunities through a seamless learning experience.
            </p>
          </SectionCard>

          <SectionCard>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Research Gap</h3>
            <p className="text-lg text-justify">
              {/* NOTE: Your original code had identical text for Problem & Gap. Ensure this is distinct in your actual content. */}
              Current educational technologies often operate in silos. Proctoring systems may not offer continuous authentication, language assessment tools frequently lack real-time comprehensive feedback, coding evaluation platforms provide restricted insights, and recruitment systems depend on superficial keyword matching. This fragmentation limits the creation of a truly holistic and reliable e-learning ecosystem that can adapt to diverse learner needs and ensure credible skill validation.
            </p>
          </SectionCard>
        </div>

        {/* Research Objective & Methodology */}
        <div className="grid md:grid-cols-2 gap-8">
          <SectionCard>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Research Objective</h3>
            <p className="text-lg text-justify">
              This research aims to develop an advanced e-learning platform
              that enhances the integrity and credibility of online
              certifications. It integrates real-time AI proctoring,
              continuous facial recognition, and behavioral analysis to
              prevent cheating. The platform uses NLP and deep learning for
              holistic language assessment and dynamic code evaluation to
              measure programming skills. It also employs semantic AI for
              accurate job matching, ensuring secure, skill-based
              certifications that are meaningful to learners and employers
              alike.
            </p>
          </SectionCard>
          <SectionCard>
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Methodology</h3>
            <p className="text-lg text-justify">
              {/* NOTE: Your original code had identical text for Objective & Methodology. Ensure this is distinct. */}
              The methodology involves a multi-faceted approach: 1. Developing a robust computer vision module for continuous proctoring. 2. Implementing advanced NLP models for comprehensive language fluency and grammar assessment. 3. Creating an adaptive code analysis engine. 4. Building a semantic AI-driven job matching system. 5. Integrating these modules into a cohesive platform. 6. Rigorous testing and validation with user groups to ensure efficacy and usability.
            </p>
          </SectionCard>
        </div>

        {/* Tools and Technologies */}
        <SectionCard title="Tools and Technologies">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-100 rounded-lg transition-transform duration-200 hover:scale-110 w-full"
              >
                <img
                  src={tool.src}
                  alt={tool.alt}
                  className="h-16 w-16 md:h-20 md:w-20 object-contain mb-2"
                />
                <span className="text-sm font-medium text-gray-600">{tool.name}</span>
              </div>
            ))}
          </div>
        </SectionCard>
      </main>

      <footer className="text-center py-8 bg-gray-800 text-gray-300">
        <p>© {new Date().getFullYear()} Your Project Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DomainPage;