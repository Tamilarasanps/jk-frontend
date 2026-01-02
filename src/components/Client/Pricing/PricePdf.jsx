import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";
import ConstructionCalculator from "./ConstructionCalculator";

export default function PricePdf() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState("");

  const fetchPdfs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/getPdf`);
      setPdfs(res.data.files || []);

      // auto select first pdf
      if (res.data.files?.length > 0) {
        setSelectedPdf(res.data.files[0]);
      }
    } catch (err) {
      console.error("Failed to fetch PDFs");
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  // Build full PDF URL
  const pdfUrl = selectedPdf ? `${BASE_URL}/uploads/${selectedPdf}` : "";

  return (
    <div className="mt-20 p-4">
      {/* PDF VIEWER */}
      {selectedPdf ? (
        <>
          <div className="w-full h-screen mb-4">
            <iframe
              src={pdfUrl}
              className="w-full h-full rounded-lg shadow"
              style={{ border: "none" }}
              title="Price PDF"
            />
          </div>

          {/* Download */}
          <div className="text-center mt-4">
            <a href={pdfUrl} download className="text-blue-500 hover:underline">
              Download PDF
            </a>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No PDF available</p>
      )}

      <ConstructionCalculator />
    </div>
  );
}
