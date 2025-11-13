import React, { useState } from "react";
import { TurnkeyCostDetails } from "../config/costdData";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import ContactForm from "../Home/ContactForm";
import SocialMedai from "../Home/SocialMedai";

const PackageCard = ({ title, data, colorClass }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      [section]: !prev[section],
    }));
  };

  const renderContent = (content, indent = false) => {
    if (Array.isArray(content)) {
      return content.map((item, idx) => {
        if (typeof item === "object" && item !== null) {
          return (
            <div key={idx} className={`${indent ? "ml-4" : ""} mt-2`}>
              {item.type && (
                <div className="font-semibold text-gray-800 mb-1">
                  {item.type}
                </div>
              )}
              {item.details && renderContent(item.details, true)}
              {item.DoorSize && renderContent(item.DoorSize, true)}
            </div>
          );
        }
        return (
          <div
            key={idx}
            className={`flex items-start gap-2 mb-2 ${
              indent ? "ml-4" : ""
            } bg-white/70 hover:bg-indigo-50 transition-colors duration-200 rounded-lg px-3 py-2 shadow-sm border border-gray-100 text-gray-800 text-sm`}
          >
            <span className="text-indigo-500 text-lg leading-none">•</span>
            <span className="leading-snug">{item}</span>
          </div>
        );
      });
    }
    return <div className="text-sm text-gray-700">{content}</div>;
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl border-t-4 ${colorClass} transition-all duration-300`}
    >
      {/* Header */}
      <div
        className={`${colorClass.replace("border", "bg")} bg-opacity-10 p-6`}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
        <div className="text-3xl font-extrabold text-gray-900">
          ₹{data.Price}
          <span className="text-lg font-normal text-gray-600"> /sq ft</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        {Object.entries(data).map(([key, value]) => {
          if (key === "Price") return null;
          return (
            <div key={key} className="border border-gray-100 rounded-xl">
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 hover:text-[#FB8500]">
                  {key}
                </span>
                <span className="text-gray-600 text-lg">
                  {expandedSections[key] ? "−" : "+"}
                </span>
              </button>

              {expandedSections[key] && (
                <div className="mt-2 p-4 bg-gray-50 rounded-b-xl border-t border-gray-200">
                  {renderContent(value)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CommercialConstruction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 md:p-10 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Left Section - Info */}
        <div className="md:w-2/3 py-10 px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            What is commercial construction?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Commercial construction refers to the process of planning,
            designing, and building structures intended for commercial or
            business purposes. It involves the construction of non-residential
            buildings and facilities that are used for various business
            activities. Commercial construction projects can encompass a wide
            range of structures, including.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li>✅ Work progress updates</li>
              <li>✅ 100% transparent pricing</li>
              <li>✅ Quality assurance</li>
              <li>✅ On-time handover</li>
              <li>✅ Hassle-free management</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/3 bg-gray-100 border-l border-gray-200 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Get in Touch
          </h3>
          <ContactForm />
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-3">
            Turnkey Construction Packages
          </h1>
          <p className="text-lg text-gray-600">
            Choose the perfect package for your dream home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard
            title="Basic Package"
            data={{ ...TurnkeyCostDetails.basic, Price: 1699 }}
            colorClass="border-blue-500"
          />
          <PackageCard
            title="Standard Package"
            data={{ ...TurnkeyCostDetails.standard, Price: 1799 }}
            colorClass="border-purple-500"
          />
          <PackageCard
            title="Premium Package"
            data={{ ...TurnkeyCostDetails.Premium, Price: 1999 }}
            colorClass="border-pink-500"
          />
        </div>
      </div>

      {/* Social Media */}
      <SocialMedai />
    </div>
  );
};

export default CommercialConstruction;
