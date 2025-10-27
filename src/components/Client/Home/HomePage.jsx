import React from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import ClientReport from "./ClientReport";
import ContactUs from "./ContactUs";
import Footer from "../Footer/Footer";
import ContactForm from "./ContactForm";

function HomePage() {
  const navigation = useNavigate();
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-6 py-10 bg-gray-100 gap-10">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            We are one of the best building contractors in Chennai
          </h4>
          <h1 className="text-xl md:text-2xl text-gray-600 mb-6">
            We provide construction services with 15 years warranty
          </h1>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
              Our Portfolio
            </button>
            <button
              className="bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition duration-200"
              onClick={() => navigation("/construction-cost")}
            >
              Get Free Quote
            </button>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="md:w-1/2 max-w-md bg-gray-200  shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Contact Form
          </h3>
          <ContactForm />
        </div>
      </div>
      <ClientReport />
      <ContactUs />
    </div>
  );
}

export default HomePage;
