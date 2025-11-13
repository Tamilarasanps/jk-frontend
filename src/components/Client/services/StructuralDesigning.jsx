import React from "react";
import ContactForm from "../Home/ContactForm";
import build from "../../../assets/building.webp";
import structure from "../../../assets/structure-design.webp";
import dohh from "../../../assets/do.webp";
import img1 from "../../../assets/img1.jpg";
import SocialMedai from "../Home/SocialMedai";

function StructuralDesigning() {
  return (
    <div className="mt-32 mb-16 px-6">
      {/* --- Section 1: Hero Info + Contact Form --- */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="md:w-2/3 py-10 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            What does a Structural Consultant do?
          </h2>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              A structural consultant is the unsung hero of the architectural
              world, crafting the very backbone of our dreams and aspirations.
              Their role is not just about steel, concrete, and calculations —
              it’s an emotional commitment to the integrity of our built
              environment.
            </p>
            <p>
              Structural consultants are like artists, meticulously crafting the
              skeleton of a building. Every beam, column, and foundation is a
              brushstroke on a canvas of strength and precision.
            </p>
            <p>
              Their deepest responsibility is safety — ensuring that structures
              can withstand the test of time and protect lives. This is not just
              a job; it’s a duty to humanity.
            </p>
            <p>
              Driven by innovation and collaboration, they blend creativity and
              engineering to bring architectural visions to life. In their
              hands, buildings become symbols of safety, aspiration, and
              progress.
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/3 bg-slate-50 border-l border-slate-200 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-slate-800">
            Get in Touch
          </h3>
          <ContactForm />
        </div>
      </div>

      {/* --- Section 2: Top Consultants --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
          Top Structural Consultants in Trichy
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={dohh}
              alt="Top Structural Consultants"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              What is Structural Designing?
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Structural design is the process of determining the stability,
              strength, and rigidity of structures. It ensures that a building
              can safely carry its intended load throughout its life.
            </p>
            <p className="text-slate-700 leading-relaxed">
              A properly designed structure prevents failures that could lead to
              serious consequences. From foundation depth to column size,
              accurate calculations make all the difference.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Necessity of Structural Design --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
          Necessity of Structural Design
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Why do we charge for Structural Architecture?
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Building a home is a lifetime dream. Constructing without proper
              load calculations can end in disaster. Many contractors guess
              column sizes or foundation depths — risking safety and investment.
            </p>
            <p className="text-slate-700 leading-relaxed">
              A professional structural design ensures your home is safe and
              future-ready for extra floors. For a project worth ₹30–40 lakhs, a
              design costing ₹15–20k protects your entire investment — a small
              price for lifelong safety.
            </p>
          </div>
          <div className="rounded-2xl ">
            <img
              src={build}
              alt="Structural Importance"
              className="rounded-lg "
            />
          </div>
        </div>
      </section>

      {/* --- Section 4: Structural Design Process --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-10">
          Structural Design Process
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={structure}
            alt="Structural Design Process"
            className="w-full  "
          />
        </div>
      </section>

      {/* --- Section 5: What We Offer --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              What We Offer
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We are a team of architects, planners, and structural engineers
              dedicated to delivering precise and reliable structural
              engineering services in Chennai. From floor plans to 3D elevation
              and soil testing, our process ensures safety and excellence.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our expertise covers:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>RCC Structures</li>
              <li>Steel Structures</li>
              <li>Pre-engineered Buildings</li>
              <li>Composite Structures</li>
              <li>Pre-stressed Concrete Structures</li>
              <li>Lightweight Structures</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={img1}
              alt="Our Structural Work"
              className="w-full h-[400px]"
            />
          </div>
        </div>
      </section>
      <SocialMedai />
    </div>
  );
}

export default StructuralDesigning;
