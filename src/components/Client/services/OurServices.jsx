import React, { useState } from "react";
import {
  Home,
  Paintbrush,
  Armchair,
  Utensils,
  Bath,
  Box,
  Package,
  Flame,
  Compass,
  Lightbulb,
  User,
  Building,
  Leaf,
  Factory,
  Landmark,
  TreePine,
  Building2,
  Ruler,
  Sofa,
} from "lucide-react";
import SocialMedai from "../Home/SocialMedai";

const services = [
  {
    id: "01",
    title: "Home Interior",
    description:
      "Elevate the ambiance of your living spaces with our expertly crafted and personalized home interior solutions.",
    icon: Home,
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "02",
    title: "Home Decor",
    description:
      "Immerse yourself in a world of aesthetics with our curated home decor services, adding style and character to every corner.",
    icon: Sofa,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "03",
    title: "Interior Designer",
    description:
      "Our skilled interior designers bring creativity and functionality together, turning your vision into a reality that reflects your unique taste.",
    icon: Paintbrush,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "04",
    title: "Livingroom Interior",
    description:
      "Create a warm and inviting atmosphere in your living room with our customized interior design concepts.",
    icon: Armchair,
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "05",
    title: "Kitchen Interior",
    description:
      "Experience the perfect blend of functionality and style in your kitchen with our innovative kitchen interior designs.",
    icon: Utensils,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "06",
    title: "Bathroom Decor",
    description:
      "Transform your bathroom into a spa-like retreat with our elegant and practical bathroom decor solutions.",
    icon: Bath,
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "07",
    title: "Modular Furniture",
    description:
      "Maximize space utilization and aesthetic appeal with our modular furniture designs tailored to suit your lifestyle.",
    icon: Box,
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: "08",
    title: "Kitchen Cabinets",
    description:
      "Optimize storage and enhance your kitchen's aesthetics with our bespoke kitchen cabinet solutions.",
    icon: Package,
    color: "from-red-500 to-rose-600",
  },
  {
    id: "09",
    title: "Pooja Rooms",
    description:
      "Infuse spirituality into your home with our thoughtfully designed pooja rooms that harmonize tradition with modern aesthetics.",
    icon: Flame,
    color: "from-yellow-500 to-amber-600",
  },
  {
    id: "010",
    title: "Home 3D Designer",
    description:
      "Visualize your dream space before it's built with our cutting-edge 3D design services, ensuring a seamless transition from concept to reality.",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "011",
    title: "Space Saving Ideas",
    description:
      "Our innovative space-saving ideas provide functional solutions for compact living spaces without compromising on style.",
    icon: Lightbulb,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "012",
    title: "Residential Interior Designer",
    description:
      "Tailored interior design services for homes that capture your personality and meet your specific needs.",
    icon: User,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: "013",
    title: "Commercial Architect",
    description:
      "Transform commercial spaces into efficient and visually appealing environments that enhance productivity and leave a lasting impression.",
    icon: Building,
    color: "from-slate-500 to-gray-600",
  },
  {
    id: "014",
    title: "Residential Architect",
    description:
      "Craft distinctive homes with our residential architectural services, focusing on functionality, aesthetics, and individual preferences.",
    icon: Home,
    color: "from-teal-500 to-emerald-600",
  },
  {
    id: "015",
    title: "Sustainable/Green Design Architect",
    description:
      "Embrace eco-friendly design principles with our sustainable and green architectural solutions that prioritize environmental consciousness.",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "016",
    title: "Industrial Architect",
    description:
      "Optimize industrial spaces for efficiency and safety while maintaining a focus on architectural aesthetics.",
    icon: Factory,
    color: "from-orange-500 to-red-600",
  },
  {
    id: "017",
    title: "Conservation Architect",
    description:
      "Preserve and enhance the historical and cultural significance of structures with our conservation architecture expertise.",
    icon: Landmark,
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: "018",
    title: "Landscape Architect",
    description:
      "Bring outdoor spaces to life with our landscape architecture services, creating harmonious environments that blend nature and design.",
    icon: TreePine,
    color: "from-lime-500 to-green-600",
  },
  {
    id: "019",
    title: "Urban Designer",
    description:
      "Contribute to vibrant and sustainable urban environments with our urban design services, addressing the complex challenges of modern city living.",
    icon: Building2,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "020",
    title: "Interior Architect",
    description:
      "Seamlessly integrate architecture and interior design, ensuring a cohesive and visually stunning result for your spaces.",
    icon: Ruler,
    color: "from-fuchsia-500 to-purple-600",
  },
];

export default function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br mt-20 from-slate-50 via-white to-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-red-600 bg-red-50 px-4 py-2 rounded-full tracking-wider uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            The Best Service For You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transform your spaces with our comprehensive range of interior
            design and architectural services
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className="mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}
                    >
                      <IconComponent size={28} className="text-white" />
                    </div>
                  </div>

                  {/* Service Number */}
                  <div className="absolute top-6 right-6">
                    <span className="text-6xl font-bold text-gray-100 group-hover:text-white/20 transition-colors duration-300">
                      {service.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed relative z-10 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  {/* <div className="mt-4 relative z-10">
                    <span className="inline-flex items-center text-sm font-semibold text-red-600 group-hover:text-white transition-colors duration-300">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div> */}
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
      <SocialMedai />
    </section>
  );
}
