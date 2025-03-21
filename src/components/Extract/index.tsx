import { useFilteredTransactions } from "@/hooks/useFilteredTransaction";
import { Transaction } from "@/interfaces/transaction";
import Image from "next/image";
import { useState } from "react";
import PopUp from "../PopUp";
import { TransactionFilter } from "./Filter";
import PaginationControl from "./PaginationControl";
import TransactionList from "./TransactionList";
import TransactionPopup from "./TransactionPopup";

const itensPerPage = 4;

interface ExtractProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transactionId: number) => void;
}

const Extract = ({ transactions, onEdit, onDelete }: ExtractProps) => {
  const {
    filters,
    setFilters,
    paginatedItems,
    currentPage,
    totalPages,
    goToPreviousPage,
    goToNextPage 
  } = useFilteredTransactions(transactions, itensPerPage);

  console.log(transactions)

  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);

  return (
    <div className="bg-lightgray p-6 rounded-lg flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Extrato</h3>

      <TransactionFilter filters={filters} setFilters={setFilters} />

      <TransactionList
        transactions={paginatedItems}
        onEdit={setEditingTransaction}
        onDelete={onDelete}
        onShowReceipt={setReceiptUrl}
      />

      {paginatedItems.length > 0 && (
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
        />
      )}

      {editingTransaction && (
        <TransactionPopup
          transaction={editingTransaction}
          onClose={() => setEditingTransaction(null)}
          onSave={(updatedTransaction) => {
            onEdit({ ...editingTransaction, ...updatedTransaction });
            setEditingTransaction(null);
          }}
        />
      )}

      <PopUp
        isOpen={!!receiptUrl}
        title="Recibo"
        onClose={() => setReceiptUrl(null)}
        onSubmit={() => setReceiptUrl(null)}
        hideButtons
      >
        {receiptUrl && (
          <div className="flex justify-center items-center h-full">
            <Image src={receiptUrl} alt="Recibo" className="max-w-full max-h-[500px]" />
          </div>
        )}
      </PopUp>
    </div>
  );
};

export default Extract;
