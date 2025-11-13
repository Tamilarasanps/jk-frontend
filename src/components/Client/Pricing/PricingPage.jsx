import React, { useState } from "react";
import { priceData } from "../config/priceData";
import FrequentlyAskedQuestion from "../services/FrequentlyAskedQuestion";
import SocialMedai from "../Home/SocialMedai";
import ConstructionCalculator from "./ConstructionCalculator";

const PackageCard = ({
  title,
  data,
  colorClass,
  expandedSections,
  toggleSection,
}) => {
  const renderContent = (content, indent = false) => {
    if (Array.isArray(content)) {
      return content.map((item, idx) => (
        <div key={idx}>{renderContent(item, indent)}</div>
      ));
    }

    if (typeof content === "object" && content !== null) {
      return Object.entries(content).map(([key, value]) => (
        <div key={key} className={`${indent ? "ml-4" : ""} mt-2`}>
          <div className="font-semibold text-gray-800 mb-1">{key}</div>
          <div className="ml-4">{renderContent(value, true)}</div>
        </div>
      ));
    }

    return (
      <div
        className={`flex items-start gap-2 mb-2 ${
          indent ? "ml-4" : ""
        } bg-white hover:bg-indigo-50 transition-all duration-200 rounded-lg px-3 py-2.5 border border-gray-200 hover:border-indigo-300 text-gray-800 text-sm shadow-sm`}
      >
        <span className="text-indigo-500 text-lg leading-none mt-0.5">•</span>
        <span className="leading-relaxed flex-1">{content}</span>
      </div>
    );
  };

  return (
    <div
      className={`flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl border-t-4 ${colorClass} transition-all duration-300 h-full`}
    >
      {/* Header */}
      <div
        className={`p-6 text-center ${colorClass.replace(
          "border",
          "bg"
        )} bg-opacity-10 rounded-t-2xl`}
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {title.replace(/([A-Z])/g, " $1")}
        </h2>
        <p className="text-3xl font-extrabold text-gray-900">
          ₹{data.Price}
          <span className="text-lg font-medium text-gray-600"> /sq ft</span>
        </p>
      </div>

      {/* Expandable Sections */}
      <div className="flex-1 p-5 space-y-3">
        {Object.entries(data).map(([key, value]) => {
          if (key === "Price") return null;
          return (
            <div
              key={key}
              className="border border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex justify-between items-center p-4 bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-white rounded-xl transition-all duration-200 group"
              >
                <span className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span
                  className={`text-xl font-bold transition-colors ${
                    expandedSections[key] ? "text-indigo-500" : "text-gray-400"
                  }`}
                >
                  {expandedSections[key] ? "−" : "+"}
                </span>
              </button>

              {expandedSections[key] && (
                <div className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-b-xl border-t border-gray-200">
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



const TurnkeyCostUI = () => {
  const colorClasses = [
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-purple-500",
    "border-pink-500",
  ];

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => {
      // If the same section is clicked → close it
      if (prev[section]) {
        return {};
      }
      // Otherwise, close all and open only the clicked one
      return { [section]: true };
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 min-h-screen mt-20">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#FB8500] to-[#ff9f33] bg-clip-text text-transparent">
          Construction Packages
        </h1>
        <p className="text-center text-gray-600 mb-14 text-lg">
          Choose the perfect package for your dream home
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {Object.entries(priceData).map(([pkgName, pkgData], index) => (
            <div key={pkgName} className="flex">
              <PackageCard
                title={pkgName}
                data={pkgData}
                colorClass={colorClasses[index % colorClasses.length]}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
              />
            </div>
          ))}
        </div>
        <div className="">
          <ConstructionCalculator />
        </div>
        {/* FAQs and Socials */}
        <div className="mt-24 space-y-16">
          <FrequentlyAskedQuestion />
          <SocialMedai />
        </div>
      </div>
    </div>
  );
};

export default TurnkeyCostUI;
