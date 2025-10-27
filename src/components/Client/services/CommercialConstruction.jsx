import React from "react";
import ContactForm from "../Home/ContactForm";

function CommercialConstruction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 md:p-10">
      <div className="flex flex-col md:flex-row bg-white">
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
            <h3 className="text-4xl font-semibold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-gray-800">
              <li className="text-2xl">✅ Work progress updates</li>
              <li className="text-2xl">✅ 100% transparent pricing</li>
              <li className="text-2xl">✅ Quality assurance</li>
              <li className="text-2xl">✅ On-time handover</li>
              <li className="text-2xl">✅ Hassle-free management</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Form */}

        <div className="md:w-1/2 max-w-md bg-gray-100  shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Get in Touch
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default CommercialConstruction;
