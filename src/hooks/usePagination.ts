import { useState, useEffect } from "react";
import { Transaction } from "@/interfaces/transaction";

const usePagination = (transactions: Transaction[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [transactions, totalPages, currentPage]);

  const paginatedItems = transactions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const goToPreviousPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return {
    paginatedItems,
    currentPage,
    totalPages,
    goToPreviousPage,
    goToNextPage,
  };
};

export default usePagination;
