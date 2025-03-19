import { useState } from "react";
import { Transaction } from "@/interfaces/transaction";
import PaginationControl from "./PaginationControl";
import TransactionPopup from "./TransactionPopup";
import PopUp from "../PopUp";
import TransactionList from "./TransactionList";
import { useFilteredTransactions } from "@/hooks/useFilteredTransaction";
import { TransactionFilter } from "./Filter";

const itensPerPage = 4;

interface ExtractProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transactionId: number) => void;
}

const Extract = ({ transactions, onEdit, onDelete }: ExtractProps) => {
  const { filters, setFilters, paginatedItems, currentPage, totalPages, goToPreviousPage, goToNextPage } =
    useFilteredTransactions(transactions, itensPerPage);

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
            <img src={receiptUrl} alt="Recibo" className="max-w-full max-h-[500px]" />
          </div>
        )}
      </PopUp>
    </div>
  );
};

export default Extract;
