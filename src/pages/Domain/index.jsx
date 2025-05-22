import React from "react";
import Navbar from "../../components/Navbar";
import homeImage from "../../assets/home image.jpg";
import aws from "../../assets/aws-logo.png";
import flask from "../../assets/flask-logo.png";
import github from "../../assets/GitHub-logo.png";
import Mongodb from "../../assets/MongoDB-Logo.png";
import node from "../../assets/node-logo.jpg";
import phython from "../../assets/Python-logo.png";
import tailwind from "../../assets/tailwind-logo.png";
import tensorFlow from "../../assets/TensorFlow-logo.png";
import vscode from "../../assets/vscode-logo.png";
import react from "../../assets/react-logo.png";

const DomainPage = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      {/* Hero Image */}
      <section className="relative">
        <img
          src={homeImage}
          alt="Brain Tech"
          className="w-full max-h-[500px] object-cover"
        />
      </section>

      {/* Content Section */}
      <main className="p-6 max-w-6xl mx-auto space-y-10">
        {/* Literature Survey */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Literature Survey</h2>
          <div className="text-xl text-justify">
            <p>
              The shift to online exams during the COVID-19 pandemic led to a
              significant rise in student cheating, with 54.7% confessing to it
              post-pandemic, up from 29.9%. This highlights the need for
              stronger academic integrity measures in online learning.
              Traditional ID checks are prone to impersonation; hence, real-time
              continuous identity verification using biometric techniques like
              face recognition and head pose estimation is proposed.
              Technologies like MTCNN and ArcFace ensure accurate face detection
              and matching, while 3D model fitting and CNN-based pose estimation
              enhance reliability under head movements. Language fluency
              assessment, especially for non-native English speakers, has
              advanced with NLP and deep learning. This study uses T5-small for
              grammar correction, text preprocessing for filler word detection,
              and pydub for pause analysis. It also uses bigram techniques to
              detect word repetition. Together, these components form a
              comprehensive, automated fluency analysis system. For descriptive
              answer evaluation, traditional keyword-based and TF-IDF methods
              lacked semantic depth. Recent models use transformer-based
              embeddings like SBERT and GTE-large to assess answers based on
              semantic similarity. This research fine-tunes
              Alibaba-NLP/gte-large-en-v1.5 for enhanced evaluation. In
              recruitment, the system uses transformer models like BERT and
              Llama to extract data from CVs and match them to job descriptions.
              Unlike basic keyword methods, it employs clustering, semantic
              grouping, and ontology-based skill matching for improved accuracy.
              The integration of Doc2Vec, NER, and Word2Vec further enhances
              skill extraction. Llama’s advanced semantic capabilities enable
              persona-based matching, aiming to simplify and optimize job
              recommendation processes.
            </p>
          </div>
        </section>

        {/* Research Problem & Gap */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="border p-4">
            <h3 className="font-bold mb-2">Research Problem</h3>
            <div className="text-xl text-justify">
              <p>
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
            </div>
            <img
              src="/problem-illustration.png"
              alt="Problem Illustration"
              className="mt-4"
            />
          </section>

          <section className="border p-4 overflow-auto">
            <h3 className="font-bold mb-2">Research Gap</h3>
            <div className="text-xl text-justify">
              <p>
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
            </div>
            <img
              src="/research-gap-table.png"
              alt="Research Gap Table"
              className="w-full"
            />
          </section>
        </div>

        <section className="text-center">
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="border p-4">
              <h3 className="font-bold mb-2">Research Objective</h3>
              <div className="text-xl text-justify">
                <p>
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
              </div>
            </div>
            <div className="border p-4">
              <h3 className="font-bold mb-2">Methodology</h3>
              <div className="text-xl text-justify">
                <p>
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
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border p-4">
            <h2 className="text-3xl font-bold mb-4">Tools and Technologies</h2>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              <img
                src={phython}
                alt="Python"
                className="w-16 h-16 object-contain"
              />
              <img
                src={react}
                alt="React"
                className="w-16 h-16 object-contain"
              />
              <img
                src={vscode}
                alt="MongoDB"
                className="w-16 h-16 object-contain"
              />
              <img src={aws} alt="AWS" className="w-16 h-16 object-contain" />
              <img
                src={flask}
                alt="Node.js"
                className="w-16 h-16 object-contain"
              />
              <img
                src={tailwind}
                alt="Tailwind"
                className="w-16 h-16 object-contain"
              />
              <img
                src={github}
                alt="GitHub"
                className="w-16 h-16 object-contain"
              />
              <img
                src={Mongodb}
                alt="VS Code"
                className="w-16 h-16 object-contain"
              />
              <img
                src={node}
                alt="Flask"
                className="w-16 h-16 object-contain"
              />
              <img
                src={tensorFlow}
                alt="TensorFlow"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DomainPage;
