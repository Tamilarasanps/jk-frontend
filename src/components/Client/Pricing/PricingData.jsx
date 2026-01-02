import React from "react";
import { priceData } from "../config/priceData";

const PackageCard = ({ title, data, colorClass }) => {


  return (
    <div className={`p-6 border rounded-lg shadow-md ${colorClass}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-1 text-center">
        {title}
      </h2>

      <div className="text-3xl font-extrabold text-center text-gray-900">
        ₹{data.Price}
        <span className="text-lg font-normal text-gray-600"> /sq ft</span>
      </div>

      <div className="mt-4 space-y-1">
        {Object.entries(data).map(
          ([key, value], idx) =>
            key !== "Price" && ( // skip Price since we already display it
              <div className="flex justify-between" key={idx}>
                <span className="font-medium text-gray-700">{key}</span>
                {/* <span className="text-gray-500">{value}</span> */}
              </div>
            )
        )}
      </div>
    </div>
  );
};

const PricingData = () => {
  return (
    <div className="mt-32">
      <h2 className="text-3xl font-bold text-center mb-8">Hello</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(priceData).map(([pkgName, pkgData]) => (
          <PackageCard key={pkgName} title={pkgName} data={pkgData} />
        ))}
      </div>
    </div>
  );
};

export default PricingData;
