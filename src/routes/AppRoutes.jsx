 import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Process from "../pages/Process";
import Careers from "../pages/Careers";
import JobsInternships from "../pages/JobsInternships";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route 
          path="/" 
          element={<Home />} 
        />

        <Route 
          path="/about" 
          element={<About />} 
        />

        <Route 
          path="/services" 
          element={<Services />} 
        />

        <Route 
          path="/projects" 
          element={<Projects />} 
        />

        <Route 
          path="/process" 
          element={<Process />} 
        />

        <Route 
          path="/careers" 
          element={<Careers />} 
        />

        <Route 
          path="/jobs-internships" 
          element={<JobsInternships />} 
        />

        <Route 
          path="/contact" 
          element={<Contact />} 
        />

        <Route 
          path="/faq" 
          element={<FAQ />} 
        />

        <Route 
          path="/privacy-policy" 
          element={<PrivacyPolicy />} 
        />

        <Route 
          path="/terms-conditions" 
          element={<TermsConditions />} 
        />


        {/* 404 */}
        <Route 
          path="*" 
          element={<NotFound />} 
        />


      </Route>

    </Routes>
  );
};


export default AppRoutes;