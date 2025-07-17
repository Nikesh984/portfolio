import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import SoftwareEngineerPage from "./pages/SoftwareEngineerPage";
import IAMEngineerPage from "./pages/IAMEngineerPage";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");

  const handleSelectProfile = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    setCurrentPage("landing");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {currentPage === "landing" && (
        <LandingPage onSelectProfile={handleSelectProfile} />
      )}
      {currentPage === "software" && (
        <SoftwareEngineerPage onBack={handleBack} />
      )}
      {currentPage === "iam" && <IAMEngineerPage onBack={handleBack} />}
    </div>
  );
}

export default App;
