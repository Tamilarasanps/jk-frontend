import pricePdf from "../../../assets/price.pdf";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function PricingPage() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(getResponsiveWidth());

  // ✅ Function to calculate responsive width
  function getResponsiveWidth() {
    if (window.innerWidth < 640) return window.innerWidth * 0.95; // mobile
    if (window.innerWidth < 1024) return window.innerWidth * 0.8; // tablet
    return 800; // desktop
  }

  // ✅ Update width on resize
  useEffect(() => {
    const handleResize = () => setPageWidth(getResponsiveWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="py-16 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Pricing Details
        </h2>

        <div className="flex flex-col items-center justify-center w-full">
          <Document
            file={pricePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p className="text-gray-500">Loading PDF...</p>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div
                key={`page_${index + 1}`}
                className="w-full flex justify-center mb-6"
              >
                <Page
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={pageWidth}
                />
              </div>
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
}
