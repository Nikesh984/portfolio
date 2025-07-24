import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import { FaCode, FaTools, FaCogs } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/ExperienceSection";
import AcademicProjectsSection from "../components/AcademicProjectsSection";
import EducationSection from "../components/EducationSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificationsSection from "../components/CertificationsSection";
import FooterSection from "../components/FooterSection";

const IAMEngineerPage = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const skillsData = {
    "Authentication & Authorization": {
      skills: [
        "Azure AD (Entra ID)",
        "Single Sign-On (SSO)",
        "MFA (including Conditional Access Policies)",
        "OIDC",
        "SAML",
        "OAuth 2.0",
      ],
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
    "IAM Tools & Platforms": {
      skills: [
        "SailPoint IdentityNow/IIQ",
        "BeyondTrust Password Safe (PAM)",
        "HashiCorp Vault (Secrets Management)",
        "TruU (Passwordless)",
      ],
    },
    "Directory Services": {
      skills: [
        "Active Directory",
        "LDAP",
        "ADFS",
        "Group Policy",
        "Azure AD Connect",
      ],
    },
    "Lifecycle Management": {
      skills: [
        "Automating Joiner-Mover-Leaver workflows",
        "Role-based access controls (RBAC)",
        "Entitlement management",
      ],
    },
    "Security & Compliance": {
      skills: [
        "Identity governance",
        "Zero Trust principles",
        "Audit & access reviews",
      ],
    },
  };

  const experiences = [
    {
      id: 1,
      title: "Identity Access Management Engineer",
      company: "Micron Technology",
      date: "Feb 2022 - Aug 2023",
      responsibilities: [
        "Developed IAM solutions to secure enterprise access.",
        "Maintained internal applications with scalable systems.",
        "Collaborated on secure engineering practices.",
      ],
    },
    {
      id: 2,
      title: "Software Engineer - IAM Support",
      company: "Cognizant",
      date: "Oct 2020 -  Feb 2022",
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
      title: "Network Structures and Cloud Computing ",
      type: "Cloud Computing",
      description:
        "A scalable cloud infrastructure on Google Cloud using Terraform, planned, developed and deployed for the CSYE Network Structures and Cloud Computing course. Integrates Compute Engine, Cloud SQL, and Cloud Pub/Sub for a secure, high-availability of web application with automated deployments and robust monitoring.",
      date: "2024",
      technologies: [
        "Google Cloud",
        "Terraform",
        "Packer",
        "REST API's",
        "Shell Scripting",
        "GitHub Actions",
        "CI/CD",
      ],
      githubLink: "https://github.com/Nikesh984/scalable-cloudinfra-gcp",
    },
    {
      id: 2,
      title: "Advanced Big Data App-Indexing",
      type: "coding",
      description:
        "An advanced big data application designed to index and manage structured JSON data. Built with a RESTful API backed by Redis for fast data access, Elasticsearch for efficient search, RabbitMQ for async processing, and secured with OAuth2.0 for robust access control and data integrity.",
      date: "2025",
      technologies: ["dotnet", "Kafka", "Elastic Search", "Kibana"],
      githubLink: "https://github.com/Nikesh984/INFO7255_RESTAPI",
    },
  ];

  const education = [
    {
      id: 2,
      degree: "Masters in Information Systems",
      institution: "Northeastern University",
      date: "2023 - 2025",
      highlights: [
        "Worked as a Teaching Assistant for a core course (INFO 5100) of Information Systems program led by Professor & Director Kal Bugrara.",
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
      title: "Cultural Champion",
      description:
        "Received the Cultural Champion Award at Micron Technology for leading the Azure AD MFA migration project, demonstrating innovation, collaboration, and alignment with the company’s core values. Recognized by senior leadership, including the CEO.",
      date: "2023",
    },
    {
      id: 2,
      title: "Engineering Excellence Award",
      description:
        "Recognized with the Engineering Excellence Award by Novartis while working at Cognizant Technology Solutions, for outstanding contribution and commitment to delivering high-quality solutions.",
      date: "2021",
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
        title="Nikesh's Portfolio - Identity Access Management (IAM) Engineer "
        onBack={onBack}
      />
      {/* About Me Section */}
      <main className="pt-20 container mx-auto px-6">
        <AboutSection
          id="about"
          title="About Me as an IAM Engineer"
          description={[
            "Coming from a Civil Engineering background, I quickly transitioned into tech through an internship at Cognizant, where I got hands-on with .NET development. That experience sparked my passion for software and set me on the path to cybersecurity.",
            "My journey truly accelerated at Micron Technology, I joined the IAM team, building and maintaining secure access systems. I worked on projects like Azure AD MFA migration, Passwordless Authentication, SailPoint, and PAM tools like BeyondTrust and HashiCorp Vault, strengthening enterprise identity workflows.",
            "IAM isn't just my job — it’s my niche. I’m now focused on leveraging my expertise in identity security, authentication flows, and automation — with a vision to contribute to next-gen IAM solutions.",
          ]}
          techIcons={[
            "azure",
            "aws",
            "gcloud",
            "sailpoint",
            "okta",
            "vault",
            "terraform",
            "powershell",
            "bash",
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

export default IAMEngineerPage;
