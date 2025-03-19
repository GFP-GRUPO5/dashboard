import { useState, useMemo } from "react";
import usePagination from "@/hooks/usePagination";
import { Transaction } from "@/interfaces/transaction";

const formatTransactionDate = (dateString: string) => {
  const [day, month, year] = dateString.split("/");
  return new Date(`${year}-${month}-${day}`).toISOString().split("T")[0];
};

export const useFilteredTransactions = (transactions: Transaction[], itensPerPage: number) => {
  const [filters, setFilters] = useState({
    date: "",
    type: "",
    minValue: "",
    maxValue: "",
  });

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesDate = filters.date
        ? formatTransactionDate(transaction.date) === filters.date
        : true;

      const matchesType = filters.type ? transaction.type === filters.type : true;
      const matchesMinValue = filters.minValue ? transaction.value >= parseFloat(filters.minValue) : true;
      const matchesMaxValue = filters.maxValue ? transaction.value <= parseFloat(filters.maxValue) : true;

      return matchesDate && matchesType && matchesMinValue && matchesMaxValue;
    });
  }, [transactions, filters]);

  const pagination = usePagination(filteredTransactions, itensPerPage);

  return { filters, setFilters, filteredTransactions, ...pagination };
};
