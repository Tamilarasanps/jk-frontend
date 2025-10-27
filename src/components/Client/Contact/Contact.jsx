import React from "react";
import contact from "../../../assets/contact.jpg";
import ContactForm from "../Home/ContactForm";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Let’s Build Something Great Together!
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? Reach out and let’s discuss how{" "}
          <span className="font-semibold text-blue-600">JK Construction</span>{" "}
          can help turn your vision into reality.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="w-full md:w-1/2">
          <img
            src={contact}
            alt="Contact JK Construction"
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
          <p className="text-gray-600">
            We’re just a call away. Let’s discuss your ideas and bring them to
            life.
          </p>

          <div className="flex flex-col space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-2xl text-blue-600">📞</span>
              <span className="text-lg font-medium text-gray-700">
                95975 52718 / 98420 35786
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <span className="text-2xl text-blue-600">📧</span>
              <span className="text-lg text-gray-700">
                info@jkconstruction.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          We’re Always Here to Help You
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
