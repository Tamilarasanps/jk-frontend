import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* About Section */}
        <div className="md:w-1/3">
          <h3 className="text-[#FB8500] text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            We are one of the best building contractors in Chennai, providing
            top-notch construction services with a 15-year warranty. Your dream
            project is in safe hands!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="md:w-1/3">
          <h3 className="text-[#FB8500] text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#FB8500] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/construction-cost"
                className="hover:text-[#FB8500] transition-colors"
              >
                Get Free Quote
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#FB8500] transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media Section */}
        <div className="md:w-1/3">
          <h3 className="text-[#FB8500] text-xl font-bold mb-4">Follow Us</h3>

          {/* Social Icons */}
          <div className="flex space-x-6 text-gray-400 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FB8500] transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FB8500] transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FB8500] transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FB8500] transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-gray-400 text-sm">
            <div>
              <h4 className="font-semibold text-gray-200">Contact:</h4>
              <p>95975 52718 / 98420 35786</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200">Email:</h4>
              <p>Jabbar.jkbuilders2025@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200">Address:</h4>
              <p>No 10 VOC Nagar, 3rd Street, Thiruverumbur, Trichy-620013</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JK Builders. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
