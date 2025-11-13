import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    landArea: "",
    requirements: "",
  });

  // Update form data dynamically
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // On submit → open WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, location, landArea, requirements } = formData;

    // Construct the WhatsApp message
    const message = `Hello! 👋 I’m interested in your services.%0A
*Name:* ${name}%0A
*Phone:* ${phone}%0A
*Email:* ${email}%0A
*Location:* ${location}%0A
*Land Area:* ${landArea}%0A
*Requirements:* ${requirements}`;

    // Your WhatsApp number (no + or spaces)
    const phoneNumber = "9597552718";

    // Redirect to WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      {/* Name */}
      <input
        type="text"
        id="name"
        placeholder="Name *"
        value={formData.name}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
        required
      />

      {/* Phone */}
      <input
        type="tel"
        id="phone"
        placeholder="Phone Number *"
        pattern="[0-9]{10}"
        value={formData.phone}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
        required
      />

      {/* Email */}
      <input
        type="email"
        id="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
        required
      />

      {/* Location */}
      <input
        type="text"
        id="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
      />

      {/* Land Area */}
      <input
        type="number"
        id="landArea"
        placeholder="Land Area (in sqft)"
        value={formData.landArea}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
      />

      {/* Requirements */}
      <textarea
        id="requirements"
        rows="4"
        placeholder="Requirements"
        value={formData.requirements}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder-gray-500"
      ></textarea>

      {/* Submit */}
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-transform transform hover:scale-[1.02] shadow-md hover:shadow-lg"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
