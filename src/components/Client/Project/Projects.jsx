import React from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config/api";
import { useEffect } from "react";
import { useState } from "react";
function Projects() {
  const navigate = useNavigate();
  console.log("BASE_URL:", BASE_URL);
  const [images, setImages] = useState([]);
  console.log("images :", images);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/upload/allFiles`);
        console.log("response :", response);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, []);

  const projects = [
    {
      name: "Skyline Residency",
      location: "OMR, Chennai",
      type: "2 & 3 BHK Apartments",
      status: "Ongoing",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      name: "GreenVille Villas",
      location: "ECR, Chennai",
      type: "Luxury Villas",
      status: "Ready to Move",
      image: "https://images.unsplash.com/photo-1600585154154-1b6a2e1f9d3e",
    },
    {
      name: "Urban Heights",
      location: "Anna Nagar, Chennai",
      type: "Premium Apartments",
      status: "Under Construction",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Projects Grid */}
      <section className="py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-1">
                  📍 <span className="font-medium">{project.location}</span>
                </p>
                <p className="text-gray-600 mb-1">🏠 {project.type}</p>
                <p
                  className={`font-semibold ${
                    project.status === "Ongoing"
                      ? "text-blue-600"
                      : project.status === "Ready to Move"
                      ? "text-green-600"
                      : "text-orange-600"
                  }`}
                >
                  {project.status}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2>Uploaded Images</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {images.length > 0 ? (
              images.map((url, index) => (
                <img
                  key={index}
                  src={url.data}
                  alt={`uploaded-${index}`}
                  style={{
                    width: "200px",
                    height: "auto",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none"; // hide broken images
                  }}
                />
              ))
            ) : (
              <p>No images found.</p>
            )}
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-[#FFB703] to-[#FB8500] text-white">
        <h1 className="text-4xl font-bold mb-4">
          90+ Ongoing Residential Projects in Trichy
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Created with heart, built with mind. Turn your dream home into reality
          with the best builders in Trichy. From luxury villas to
          budget-friendly apartments, we’ve got you covered.
        </p>
        <button
          onClick={() => navigate("/construction-cost")}
          className="mt-8 bg-white text-[#FB8500] hover:bg-gray-100 px-8 py-3 rounded-md font-semibold text-lg shadow-md transition-transform duration-200 hover:scale-105"
        >
          Get Free Quote
        </button>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 mt-8">
          <div>
            <div className="text-[#FB8500] text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
            <p className="text-gray-600">
              Our projects are built with precision, quality materials, and a
              commitment to excellence.
            </p>
          </div>
          <div>
            <div className="text-[#FB8500] text-4xl mb-4">🏡</div>
            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
            <p className="text-gray-600">
              Every project is designed with functionality and aesthetics in
              mind — modern homes for modern living.
            </p>
          </div>
          <div>
            <div className="text-[#FB8500] text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">
              No hidden charges. Get accurate construction cost estimates before
              you begin your project.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
