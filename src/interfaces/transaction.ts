export interface Transaction {
    id?: number;
    type: "depósito" | "transferência"| "";
    value: number;
    date: string;
    month: string;
    receiptUrl?: string; 
  }

  export interface TransactionPopupProps {
    transaction: Transaction;
    onClose: () => void;
    onSave: (updatedTransaction: {
      value: number;
      type: "depósito" | "transferência"| "";
      date: string;
      month: string;
      receiptUrl?: string;
    }) => void;
  }

 export interface TransactionListProps {
    transactions: Transaction[];
    onEdit: (transaction: Transaction) => void;
    onDelete: (transactionId: number) => void;
    onShowReceipt: (receiptUrl: string | null) => void;
  }