import React from "react";
import contact from "../../../assets/contact.jpg";
import ContactForm from "../Home/ContactForm";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 px-6 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Let’s Build Something Great Together!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? Reach out and let’s discuss how{" "}
          <span className="font-semibold text-blue-600">JK Construction</span>{" "}
          can help turn your vision into reality.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={contact}
            alt="Contact JK Construction"
            className="w-full h-80 md:h-full object-cover"
          />
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 p-10 lg:p-14 space-y-6 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-800">Get in Touch</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We’re just a call or message away. Let’s talk about your ideas and
            bring them to life with precision and care.
          </p>

          <div className="flex flex-col space-y-5 mt-6">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <span className="text-2xl text-blue-600">📞</span>
              <span className="text-lg font-medium text-gray-800">
                <a
                  href="tel:9597552718"
                  className="hover:text-blue-600 transition"
                >
                  95975 52718
                </a>{" "}
                /{" "}
                <a
                  href="tel:9842035786"
                  className="hover:text-blue-600 transition"
                >
                  98420 35786
                </a>
              </span>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <span className="text-2xl text-blue-600">📧</span>
              <span className="text-lg text-gray-800">
                <a
                  href="mailto:Jabbar.jkbuilders2025@gmail.com"
                  className="hover:text-blue-600 transition"
                >
                  Jabbar.jkbuilders2025@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-3xl mx-auto bg-white p-10 md:p-12 rounded-2xl shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          We’re Always Here to Help You
        </h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Fill out the form below, and our team will get in touch with you
          shortly.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
