import React, { useState, useMemo } from "react";

const ConstructionCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState("Basic Package");

  const packageRates = {
    "Basic Package": 1999,
    "Premium Package": 2199,
    "Premium Plus": 2349,
    "Elite Package": 2449,
    "Ultra Luxury Package": 3049,
  };

  const [areas, setAreas] = useState({
    groundFloor: 0,
    firstFloor: 0,
    secondFloor: 0,
    thirdFloor: 0,
    fourthFloor: 0,
    waterSump: 0,
    septicTank: 0,
    compoundWall: 0,
  });

  const rates = useMemo(() => {
    return {
      basic: packageRates[selectedPackage],
      sump: 24,
      septic: 24,
      wall: 400,
    };
  }, [selectedPackage]);

  // Update area input values
  const handleChange = (field, value) => {
    const numberValue = parseFloat(value) || 0;
    setAreas((prev) => ({ ...prev, [field]: numberValue }));
  };

  // Totals for each section
  const totals = useMemo(
    () => ({
      groundFloor: areas.groundFloor * rates.basic,
      firstFloor: areas.firstFloor * rates.basic,
      secondFloor: areas.secondFloor * rates.basic,
      thirdFloor: areas.thirdFloor * rates.basic,
      fourthFloor: areas.fourthFloor * rates.basic,
      waterSump: areas.waterSump * rates.sump,
      septicTank: areas.septicTank * rates.septic,
      compoundWall: areas.compoundWall * rates.wall,
    }),
    [areas, rates]
  );

  // Grand total
  const grandTotal = useMemo(
    () => Object.values(totals).reduce((acc, val) => acc + val, 0),
    [totals]
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 mt-20">
      <h1 className="text-4xl font-bold text-center text-[#FB8500] mb-2">
        Construction Cost Calculator
      </h1>
      <p className="text-center text-gray-600 mb-10">
        You can arrive at your construction estimate here.
      </p>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Package Selection */}
        <div className="text-center mb-10">
          <label className="block text-lg font-semibold text-gray-800 mb-2">
            Choose Your Package
          </label>
          <select
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
          >
            {Object.keys(packageRates).map((pkg) => (
              <option key={pkg} value={pkg}>
                {pkg} @ ₹{packageRates[pkg]}/sqft
              </option>
            ))}
          </select>

          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            <span className="text-[#FB8500]">{selectedPackage}</span> @ ₹
            {rates.basic}/sqft
          </h2>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-gray-700 border-b pb-2 mb-3">
          <span>Type of Construction</span>
          <span className="text-center">Area</span>
          <span className="text-center">Unit</span>
          <span className="text-center">Price</span>
          <span className="text-center">Total</span>
        </div>

        {/* Items */}
        {[
          {
            key: "groundFloor",
            label: "Ground Floor Built-up Area",
            unit: "sqft",
            rate: rates.basic,
          },
          {
            key: "firstFloor",
            label: "First Floor Built-up Area",
            unit: "sqft",
            rate: rates.basic,
          },
          {
            key: "secondFloor",
            label: "Second Floor Built-up Area",
            unit: "sqft",
            rate: rates.basic,
          },
          {
            key: "thirdFloor",
            label: "Third Floor Built-up Area",
            unit: "sqft",
            rate: rates.basic,
          },
          {
            key: "fourthFloor",
            label: "Fourth Floor Built-up Area",
            unit: "sqft",
            rate: rates.basic,
          },
          {
            key: "waterSump",
            label: "RCC Water Sump Size",
            unit: "ltr",
            rate: rates.sump,
          },
          {
            key: "septicTank",
            label: "RCC Septic Tank Size",
            unit: "ltr",
            rate: rates.septic,
          },
          {
            key: "compoundWall",
            label: "Compound Wall Size",
            unit: "sqft",
            rate: rates.wall,
          },
        ].map(({ key, label, unit, rate }) => (
          <div
            key={key}
            className="grid grid-cols-5 gap-4 py-3 border-b text-sm items-center"
          >
            <span className="font-medium text-gray-800">{label}</span>

            <input
              type="number"
              value={areas[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder="Enter area"
              className="border rounded-lg px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-[#FB8500]"
            />

            <span className="text-center text-gray-700">{unit}</span>
            <span className="text-center text-gray-700">₹{rate}</span>
            <span className="text-center text-gray-900 font-semibold">
              ₹{totals[key].toLocaleString("en-IN")}
            </span>
          </div>
        ))}

        {/* Grand Total */}
        <div className="grid grid-cols-5 gap-4 py-4 mt-4 text-lg font-bold border-t">
          <span className="col-span-4 text-right text-gray-900">
            Grand Total
          </span>
          <span className="text-center text-[#FB8500]">
            ₹{grandTotal.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConstructionCalculator;
