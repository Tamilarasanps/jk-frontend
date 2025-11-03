import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function FrequentlyAskedQuestion() {
  const [openIndex, setOpenIndex] = useState(null);

  const fqa = [
    {
      question: "How can I choose the best construction company in tirchy?",
      answer:
        "Selecting the best construction company requires taking into account variables including experience, reputation, project portfolio, and client feedback. Before choosing a single plan of action, do some research and weigh your possibilities.",
    },
    {
      question: "What are the key factors affecting architecture costs?",
      answer:
        "Architecture costs are affected by factors such as location, project size and complexity, material quality, labor costs, and market conditions.",
    },
    {
      question: "How can I appraisal the amount of architecture my house?",
      answer:
        "Utilize online architecture amount calculators that take into account factors like location, square footage, material preferences, and architecture type to estimate the cost of building a house.",
    },
    {
      question:
        "Are there eco-friendly architecture options accessible in tirchy?",
      answer:
        "Yes, many architecture companies in tirchy now offer eco-friendly and sustainable building solutions that use green construction practices, energy-efficient designs, and waste reduction strategies.",
    },
    {
      question: "What are the emerging trends in construction technology?",
      answer:
        "Modern architecture trends include modular construction, 3D printing, Building Information Modeling (BIM), and the use of advanced materials to improve efficiency and sustainability.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-center font-bold text-3xl mt-20 mb-10">FAQ's</h1>
      <div className="space-y-4">
        {fqa.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-xl border border-gray-100"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {item.question}
              </h3>
              {openIndex === index ? (
                <ChevronUp className="text-gray-700" size={22} />
              ) : (
                <ChevronDown className="text-gray-700" size={22} />
              )}
            </button>

            {/* Animated answer reveal */}
            <div
              className={`px-5 pb-5 text-gray-700 text-lg leading-relaxed transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAskedQuestion;
