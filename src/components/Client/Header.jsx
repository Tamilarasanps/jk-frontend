import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

function Header() {
  const Services = [
    { name: "Turnkey House Construction", path: "TurnkeyCostDetailsUI" },
    { name: "Commercial Construction", path: "commercial-construction" },
    { name: "Architectural Construction", path: "architectural-construction" },
    { name: "Structural Designing", path: "structural-designing" },
    { name: "Building Plan Approval", path: "building-plan-approval" },
  ];

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const header = ["Home", "Projects", "Pricing", "About Us", "Contact"];
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div
      className={`p-4 fixed w-full top-0 z-50 transition-all duration-500  ${
        isScrolled
          ? "bg-red-600 shadow-md backdrop-blur-lg"
          : isHome
          ? "bg-transparent"
          : "bg-blue-600"
      }`}
      style={{
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="flex flex-row justify-between items-center relative max-w-7xl mx-auto">
        {/* Logo */}
        <img src={logo} style={{ width: 50, height: 50 }} alt="Logo" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row gap-6 items-center">
          {header.map((item, idx) => (
            <Link
              key={idx}
              to={item === "Home" ? "/" : item.toLowerCase().replace(" ", "")}
            >
              <h3 className="cursor-pointer text-white hover:text-gray-200 transition-colors">
                {item}
              </h3>
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            <h3 className="cursor-pointer text-white hover:text-gray-200 transition-colors">
              Services
            </h3>

            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg">
                <ul
                  className="py-2"
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col py-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <h3 className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                Home
              </h3>
            </Link>

            {/* Mobile Services Submenu */}
            <div>
              <h3
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
              </h3>
              {isServicesOpen && (
                <div className="bg-gray-50">
                  {Services.map((service, index) => (
                    <Link
                      key={index}
                      to={`/services/${service.path}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      <h3 className="px-8 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-sm">
                        {service.name}
                      </h3>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="projects" onClick={() => setIsMobileMenuOpen(false)}>
              <h3 className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                Projects
              </h3>
            </Link>

            <Link to="pricing" onClick={() => setIsMobileMenuOpen(false)}>
              <h3 className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                Pricing
              </h3>
            </Link>

            <Link to="aboutus" onClick={() => setIsMobileMenuOpen(false)}>
              <h3 className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                About Us
              </h3>
            </Link>

            <Link to="contact" onClick={() => setIsMobileMenuOpen(false)}>
              <h3 className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
                Contact
              </h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
