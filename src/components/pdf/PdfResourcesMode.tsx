import React, { useState } from 'react';
import { FileText, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAppContext } from '../../hooks/useAppContext';
import { languages } from '../../data/languages';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker - use local worker file
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdfjs/pdf.worker.min.mjs`;

export const PdfResourcesMode = () => {
  const { level, language } = useAppContext();
  const t = languages[language];
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  // Detect if device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Map levels to their PDF folders
  const getLevelFolder = () => {
    if (level.toLowerCase().startsWith('a2')) return 'A2';
    return null;
  };

  const levelFolder = getLevelFolder();

  // PDF structure: ab-{number}.pdf for Arbeitsbuch, kb-{number}.pdf for Kursbuch
  const pdfSections = [
    { number: 1, title: 'Lektion 1' },
    { number: 2, title: 'Lektion 2' },
    { number: 3, title: 'Lektion 3' },
    { number: 4, title: 'Lektion 4' },
    { number: 5, title: 'Lektion 5' },
    { number: 6, title: 'Lektion 6' },
    { number: 7, title: 'Lektion 7' },
  ];

  const handleViewPdf = (pdfPath: string) => {
    // On mobile, open in new tab instead of modal viewer
    if (isMobile) {
      window.open(pdfPath, '_blank');
    } else {
      setSelectedPdf(pdfPath);
      setPageNumber(1);
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const closePdfViewer = () => {
    setSelectedPdf(null);
    setPageNumber(1);
    setNumPages(0);
  };

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleDownloadPdf = (pdfPath: string, filename: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!levelFolder) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800 font-semibold">
            PDF resources are not available for this level yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FileText size={28} className="text-blue-600" />
          {t.pdfResources}
        </h2>
        <p className="text-gray-600 mb-6">
          Select a section below to view or download the Arbeitsbuch (Workbook) and Kursbuch (Textbook) PDFs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Arbeitsbuch Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <FileText size={24} />
              {t.arbeitsbuch}
            </h3>
            <div className="space-y-3">
              {pdfSections.map((section) => {
                const pdfPath = `${process.env.PUBLIC_URL}/pdfs/${levelFolder}/ab-${section.number}.pdf`;
                return (
                  <div
                    key={`ab-${section.number}`}
                    className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-semibold text-gray-800">{section.title}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewPdf(pdfPath)}
                          className="flex-1 sm:flex-none px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDownloadPdf(pdfPath, `Arbeitsbuch-${section.title}.pdf`)}
                          className="flex-1 sm:flex-none px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
                        >
                          <Download size={16} />
                          <span className="hidden sm:inline">{t.downloadPdf}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Kursbuch Section */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              <FileText size={24} />
              {t.kursbuch}
            </h3>
            <div className="space-y-3">
              {pdfSections.map((section) => {
                const pdfPath = `${process.env.PUBLIC_URL}/pdfs/${levelFolder}/kb-${section.number}.pdf`;
                return (
                  <div
                    key={`kb-${section.number}`}
                    className="bg-white rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="font-semibold text-gray-800">{section.title}</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewPdf(pdfPath)}
                          className="flex-1 sm:flex-none px-3 py-1.5 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleDownloadPdf(pdfPath, `Kursbuch-${section.title}.pdf`)}
                          className="flex-1 sm:flex-none px-3 py-1.5 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
                        >
                          <Download size={16} />
                          <span className="hidden sm:inline">{t.downloadPdf}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full h-full max-w-5xl max-h-[95vh] flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <FileText size={24} className="text-blue-600" />
                <h3 className="text-base sm:text-lg font-bold text-gray-800">PDF Viewer</h3>
              </div>
              <button
                onClick={closePdfViewer}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Close"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* PDF Content */}
            <div className="flex-1 overflow-auto bg-gray-100 flex flex-col items-center py-4">
              <Document
                file={selectedPdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                  <div className="flex items-center justify-center p-8">
                    <div className="text-gray-600 font-semibold">Loading PDF...</div>
                  </div>
                }
                error={
                  <div className="flex items-center justify-center p-8">
                    <div className="text-red-600 font-semibold">Failed to load PDF. Please try downloading it instead.</div>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  width={Math.min(window.innerWidth - 32, 800)}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              </Document>
            </div>

            {/* Footer with Controls */}
            <div className="flex items-center justify-between p-3 sm:p-4 border-t bg-gray-50">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium transition-colors ${
                  pageNumber <= 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="text-sm sm:text-base font-semibold text-gray-700">
                Page {pageNumber} of {numPages}
              </div>

              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium transition-colors ${
                  pageNumber >= numPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
