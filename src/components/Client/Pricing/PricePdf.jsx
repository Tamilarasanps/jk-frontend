import React from "react";
import pricePdf from "../../../../public/pricepdf.pdf";

export default function PricePdf() {
  return (
    <div className="w-full h-screen p-2">
      <iframe
        src={pricePdf}
        className="w-full h-full rounded-lg shadow"
        style={{ border: "none" }}
        title="Price PDF"
      />
    </div>
  );
}
