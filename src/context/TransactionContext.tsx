// import { createContext, useContext, useState, ReactNode } from "react";
// import { Transaction } from "@/interfaces/transaction";

// interface TransactionContextProps {
//   transactionHistory: Transaction[];
//   setTransactionHistory: React.Dispatch<React.SetStateAction<Transaction[]>>;
//   transactionType:"depósito" | "transferência";
//   setTransactionType: React.Dispatch<React.SetStateAction<"depósito" | "transferência"| "">>;
//   amount: string;
//   setAmount: React.Dispatch<React.SetStateAction<string>>;
//   editingTransaction: Transaction | null;
//   setEditingTransaction: React.Dispatch<React.SetStateAction<Transaction | null>>;
// }

// const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

// export const TransactionProvider = ({ children }: { children: ReactNode }) => {
//   const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);
//   const [transactionType, setTransactionType] = useState<"depósito" | "transferência"|>("");
//   const [amount, setAmount] = useState<string>("");
//   const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

//   return (
//     <TransactionContext.Provider
//       value={{
//         transactionHistory,
//         setTransactionHistory,
//         transactionType,
//         setTransactionType,
//         amount,
//         setAmount,
//         editingTransaction,
//         setEditingTransaction,
//       }}
//     >
//       {children}
//     </TransactionContext.Provider>
//   );
// };

// export const useTransactionContext = () => {
//   const context = useContext(TransactionContext);
//   if (!context) {
//     throw new Error("useTransactionContext must be used within a TransactionProvider");
//   }
//   return context;
// };

import { createContext, useContext, useState, ReactNode } from "react";
import { Transaction } from "@/interfaces/transaction";

interface TransactionContextProps {
  transactionHistory: Transaction[];
  setTransactionHistory: React.Dispatch<React.SetStateAction<Transaction[]>>;
  transactionType: "depósito" | "transferência" | ""; // Adicionado "" ao tipo
  setTransactionType: React.Dispatch<React.SetStateAction<"depósito" | "transferência" | "">>; // Adicionado "" ao tipo
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  editingTransaction: Transaction | null;
  setEditingTransaction: React.Dispatch<React.SetStateAction<Transaction | null>>;
}

const TransactionContext = createContext<TransactionContextProps | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);
  const [transactionType, setTransactionType] = useState<"depósito" | "transferência" | "">(""); // Inicializado com ""
  const [amount, setAmount] = useState<string>("");
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  return (
    <TransactionContext.Provider
      value={{
        transactionHistory,
        setTransactionHistory,
        transactionType,
        setTransactionType,
        amount,
        setAmount,
        editingTransaction,
        setEditingTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransactionContext must be used within a TransactionProvider");
  }
  return context;
};