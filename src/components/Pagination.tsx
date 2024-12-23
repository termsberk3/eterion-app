import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationControlProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
    currentPage,
    totalPages,
    setCurrentPage
}) => {

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mb-4">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
            >
                <ChevronLeftIcon className="w-6 h-6 text-gray-400" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`p-2 rounded-md text-gray-400 hover:bg-gray-100 ${pageNumber === currentPage ? 'bg-white text-blue-500' : ''}`}
                >
                    {pageNumber}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
            >
                <ChevronRightIcon className="w-6 h-6 text-gray-400" />
            </button>
        </div>
    );
};

export default PaginationControl;