import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClientReport from "./ClientReport";
import ContactUs from "./ContactUs";
import Footer from "../Footer/Footer";
import Projects from "../Project/Projects";
import ContactForm from "./ContactForm"; // make sure this is imported

import house1 from "../../../assets/house1.jpg";
import house2 from "../../../assets/house2.jpg";
import house3 from "../../../assets/house3.jpg";
import house4 from "../../../assets/house4.jpg";

function HomePage() {
  const navigation = useNavigate();
  const imgAr = [house1, house2, house3, house4];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imgAr.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imgAr.length]);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Background Image Layer */}
        {imgAr.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className=" inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Foreground Content (always visible) */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 md:px-10 gap-8">
          {/* Left - Text Block */}
          <div className="flex flex-col items-center justify-center text-center text-white w-full md:w-1/2">
            <div className="bg-black/40 rounded-xl p-6 md:p-10 max-w-2xl mx-auto backdrop-blur-sm">
              <h4 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                We are one of the best building contractors in Chennai
              </h4>
              <h1 className="text-lg md:text-2xl mb-6 drop-shadow-lg">
                We provide construction services with 15 years warranty
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
                  Our Portfolio
                </button>
                <button
                  onClick={() => navigation("/construction-cost")}
                  className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-200"
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="w-full md:w-1/2 flex justify-center mt-32 ">
            <div className="bg-white/90 rounded-xl shadow-lg p-6 md:p-10 max-w-md w-full backdrop-blur-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <ClientReport />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default HomePage;
