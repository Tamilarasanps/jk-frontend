import React from "react";
import pricePdf from "../../../../public/pricepdf.pdf";
import ConstructionCalculator from "./ConstructionCalculator";

export default function PricePdf() {
  return (
    <div className="">
      <div className="w-full h-screen p-2 mt-20">
        <iframe
          src={pricePdf}
          className="w-full h-full rounded-lg shadow"
          style={{ border: "none" }}
          title="Price PDF"
        />
      </div>

      {/* Add a download link for mobile users */}
      <div className="text-center mt-4">
        <a href={pricePdf} download className="text-blue-500 hover:underline">
          Download PDF
        </a>
      </div>

      <ConstructionCalculator />
    </div>
  );
}
