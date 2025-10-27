import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  const Services = [
    { name: "Turnkey House Construction", path: "TurnkeyCostDetailsUI" },
    { name: "Commercial Construction", path: "commercial-construction" },
    { name: "Architectural Construction", path: "architectural-construction" },
    { name: "Structural Designing", path: "structural-designing" },
    { name: "Building Plan Approval", path: "building-plan-approval" },
  ];

  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#4606DA] to-[#D62828] p-4 sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center relative">
        {/* <h3 className="text-white font-bold text-xl">Logo</h3> */}
        <img src={logo} style={{ width: 50, height: 50 }} />

        <div className="flex flex-row gap-6 items-center">
          <Link to="/">
            <h3 className="text-white cursor-pointer hover:text-black">Home</h3>
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            <h3 className="text-white cursor-pointer hover:text-black">
              Services
            </h3>

            {isServicesOpen && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <ul className="py-2">
                  {Services.map((service, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"
                    >
                      <Link
                        to={`/services/${service.path}`}
                        className="block text-gray-800"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="projects">
            <h3 className="text-white cursor-pointer hover:text-black">
              Projects
            </h3>
          </Link>

          <Link to="aboutus">
            <h3 className="text-white cursor-pointer hover:text-black">
              About Us
            </h3>
          </Link>

          <Link to="contact">
            <h3 className="text-white cursor-pointer hover:text-black">
              Contact
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
