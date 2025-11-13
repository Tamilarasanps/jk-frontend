import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import ContactUs from "../Home/ContactUs";
import { BASE_URL } from "../config/api";
import map from "../../../assets/tiruchymap.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects({ showContact = true }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/getImages`);
        setImages(response.data.data || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden mt-32">
      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-white via-[#FFB703]/20 to-[#FB8500]/40">
        {/* LEFT - IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            // src="https://www.mapsofindia.com/maps/tamilnadu/districts/tiruchchirappalli-district-map.jpg"
            src={map}
            alt="Trichy Map"
            className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
          />
        </div>

        {/* RIGHT - TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 md:p-10 lg:p-20 bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-white flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            90+ Ongoing Residential Projects in Trichy
          </h1>
          <p className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Created with heart, built with mind. Turn your dream home into
            reality with the best builders in Trichy. From luxury villas to
            budget-friendly apartments, we’ve got you covered.
          </p>
          <button
            onClick={() => navigate("/construction-cost")}
            className="mt-8 bg-white text-[#FB8500] hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-base md:text-lg shadow-md transition-transform duration-300 hover:scale-105 mx-auto lg:mx-0"
          >
            Get Free Quote
          </button>
        </div>
      </section>

      {/* PROJECTS CAROUSEL SECTION */}
      <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-10">
          Our Projects
        </h2>

        {images.length > 0 ? (
          <div className="max-w-7xl mx-auto">
            <Slider {...settings}>
              {[...images].reverse().map((item) => (
                <div key={item._id} className="px-2 sm:px-4">
                  <div className="relative w-full h-64 sm:h-72 md:h-80 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 group">
                    <img
                      src={`${BASE_URL}/uploads/${item.image}`}
                      alt="Project"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold">
                      Project View
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <p className="text-gray-600 text-center">Loading projects...</p>
        )}
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-10 lg:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* CARD 1 */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="text-[#FB8500] text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600">
              Our projects are built with precision, quality materials, and a
              commitment to excellence.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="text-[#FB8500] text-4xl mb-4">🏡</div>
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-600">
              Every project is designed with functionality and beauty in mind —
              modern homes for modern living.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2">
            <div className="text-[#FB8500] text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden charges — get accurate construction cost estimates
              before you begin your project.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      {showContact && <ContactUs />}
    </div>
  );
}

export default Projects;
