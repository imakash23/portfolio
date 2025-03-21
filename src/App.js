import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderSection from "./components/HeaderSection";
import CustomNavbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Project";
import WorkEducation from "./components/WorkEducation";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 font-[Poppins]">

          <CustomNavbar />
        
      <HeaderSection />
      <AboutMe/>
      <Projects/>
      <WorkEducation/>
      <Footer/>
    </div>
  );
};

export default App;
