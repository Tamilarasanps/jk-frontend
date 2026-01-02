import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClientReport from "./ClientReport";
import ContactUs from "./ContactUs";
import Projects from "../Project/Projects";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedai"; // make sure file name matches

import house1 from "../../../assets/house1.jpg";
import house2 from "../../../assets/house2.jpg";
import house3 from "../../../assets/house3.jpg";
import house4 from "../../../assets/house4.jpg";

// Image array moved outside component for performance
const imgAr = [house1, house2, house3, house4];

export default function HomePage() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-slide background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imgAr.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] md:h-screen overflow-hidden flex items-center justify-center mt-10">
        {/* Background Images */}
        {imgAr.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out transform ${
              index === currentImage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-10 lg:px-20 gap-10 md:gap-6 py-16">
          {/* LEFT TEXT BLOCK */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
            <div className="bg-black/50 p-6 md:p-10 rounded-2xl backdrop-blur-sm text-white max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
                We are one of the best building contractors in TamilNadu
              </h1>
              <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
                With over 15 years of expertise in the industry, we provide
                reliable construction services backed by unmatched quality and
                attention to detail.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate("/projects")}
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold shadow-lg transition-all duration-300"
                >
                  Our Portfolio
                </button>
                <button
                  onClick={() => navigate("/pricing")}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md text-white font-semibold shadow-lg transition-all duration-300"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="bg-white/90 p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-md backdrop-blur-md">
              <h3 className="text-center text-2xl font-semibold mb-4 text-gray-800">
                Request a Callback
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT REPORT SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20">
        <ClientReport />
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-12 md:py-20 bg-gray-50 px-4 md:px-10 lg:px-20">
        <Projects showContact={false} />
      </section>

      {/* SOCIAL MEDIA */}
      <section className="py-12 px-4 md:px-10 lg:px-20">
        <SocialMedia />
      </section>

      {/* CONTACT US */}
      <section className="bg-gray-100 py-12 md:py-20 px-4 md:px-10 lg:px-20">
        <ContactUs />
      </section>
    </div>
  );
}
