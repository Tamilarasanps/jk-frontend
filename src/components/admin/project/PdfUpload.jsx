import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Client/config/api";

export default function PdfUpload() {
  const [file, setFile] = useState(null);
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Fetch all PDFs
  
  const fetchPdfs = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/getPdf`);
      setPdfs(res.data.files || []);
    } catch (err) {
      console.error("Failed to fetch PDFs");
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setSuccess(false);
    setError("");
  };

  const handleSend = async () => {
    if (!file) {
      setError("Please select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      setLoading(true);
      setError("");

      await axios.post(`${BASE_URL}/api/uploadPdf`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccess(true);
      setFile(null);
      fetchPdfs(); // refresh list
    } catch (err) {
      setError("Failed to upload PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // DELETE PDF
  const handleDelete = async (filename) => {
    if (!window.confirm("Are you sure you want to delete this PDF?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/pdfs/${filename}`);
      fetchPdfs(); // refresh list after delete
    } catch (err) {
      alert("Failed to delete PDF");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Upload PDF
        </h2>

        {/* Upload Section */}
        <div className="mb-4">
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-medium
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        {success && (
          <p className="text-sm text-green-600 mb-3">
            PDF uploaded successfully!
          </p>
        )}

        <button
          onClick={handleSend}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium mb-6
            ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Uploading..." : "Upload PDF"}
        </button>

        {/* PDF List Section */}
        <h3 className="text-lg font-semibold mb-3 text-gray-700">
          Uploaded PDFs
        </h3>

        {pdfs.length === 0 ? (
          <p className="text-sm text-gray-500">No PDFs uploaded</p>
        ) : (
          <ul className="space-y-2">
            {pdfs.map((pdf) => (
              <li
                key={pdf}
                className="flex justify-between items-center bg-gray-50 p-2 rounded-md"
              >
                <span className="text-sm text-gray-800 truncate">{pdf}</span>
                <button
                  onClick={() => handleDelete(pdf)}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
