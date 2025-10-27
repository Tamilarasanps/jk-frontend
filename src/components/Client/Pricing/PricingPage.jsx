import React from "react";
import Header from "../Header";

function PricingPage() {
  return (
    <div className="mt-10">
      <div className="text-center font-bold  text-3xl">
        Our Pricing Package{" "}
      </div>
      <div className="felx flex justify-between p-4">
        <div className="bg-red-600 p-4 rounded-md">
          <h2 className="text-center font-bold text-white ">Basic</h2>
          <p className="text-white ">
            Price may vary depanding on no.of.floors
          </p>
          <h1 className="text-3xl font-bold text-white text-center mt-10">
            ₹ 1899 /sft
          </h1>
        </div>

        <div className="bg-red-500 p-4 rounded-md">
          <h2 className="text-center font-bold text-white ">Standard</h2>
          <p className="text-white ">
            Price may vary depanding on no.of.floors
          </p>
          <h1 className="text-3xl font-bold text-white text-center mt-10">
            ₹ 2099 /sft
          </h1>
        </div>

        <div className="bg-red-500 p-4 rounded-md">
          <h2 className="text-center font-bold text-white  ">premium</h2>
          <p className="text-white ">
            Price may vary depanding on no.of.floors
          </p>
          <h1 className="text-3xl font-bold text-white text-center mt-10">
            ₹ 2499 /sft
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
