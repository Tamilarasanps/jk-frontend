import React from "react";

function ContactForm() {
  return (
    <form className="flex flex-col space-y-5">
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          required
        />
      </div>

      {/* Location */}
      <div className="flex flex-col">
        <label htmlFor="location" className="text-gray-700 font-medium mb-1">
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="Enter your location"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Land Area */}
      <div className="flex flex-col">
        <label htmlFor="landArea" className="text-gray-700 font-medium mb-1">
          Land Area (in sqft)
        </label>
        <input
          type="number"
          id="landArea"
          placeholder="Enter your land area"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      {/* Requirements */}
      <div className="flex flex-col">
        <label
          htmlFor="requirements"
          className="text-gray-700 font-medium mb-1"
        >
          Requirements
        </label>
        <textarea
          id="requirements"
          rows="4"
          placeholder="Please explain your requirements..."
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form> 
  );
}

export default ContactForm;
