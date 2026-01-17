// components/hookPDF.js
import { pdf } from "@react-pdf/renderer";
import React from "react";

// Dynamic import for the PDF document component
const importPdfDocument = async () => {
  const module = await import("./makePDF");
  return module.default;
};

export const usePdfGenerator = () => {
  const downloadPdf = async (data, type = "blog", fileName = "document") => {
    try {
      // Dynamically import the PDF document component
      const PdfDocument = await importPdfDocument();

      // Generate PDF
      const blob = await pdf(
        React.createElement(PdfDocument, { data, type }),
      ).toBlob();

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${fileName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return { downloadPdf };
};
