import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import { FaCode, FaTools, FaCogs } from "react-icons/fa";
// import { IoLogoGithub } from "react-icons/io";
import { SiReact } from "react-icons/si";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import AcademicProjectsSection from "../components/AcademicProjectsSection";
import EducationSection from "../components/EducationSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificationsSection from "../components/CertificationsSection";
import FooterSection from "../components/FooterSection";

const SoftwareEngineerPage = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const skillsData = {
    "Programming Languages": {
      skills: ["C#", "Python", "JavaScript", "PowerShell", "Bash"],
    },
    "Cloud & DevOps": {
      skills: [
        "Microsoft Azure",
        "AWS",
        "GCP",
        "Terraform",
        "Packer",
        "GitHub Actions",
        "CI/CD",
      ],
    },
    Databases: { skills: ["MSSQL", "MySQL", "MongoDB", "CosmosDB"] },
    "Frameworks & Tools": {
      skills: ["ASP.NET Core", "React JS", "Power BI", "Tableau"],
    },
  };

  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Micron Technology",
      date: "2022 - Present",
      responsibilities: [
        "Developed IAM solutions to secure enterprise access.",
        "Maintained internal applications with scalable systems.",
        "Collaborated on secure engineering practices.",
      ],
    },
    {
      id: 2,
      title: "Associate Software Engineer",
      company: "Micron Technology",
      date: "2020 - 2022",
      responsibilities: [
        "Gained hands-on experience with .NET development.",
        "Transitioned into a full-time software engineering role.",
        "Worked on internship projects enhancing technical skills.",
      ],
    },

    {
      id: 3,
      title: "Programmer Analyst",
      company: "Cognizant",
      date: "2020 - 2022",
      responsibilities: [
        "Gained hands-on experience with .NET development.",
        "Transitioned into a full-time software engineering role.",
        "Worked on internship projects enhancing technical skills.",
      ],
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Student Management System",
      type: "coding",
      description: "A web application to manage student records and grades.",
      date: "2019",
      technologies: ["JavaScript", "HTML", "CSS", "Node.js"],
    },
    {
      id: 2,
      title: "Database Optimization Project",
      type: "database",
      description: "Optimized SQL queries for a university database.",
      date: "2018",
      technologies: ["MySQL", "Python", "SQL"],
    },
  ];

  const education = [
    {
      id: 2,
      degree: "Masters in Information Systems",
      institution: "Northeastern University",
      date: "2023 - 2025",
      highlights: [
        // "Graduated with Honors",
        // "Completed coursework in structural analysis",
        // "Participated in engineering design projects",
      ],
    },
    {
      id: 1,
      degree: "Bachelor of Technology in Civil Engineering",
      institution: "G Pulla Reddy Engineering College",
      date: "2016 - 2020",
      highlights: [
        // "Graduated with Honors",
        // "Completed coursework in structural analysis",
        // "Participated in engineering design projects",
      ],
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Project Award",
      description: "Received for the Student Management System project.",
      date: "2019",
    },
    {
      id: 2,
      title: "Engineering Excellence Award",
      description:
        "Recognized for innovative database optimization techniques.",
      date: "2018",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Microsoft Certified: Identity and Access Administrator Associate",
      organization: "Microsoft",
      date: "Planned for 2025",
    },
    {
      id: 2,
      name: "Microsoft Certified: Azure Security Engineer Associate",
      organization: "Microsoft",
      date: "Planned for 2025",
    },
  ];

  const openModal = (category) => {
    setSelectedSkills(skillsData[category].skills);
    setModalTitle(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkills([]);
    setModalTitle("");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section, index) => {
      section.classList.add(
        index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"
      );
    });

    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Reusable Navbar */}
      <Navbar
        title="Nikesh's Portfolio - Software Engineering"
        onBack={onBack}
      />
      {/* About Me Section */}
      <main className="pt-20 container mx-auto px-6">
        <AboutSection
          id="about"
          title="About Me as a Software Engineer"
          description={[
            "I started my journey in tech with a degree in Civil Engineering, but my passion for technology quickly rerouted my path. During my internship at Cognizant, I got hands-on with .NET development, which gave me the momentum to transition into a full-time software engineering role.",
            "After gaining solid experience, I moved to Micron Technology where I worked on Identity and Access Management (IAM) solutions — building and maintaining internal applications that secured enterprise access.",
            "Since then, I’ve been on a mission to blend secure engineering practices with scalable software systems — and I’m just getting started.",
          ]}
          techIcons={[
            "visualstudio",
            "dotnet",
            "react",
            "angular",
            "javascript",
            "python",
            "sql",
            "mongo",
            "cosmos",
            "powershell",
            "postman",
            "swagger",
          ]} // Updated to match iconMap
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <SkillsSection
          title="Technical Skills"
          skillsData={skillsData}
          id="skills"
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <ExperienceSection
          id="experience"
          title="Professional Experience"
          experiences={experiences}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <AcademicProjectsSection
          title="Academic Projects"
          projects={projects}
          id="projects"
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <EducationSection
          id="education"
          title="Education"
          education={education}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <AchievementsSection
          id="achievements"
          title="Achievements"
          achievements={achievements}
        />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <CertificationsSection
          id="certifications"
          title="Certifications"
          certifications={certifications}
        />
        <FooterSection />
      </main>
    </div>
  );
};

export default SoftwareEngineerPage;
