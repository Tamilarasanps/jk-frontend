import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Header() {
  const Services = [
    { name: "Turnkey House Construction", path: "TurnkeyCostDetailsUI" },
    { name: "Commercial Construction", path: "commercial-construction" },
    { name: "Architectural Construction", path: "architectural-construction" },
    { name: "Structural Designing", path: "structural-designing" },
    { name: "Building Plan Approval", path: "building-plan-approval" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Projects", "Pricing", "Services","OurWorks", "About Us"];

  const getLinkPath = (item) => {
    if (item === "Home") return "/";
    return `/${item.toLowerCase().replace(" ", "")}`;
  };

  const isActiveLink = (item) => {
    const path = getLinkPath(item);
    if (item === "OurWorks" && location.pathname.includes("/OurWorks"))
      return true;
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 shadow-md backdrop-blur-lg"
          : isHome
          ? "backdrop-blur-lg"
          : "bg-slate-900/95 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LEFT: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
        </Link>

        {/* CENTER: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-lg">
          {links.map((item, idx) =>
            item === "OurWorks" ? (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
              >
                <span
                  className={`cursor-pointer transition-all pb-1 ${
                    isActiveLink(item)
                      ? "text-[#FB8500] border-b-2 border-[#FB8500]"
                      : "hover:[#FB8500]"
                  }`}
                >
                  OurWorks
                </span>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-3 w-72 bg-white text-slate-800 shadow-xl rounded-xl border border-slate-100">
                    <ul
                      className="py-2"
                      onMouseLeave={() => setIsServicesOpen(false)}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {Services.map((service, index) => (
                        <li key={index}>
                          <Link
                            to={`/services/${service.path}`}
                            className={`block px-4 py-2 hover:bg-slate-200 transition-colors ${
                              location.pathname.includes(service.path)
                                ? "bg-slate-200 font-semibold text-[#FB8500]"
                                : ""
                            }`}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={idx}
                to={getLinkPath(item)}
                className={`transition-all pb-1 ${
                  isActiveLink(item)
                    ? "text-[#FB8500] border-b-2 border-[#FB8500]"
                    : "hover:text-[#FB8500]"
                }`}
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* RIGHT: Contact Us Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-[#FB8500] to-[#FFB703] text-white px-6 py-2.5 rounded-full hover:from-indigo-600 hover:to-blue-600 transition-all shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mx-4 mt-2 py-3">
          <div className="flex flex-col text-slate-800">
            {links.map((item, idx) =>
              item === "Services" ? (
                <div key={idx}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition-colors ${
                      isActiveLink(item) ? "text-indigo-600 font-semibold" : ""
                    }`}
                  >
                    Services
                  </button>
                  {isServicesOpen && (
                    <div className="bg-slate-50">
                      {Services.map((service, index) => (
                        <Link
                          key={index}
                          to={`/services/${service.path}`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                          className={`block px-8 py-2 hover:bg-slate-100 text-sm ${
                            location.pathname.includes(service.path)
                              ? "text-indigo-600 font-semibold"
                              : ""
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={idx}
                  to={getLinkPath(item)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 hover:bg-slate-100 transition-colors ${
                    isActiveLink(item) ? "text-indigo-600 font-semibold" : ""
                  }`}
                >
                  {item}
                </Link>
              )
            )}

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 mt-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full text-center mx-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
