import React from "react";
import axios from "axios";
import { BASE_URL } from "../../Client/config/api";
import { useState } from "react";
import { useEffect } from "react";

function UploadProjects() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  console.log("selectedFiles :", selectedFiles);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    if (files.length > 0) {
      const filePreviews = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setSelectedFiles(filePreviews);
    }
  };

  const uploadFiles = async () => {
    if (!selectedFiles) {
      alert("Please select Images");
    }
    const formData = new FormData();
    // console.log("formData :", formData);
    selectedFiles.forEach((item) => formData.append("file", item.file));
    try {
      const response = await axios.post(`${BASE_URL}/api/upload`, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log("Response :", response.data);
      alert("Images Uploaded Successfully");
      setSelectedFiles("");
    } catch (error) {
      console.log("upload failed");
      console.log("error :", error);
      alert(error.message);
    }
  };
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/getImages`);
        setImages(response.data.data || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const deleteImage = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/api/deleteImage/${id}`);
console.log('response :',response)
      // remove deleted image from UI without reload
      setImages((prev) => prev.filter((img) => img._id !== id));

      alert("Image deleted successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to delete image");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Upload Your Projects
        </h1>
        <p className="text-gray-500 text-sm">
          Share your latest project files with the community
        </p>
      </div>

      {/* Upload Box */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <label
          htmlFor="file-upload"
          className="block text-sm font-medium text-gray-700 mb-3"
        >
          Choose File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          multiple
          className="block w-full text-sm text-gray-700 
                     file:mr-4 file:py-2 file:px-4 
                     file:rounded-md file:border-0 
                     file:text-sm file:font-semibold 
                     file:bg-indigo-50 file:text-indigo-600 
                     hover:file:bg-indigo-100 
                     cursor-pointer"
        />

        {/* Upload Button */}

        {selectedFiles && selectedFiles.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-4">
            {selectedFiles.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.preview}
                  alt={`preview-${index}`}
                  className="w-32 h-32 object-cover rounded-md border shadow-sm"
                />
                <p className="text-sm text-gray-600 mt-1">{item.file.name}</p>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md 
                     font-semibold hover:bg-indigo-700 transition-all duration-200"
          onClick={uploadFiles}
        >
          Upload Project
        </button>
      </div>
      <div className="flex flex-wrap justify-center mt-10">
        {[...images].reverse().map((item) => (
          <div key={item._id} className="px-2 sm:px-4 mb-6">
            <div className="relative w-64 h-64 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 group">
              <img
                src={`${BASE_URL}/uploads/${item.image}`}
                alt="Project"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />

              {/* DELETE BUTTON */}
              <button
                onClick={() => deleteImage(item._id)}
                className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md text-sm shadow hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadProjects;
