import React from "react";

function ContactForm() {
  return (
    <form className="flex flex-col space-y-5">
      {/* Name */}
      <div className="flex flex-col relative">
        <input
          type="text"
          id="name"
          placeholder="Name *"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col relative">
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number *"
          pattern="[0-9]{10}"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col relative">
        <input
          type="email"
          id="email"
          placeholder="Email *"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
          required
        />
      </div>

      {/* Location */}
      <div className="flex flex-col relative">
        <input
          type="text"
          id="location"
          placeholder="Location"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
        />
      </div>

      {/* Land Area */}
      <div className="flex flex-col relative">
        <input
          type="number"
          id="landArea"
          placeholder="Land Area (in sqft)"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
        />
      </div>

      {/* Requirements */}
      <div className="flex flex-col relative">
        <textarea
          id="requirements"
          rows="4"
          placeholder="Requirements"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-500"
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
