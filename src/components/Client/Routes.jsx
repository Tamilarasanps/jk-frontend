import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";

import HomePage from "./Home/HomePage";
import Projects from "./Project/Projects";
import AboutUs from "./About/AboutUs";
import Contact from "./Contact/Contact";
import PricingPage from "./Pricing/PricingPage";
import PricingData from "./Pricing/PricingData";
import ConstructionCalculator from "./Pricing/ConstructionCalculator";
import PricePdf from "./Pricing/PricePdf";

import ServiceCards from "./services/OurServices";
import TurnkeyCostUI from "./services/TurnkeyHouse";
import CommercialConstruction from "./services/CommercialConstruction";
import ArchitecturalConstruction from "./services/ArchitecturalConstruction";
import StructuralDesigning from "./services/StructuralDesigning";
import BuildingPlanApproval from "./services/BuildingPlanApproval";

// ✅ Admin
import AdminLayout from "../admin/AdminLayout";
import UploadProjects from "../admin/project/UploadProjects";
import PriceUpdate from "../admin/costing/PriceUpdate";
import PdfUpload from "../admin/project/PdfUpload";

export default function ClientRoutes() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* ---------- CLIENT ROUTES ---------- */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          }
        />

        <Route
          path="/aboutus"
          element={
            <>
              <Header />
              <AboutUs />
              <Footer />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pricing"
          element={
            <>
              <Header />
              <PricePdf />
              <Footer />
            </>
          }
        />

        <Route
          path="/construction-calculater"
          element={
            <>
              <Header />
              <ConstructionCalculator />
              <Footer />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Header />
              <ServiceCards />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/TurnkeyCostDetailsUI"
          element={
            <>
              <Header />
              <TurnkeyCostUI />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/commercial-construction"
          element={
            <>
              <Header />
              <CommercialConstruction />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/architectural-construction"
          element={
            <>
              <Header />
              <ArchitecturalConstruction />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/structural-designing"
          element={
            <>
              <Header />
              <StructuralDesigning />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/building-plan-approval"
          element={
            <>
              <Header />
              <BuildingPlanApproval />
              <Footer />
            </>
          }
        />

        {/* ---------- ADMIN ROUTES ---------- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="price-update" element={<PriceUpdate />} />
          <Route path="pdf-upload" element={<PdfUpload />} />
          <Route path="project-upload" element={<UploadProjects />} />
        </Route>
      </Routes>
    </Router>
  );
}
