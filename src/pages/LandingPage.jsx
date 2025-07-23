import React, { useState } from "react";
import TypingText from "../components/TypingText";
import IconTransitionAnimation from "../components/IconTransitionAnimation";
//import { CodeFilled, CloudFilled } from "@fluentui/react-icons";
import softwareEngineerImage from "../assets/1005142.png";
import iamEngineerImage from "../assets/iam-engineer.png";
import { VisualStudioTeamServices, Azure } from "azure-react-icons";

const LandingPage = ({ onSelectProfile }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState(null);

  const handleSoftwareEngineerClick = () => {
    setAnimationType("software");
    setShowAnimation(true);
  };

  const handleIAMEngineerClick = () => {
    setAnimationType("iam");
    setShowAnimation(true);
  };

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    if (animationType) {
      onSelectProfile(animationType);
    }
    setAnimationType(null);
  };

  return (
    <div className="text-center min-h-screen flex flex-col justify-between py-12 bg-gray-900">
      {/* Animation Overlay */}
      {showAnimation && (
        <IconTransitionAnimation
          onComplete={handleAnimationComplete}
          icon={animationType === "software" ? VisualStudioTeamServices : Azure} // Use Fluent UI icons
        />
      )}

      {/* Welcome and Profile Summary Section */}
      <div className="mt-2">
        <h1 className="text-4xl font-bold mb-6 text-white">
          <TypingText
            text="Hey, there 👋 Welcome to my Portfolio... 💼"
            speed={100}
          />
        </h1>
        <section className="text-base text-gray-300 max-w-2xl mx-auto space-y-6 text-left px-4 animate-fadeIn">
          <p>
            I’m <b>Nikesh Biraggari</b> — a curious mind with a strong passion
            for technology and digital security. I recently graduated with a
            Master’s in Information Systems from Northeastern University,
            Boston, and I’m currently on the lookout for exciting opportunities
            in <b>Software Engineering</b> and{" "}
            <b>Identity & Access Management (IAM)</b>.
          </p>
          <p>
            By background, I’m a Software Engineer who enjoys building clean,
            scalable, and secure systems. Whether it's crafting robust .NET
            backend APIs, automating IAM workflows, or experimenting with cloud
            platforms like Azure, AWS & GCP. I love solving problems that make
            technology an essential in our lives.
          </p>
          <p>But I’m not just about code.</p>
          <p>
            When I’m not deep into debugging or architecting IAM solutions,
            you’ll find me:
            <ul className="list-disc list-inside mt-2 space-y-2 pl-4">
              <li>
                Geeking out over the latest trends in IAM and software
                practices,
              </li>
              <li>Exploring the city with a drink in hand,</li>
              <li>Playing tennis in the mornings and catching sunset jogs.</li>
            </ul>
          </p>
          <p>
            I believe that great software doesn’t just work — it connects,
            protects, and empowers. If you're building something meaningful,
            whether it's in health tech, enterprise security, or just something
            cool — I’d love to hear from you.
          </p>
        </section>
        {/* Scroll Prompt */}
        <div className="mt-10">
          <p className="text-md text-white-400 font-bold mb-2">
            Scroll down to select a profile you are interested in 🙂
          </p>
          <span className="inline-block animate-bounce text-gray-400">↓</span>
        </div>
      </div>

      {/* Profile Selection with Squared Tiles */}
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center gap-6 mb-12">
          <div className="flex flex-col items-center">
            <img
              src={softwareEngineerImage}
              alt="Software Engineer Profile"
              className="w-32 h-32 object-cover rounded-none mb-4"
            />
            <button
              onClick={handleSoftwareEngineerClick}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              Software Engineer
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={iamEngineerImage}
              alt="IAM Engineer Profile"
              className="w-32 h-32 object-cover rounded-none mb-4"
            />
            <button
              onClick={handleIAMEngineerClick}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition duration-300"
            >
              IAM Engineer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
