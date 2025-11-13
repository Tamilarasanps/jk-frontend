import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function SocialMedai() {
  return (
    <div>
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b5998] text-3xl hover:scale-110 transition-transform duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/jk.builders_official?igsh=MWFyendsd2xjc3R3bA==&utm_source=ig_contact_invite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E1306C] text-3xl hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] text-3xl hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF0000] text-3xl hover:scale-110 transition-transform duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
