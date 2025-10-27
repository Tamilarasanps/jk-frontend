import React from "react";
import Header from "../Header";

function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center h-[60vh] flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-10 rounded-md text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Building trust, quality, and innovation into every project we take
            on.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Construction Experience"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Experience To Be Trusted
          </h2>
          <p className="text-gray-700 mb-4">
            Jk Construction is a one-stop solution for all your construction
            needs. If you’re looking for professional construction services in
            Chennai, your search ends here. We deliver top-quality construction
            services.
          </p>
          <p className="text-gray-700">
            Jk Construction began with a mission to address the challenges
            customers face when finding reliable building contractors — ensuring
            projects are delivered on time, within budget, and with
            uncompromised quality.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">
            “It All Starts With Why”
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Our journey began with a simple question — why is building a dream
            home still such a painful process? We realized it was time to bring
            trust and transparency to the construction industry.
          </p>
        </div>
      </section>

      {/* Section 3 - Pain Points */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
          alt="Customer Pain Points"
          className="rounded-lg shadow-lg order-1 md:order-2"
        />
        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-semibold mb-6">
            Pain Points of a Customer
          </h3>
          <ul className="space-y-4 text-gray-700 list-disc pl-5">
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
      <section className="bg-gray-100 py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
            alt="Our Goals - Construction Team Planning"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Goals</h2>
            <p className="max-w-3xl text-gray-700 mb-8">
              Customer satisfaction is our topmost priority. We started this
              company after listening to multiple customers’ pain points. We
              decided to solve them and deliver the best quality service.
            </p>
            <ul className="space-y-4 list-disc pl-6 text-gray-700">
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
