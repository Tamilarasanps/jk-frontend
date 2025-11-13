import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact Us for Your Free Consultation
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
          Let’s discuss your dream project and make it a reality! Our experts
          are ready to assist you with design, cost estimation, and construction
          planning.
        </p>

        {/* Call-to-action Button */}
        <button
          onClick={() => navigate("/construction-cost")}
          className="bg-[#FB8500] hover:bg-[#E36414] text-white px-8 py-3 rounded-md font-semibold text-lg shadow-lg transition-transform duration-200 hover:scale-105"
        >
          Get Free Quote
        </button>

        {/* Divider */}
        <div className="border-t border-gray-500 my-10 w-2/3 mx-auto"></div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center">
          <FaPhoneAlt className="text-[#FB8500] text-2xl" />
          <h3 className="text-2xl font-semibold">
            Give Us a Call:{" "}
            <span className="text-[#FB8500] hover:underline cursor-pointer">
              +91 959 755 2718
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
