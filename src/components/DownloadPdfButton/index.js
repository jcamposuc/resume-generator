import html2pdf from 'html2pdf.js/dist/html2pdf.min.js';
import { PDF_OPTIONS } from '../../constants';
import { useState } from 'react';
import pdfIcon from '../../images/pdf-icon.png';

export const DownloadPdfButton = ({ contentRef }) => {
    const [downloaded, setDownloaded] = useState(false);

    const convertToPdf = () => {
        html2pdf().set(PDF_OPTIONS).from(contentRef.current).save();
        setDownloaded(true);
    };

    return (
        <>
            <img
                src={pdfIcon}
                alt="pdf"
                className='w-56 h-56 m-auto mb-3 cursor-pointer hover:shadow-md xl:w-28 xl:h-28'
                onClick={convertToPdf} />
            <button
                type="button"
                onClick={convertToPdf}
                className="block mx-auto w-64 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-sm text-xl px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                {
                    downloaded ? "Downloaded" : "Download"
                }
            </button>
        </>
    );
};