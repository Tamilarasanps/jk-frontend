import React from "react";
import ContactForm from "../Home/ContactForm";

import dohh from "../../../assets/archit.avif";
import img1 from "../../../assets/img1.jpg";
import ec from "../../../assets/ec.webp";
import fmbsketch from "../../../assets/sketch.webp";
import chitta from "../../../assets/chitta.webp";
import saledeed from "../../../assets/saledeed.webp";
import { ClipboardCheck, Building2, FileBadge, Ruler } from "lucide-react";
import SocialMedai from "../Home/SocialMedai";

function BuildingPlanApproval() {
  return (
    <div className="mt-32 mb-16 px-6 text-slate-800">
      {/* --- Section 1: Hero Info + Contact Form --- */}
      <section className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left: Info */}
        <div className="md:w-2/3 py-10 px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Building Plan Approval in Trichy
          </h2>

          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>
              The cost of building plan approval in Tamil Nadu depends on
              project specifics, such as plot size, type of construction, and
              location within city limits. Fees are governed by CMDA, DTCP, and
              municipal authorities.
            </p>
            <p>
              Charges typically include scrutiny fees, development fees, and
              infrastructure development costs. Government revisions may also
              affect pricing.
            </p>
            <p>
              For accurate details, it’s always best to consult local
              authorities or verify the latest CMDA/DTCP notifications.
            </p>
            <p>
              Hiring a professional architect or consultant ensures your project
              complies with norms and avoids approval delays.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              What We Do
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Get approvals without delay</li>
              <li>Provide regular work progress updates</li>
              <li>Deliver stable & economical designs</li>
              <li>Ensure on-time handover</li>
              <li>Offer hassle-free project management</li>
            </ul>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/3 bg-slate-50 border-l border-slate-200 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-slate-800">
            Get in Touch
          </h3>
          <ContactForm />
        </div>
      </section>

      {/* --- Section 2: Services Offered --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-10">
          Services We Offer
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Building Plan Preparation",
              icon: ClipboardCheck,
            },
            {
              title: "CMDA Building Approval",
              icon: Building2,
            },
            {
              title: "DTCP Building Approval",
              icon: FileBadge,
            },
            {
              title: "Licensed Surveyor Services",
              icon: Ruler,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <item.icon className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: Top Consultants --- */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src={dohh}
            alt="Building Plan Consultants"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-4">
            Building Plan Approval Support
          </h3>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>
              Zone checks, submission drawings, and document updates per norms.
            </li>
            <li>Coordination with CMDA, DTCP, and local authorities.</li>
            <li>Government liaison for NOC and Wet Land approvals.</li>
            <li>Completion certificate assistance for clients.</li>
            <li>Trusted consultants for Trichy and surrounding regions.</li>
            <li>Delivery of original approved drawings and permits.</li>
          </ul>
        </div>
      </section>

      {/* --- Section 4: Application Process --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-12">
          How to Get Building Plan Approval
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Understanding the Application Process
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              To obtain plan approval, submit a completed application form to
              the CMDA, Municipality, or Panchayat Union, depending on your
              project location.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Two forms are used — Form ‘A’ for layout approval and Form ‘B’ for
              residential or commercial buildings. You can collect these from
              your local authority office upon payment.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={img1}
              alt="Approval Process"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- Section 5: Required Documents --- */}
      <section className="max-w-6xl mx-auto mt-20">
        <h2 className="text-center text-3xl font-bold text-slate-900 mb-10">
          Documents Required for Building Plan Approval
        </h2>
        <p className="text-center text-slate-600 mb-10">
          Requirements may vary depending on your project and approval type.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              img: ec,
              title: "Encumbrance Certificate (EC)",
              desc: "30 years record required for ownership validation.",
            },
            {
              img: saledeed,
              title: "Sale Deed / Mother Document",
              desc: "Proof of land ownership with registration details.",
            },
            {
              img: chitta,
              title: "Chitta & Adangal",
              desc: "Land classification and ownership verification.",
            },
            {
              img: fmbsketch,
              title: "FMB Sketch",
              desc: "Detailed field measurement map from authorities.",
            },
          ].map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <img
                src={doc.img}
                alt={doc.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h4 className="font-semibold text-lg mb-2">{doc.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <SocialMedai />
    </div>
  );
}

export default BuildingPlanApproval;
