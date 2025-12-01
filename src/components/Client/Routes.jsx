import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import HomePage from "./Home/HomePage";
import Services from "./services/Services";
import Projects from "./Project/Projects";
import AboutUs from "./About/AboutUs";
import Contact from "./Contact/Contact";
import PricingPage from "./Pricing/PricingPage";
import Footer from "./Footer/Footer";

import UploadProjects from "../admin/project/UploadProjects";
import TurnkeyCostDetailsUI from "./services/TurnkeyHouse";
import TurnkeyCostUI from "./services/TurnkeyHouse";
import CommercialConstruction from "./services/CommercialConstruction";
import ArchitecturalConstruction from "./services/ArchitecturalConstruction";
import StructuralDesigning from "./services/StructuralDesigning";
import BuildingPlanApproval from "./services/BuildingPlanApproval";
import ScrollToTop from "./ScrollToTop";
import PricingData from "./Pricing/PricingData";
import ConstructionCalculator from "./Pricing/ConstructionCalculator";
import OurServices from "./services/OurServices";
import ServiceCards from "./services/OurServices";
import PricePdf from "./Pricing/PricePdf";

export default function ClientRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<PricePdf />} />
        <Route path="/pricingData" element={<PricingData />} />
        <Route path="/construction-cost" element={<PricingPage />} />
        <Route
          path="/construction-calculater"
          element={<ConstructionCalculator />}
        />
        <Route path="/services" element={<ServiceCards />} />
        <Route
          path="/services/TurnkeyCostDetailsUI"
          element={<TurnkeyCostUI />}
        />
        <Route
          path="/services/commercial-construction"
          element={<CommercialConstruction />}
        />
        <Route
          path="/services/architectural-construction"
          element={<ArchitecturalConstruction />}
        />
        <Route
          path="/services/structural-designing"
          element={<StructuralDesigning />}
        />
        <Route
          path="/services/building-plan-approval"
          element={<BuildingPlanApproval />}
        />

        <Route path="/pricePdf" element={<PricePdf />} />

        {/* admin routes */}

        <Route path="/admin" element={<UploadProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}
