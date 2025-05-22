import React from "react";
import Navbar from "../../components/Navbar";
import homeImage from "../../assets/home image.jpg";

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
          <h2 className="text-2xl font-bold mb-4">Literature Survey</h2>
          <p>
            The shift to online exams during the COVID-19 pandemic led to a
            significant rise in student cheating, with 54.7% confessing to it
            post-pandemic, up from 29.9%. This highlights the need for stronger
            academic integrity measures in online learning. Traditional ID
            checks are prone to impersonation; hence, real-time continuous
            identity verification using biometric techniques like face
            recognition and head pose estimation is proposed. Technologies like
            MTCNN and ArcFace ensure accurate face detection and matching, while
            3D model fitting and CNN-based pose estimation enhance reliability
            under head movements. Language fluency assessment, especially for
            non-native English speakers, has advanced with NLP and deep
            learning. This study uses T5-small for grammar correction, text
            preprocessing for filler word detection, and pydub for pause
            analysis. It also uses bigram techniques to detect word repetition.
            Together, these components form a comprehensive, automated fluency
            analysis system. For descriptive answer evaluation, traditional
            keyword-based and TF-IDF methods lacked semantic depth. Recent
            models use transformer-based embeddings like SBERT and GTE-large to
            assess answers based on semantic similarity. This research
            fine-tunes Alibaba-NLP/gte-large-en-v1.5 for enhanced evaluation. In
            recruitment, the system uses transformer models like BERT and Llama
            to extract data from CVs and match them to job descriptions. Unlike
            basic keyword methods, it employs clustering, semantic grouping, and
            ontology-based skill matching for improved accuracy. The integration
            of Doc2Vec, NER, and Word2Vec further enhances skill extraction.
            Llama’s advanced semantic capabilities enable persona-based
            matching, aiming to simplify and optimize job recommendation
            processes.
          </p>
        </section>

        {/* Research Problem & Gap */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="border p-4">
            <h3 className="font-bold mb-2">Research Problem</h3>
            <p>
              The masses are hesitant to discuss mental health or get treatment
              and the lack of an easily accessible and accurate online platform
              which provides those facilities is an evident barrier in
              minimizing the use of it.
            </p>
            <img
              src="/problem-illustration.png"
              alt="Problem Illustration"
              className="mt-4"
            />
          </section>

          <section className="border p-4 overflow-auto">
            <h3 className="font-bold mb-2">Research Gap</h3>
            <img
              src="/research-gap-table.png"
              alt="Research Gap Table"
              className="w-full"
            />
          </section>
        </div>

        {/* Research Objectives */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Research Objectives</h2>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="border p-4">
              <h3 className="font-bold mb-2">Main Objective</h3>
              <p>
                Developing a user-friendly and interactive mobile application
                designed to assist individuals in effectively addressing a
                diverse range of medical conditions through a comprehensive set
                of techniques and remedies.
              </p>
            </div>
            <div className="border p-4">
              <h3 className="font-bold mb-2">Sub Objectives</h3>
              <ul className="list-disc list-inside">
                <li>Accurate Illness Diagnosis</li>
                <li>Severity level determining</li>
                <li>Initial stage treatment providing</li>
                <li>Medium & Extreme stage treatment providing</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DomainPage;
