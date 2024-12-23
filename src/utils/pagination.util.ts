import { useState } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number): {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    paginatedData: T[];
    totalPages: number;
} {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    return { currentPage, setCurrentPage, paginatedData, totalPages };
}