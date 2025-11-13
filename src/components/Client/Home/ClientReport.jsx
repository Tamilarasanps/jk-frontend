import React from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaRulerCombined,
  FaShieldAlt,
} from "react-icons/fa";

function ClientReport() {
  return (
    <div className="bg-gray-200 py-10 px-4 flex flex-wrap justify-center gap-36 text-center">
      {/* Projects */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-56 hover:shadow-lg transition duration-200">
        <FaBuilding className="text-green-600 text-5xl mb-3" />
        <h2 className="text-3xl font-bold text-gray-800">150+</h2>
        <p className="text-gray-600 text-lg font-medium">Projects</p>
      </div>

      {/* Quality Checks */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-56 hover:shadow-lg transition duration-200">
        <FaCheckCircle className="text-blue-600 text-5xl mb-3" />
        <h2 className="text-3xl font-bold text-gray-800">350+</h2>
        <p className="text-gray-600 text-lg font-medium">Quality Checks</p>
      </div>

      {/* Sq.ft Completed */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-56 hover:shadow-lg transition duration-200">
        <FaRulerCombined className="text-yellow-500 text-5xl mb-3" />
        <h2 className="text-3xl font-bold text-gray-800">1,000,000+</h2>
        <p className="text-gray-600 text-lg font-medium">Sq.ft Completed</p>
      </div>

      {/* Warranty */}
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 w-56 hover:shadow-lg transition duration-200">
        <FaShieldAlt className="text-red-500 text-5xl mb-3" />
        <h2 className="text-3xl font-bold text-gray-800">15 +</h2>
        <p className="text-gray-600 text-lg font-medium">Of Experience</p>
      </div>
    </div>
  );
}

export default ClientReport;
