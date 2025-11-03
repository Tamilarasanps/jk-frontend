import React, { useEffect, useState } from "react";
import Header from "../Header";
import customer from "../../../assets/customer.webp";
import img from "../../../assets/hyb.png";

function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black/60 p-10 rounded-md text-center text-white max-w-3xl mx-auto backdrop-blur-sm">
          <h1 className="text-5xl font-extrabold mb-4 tracking-wide">
            Our Story
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200">
            Building trust, quality, and innovation into every project we take
            on.
          </p>
        </div>
      </section>

      {/* Section 1 - Experience */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6 text-orange-600">
            Experience To Be Trusted
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            JK Construction is a one-stop solution for all your construction
            needs. If you’re looking for professional construction services in
            Chennai, your search ends here. We deliver top-quality construction
            services.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            JK Construction began with a mission to address the challenges
            customers face when finding reliable building contractors — ensuring
            projects are delivered on time, within budget, and with
            uncompromised quality.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction Experience"
          className="rounded-xl shadow-xl w-full order-1 md:order-2"
        />
      </section>

      {/* Section 2 - Philosophy */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-gray-900">
            “It All Starts With Why”
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg md:text-xl font-medium">
            Our journey began with a simple question — why is building a dream
            home still such a painful process? We realized it was time to bring
            trust and transparency to the construction industry.
          </p>
        </div>
      </section>

      {/* Section 3 - Pain Points */}
      <section className="container mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <img
          src={img}
          alt="Customer Pain Points"
          className="rounded-xl shadow-xl order-1 md:order-2 w-full object-cover"
        />
        <div className="order-2 md:order-1">
          <h3 className="text-3xl font-bold mb-6 text-orange-600">
            Pain Points of a Customer
          </h3>
          <ul className="space-y-4 text-gray-700 list-disc pl-6 leading-relaxed text-lg">
            <li>
              Finding a reliable residential building contractor in Chennai is
              challenging. Ensuring high-quality work and timely delivery is
              even harder.
            </li>
            <li>
              Some contractors compromise on quality, use subpar materials,
              delay projects, and cause customers to lose time and money.
            </li>
            <li>
              We wanted to change that — to make building your dream home
              simple, transparent, and stress-free.
            </li>
            <li>
              The world is going digital. You can buy anything online, but
              construction was left behind — we decided to change that.
            </li>
            <li>
              With years of industry experience, we understand the pain points
              of construction and are here to solve them.
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4 - Goals */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src={customer}
              alt="Our Goals - Construction Team Planning"
              className="rounded-xl shadow-xl w-full md:w-4/5 lg:w-3/4 object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
              Our Goals
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg md:text-xl font-medium">
              Customer satisfaction is our topmost priority. We started this
              company after listening to multiple customers’ pain points. We
              decided to solve them and deliver the best quality service.
            </p>
            <ul className="space-y-4 list-disc pl-6 text-gray-700 leading-relaxed text-lg">
              <li>To make sure that there are no project delays.</li>
              <li>
                To provide the best price to the customer and fix work quality
                issues.
              </li>
              <li>To ensure that there are no hidden or surprise costs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
