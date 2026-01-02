import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../Client/config/api";
import { useNavigate } from "react-router-dom";

export default function PriceUpdate() {
  const [packageForm, setPackageForm] = useState({
    basicPackage: "",
    standardPackage: "",
    premiumPackage: "",
  });

  const [price, setPrice] = useState([]);

  // Handles input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPackageForm({ ...packageForm, [name]: value });
  };

  // Fetch pricing data
  const fetchData = async () => {
    try {
      const getPrice = await axios.get(`${BASE_URL}/prices`);
      setPrice(getPrice.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  // Handles form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/prices`, packageForm);
      // Reset the form or show a success message
      setPackageForm({
        basicPackage: "",
        standardPackage: "",
        premiumPackage: "",
      });
      fetchData();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const navigate = useNavigate();
  const move = () => {
    navigate("/uploadPdf");
  };
  return (
    <div className="mt-16 mx-auto max-w-4xl p-4">
      {/* Form for updating prices */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Price Packages
        </h2>

        <div className="mb-4">
          <label
            htmlFor="basicPackage"
            className="block text-lg font-semibold text-gray-700"
          >
            Basic Package
          </label>
          <input
            type="text"
            name="basicPackage"
            id="basicPackage"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            placeholder="Enter the Basic Package"
            value={packageForm.basicPackage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="standardPackage"
            className="block text-lg font-semibold text-gray-700"
          >
            Standard Package
          </label>
          <input
            type="text"
            name="standardPackage"
            id="standardPackage"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            placeholder="Enter the Standard Package"
            value={packageForm.standardPackage}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="premiumPackage"
            className="block text-lg font-semibold text-gray-700"
          >
            Premium Package
          </label>
          <input
            type="text"
            name="premiumPackage"
            id="premiumPackage"
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            placeholder="Enter the Premium Package"
            value={packageForm.premiumPackage}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Update Price
        </button>
      </form>

      {/* Display the current prices */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Current Price Packages</h2>
        <div className="space-y-4">
          {price.map((price, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Basic Package: {price.basicPackage}
              </h3>
              <h3 className="text-xl font-semibold text-gray-800">
                Standard Package: {price.standardPackage}
              </h3>
              <h3 className="text-xl font-semibold text-gray-800">
                Premium Package: {price.premiumPackage}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <button onClick={move}> Navigate to uploadPdf </button>
    </div>
  );
}
