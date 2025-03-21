import { deleteFile, uploadFile } from "@/api/services/file";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "@/api/services/transaction";
import { useTransactionContext } from "@/context/TransactionContext";
import { Transaction } from "@/interfaces/transaction";
import { formatDate } from "@/utils/formatters";
import { useEffect } from "react";
import useAccount from "./useAccount";

const useTransaction = () => {
  const {
    transactionHistory,
    setTransactionHistory,
    transactionType,
    setTransactionType,
    amount,
    setAmount,
  } = useTransactionContext();

  const { account, updateAccountState } = useAccount();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setTransactionHistory(await getTransactions());
      } catch (error) {
        console.error("Erro ao carregar transações:", error);
      }
    };
    fetchTransactions();
  }, [setTransactionHistory]);

  const calculateUpdatedBalance = (currentBalance: number, transaction: Transaction, isReverting = false) => {
    const factor = isReverting ? -1 : 1;
    return transaction.type === "depósito"
      ? currentBalance + factor * transaction.value
      : currentBalance - factor * transaction.value;
  };

  const handleFileUpload = async (file?: File | null, oldUrl?: string) => {
    if (!file) return oldUrl || "";
    if (oldUrl) await deleteFile(oldUrl.split("/").pop()!);
    return await uploadFile(file);
  };

  const handleTransaction = async (file: File | null) => {
    if (transactionType !== "depósito" && transactionType !== "transferência") {
      return alert("Por favor, selecione um tipo de transação válido.");
    }
  
    const value = parseFloat(amount.replace("R$", "").replace(",", "."));
    if (isNaN(value)) return alert("Por favor, insira um valor válido.");
  
    const { formattedDate, month } = formatDate(new Date());

  
    if (transactionType === "transferência" && value > account.balance)
      return alert("Saldo insuficiente para transferência.");

    const receiptUrl = await handleFileUpload(file);
    
    const newTransaction: Transaction = {
      type: transactionType,
      value,
      date: formattedDate,
      month,
      receiptUrl,
    };
  
    try {

      await updateAccountState({
        ...account,
        balance: calculateUpdatedBalance(account.balance, newTransaction),
      });
      const { id } = await createTransaction(newTransaction);
      setTransactionHistory([...transactionHistory, { ...newTransaction, id }]);
    } catch (error: unknown) {
      console.error("Erro ao processar transação:", error);
      alert(JSON.stringify(error))

      // if (typeof error ) {

      // }
      // error as FileUploadError
      // error as UpdateAccountError
      // error as CreateTransactionError
    }
  
    setAmount("");
    setTransactionType("");
  };

  const handleEditTransaction = async (transaction: Transaction, file?: File | null) => {
    try {
      const oldTransaction = transactionHistory.find((t) => t.id === transaction.id);
      if (!oldTransaction) return;
  
      if (!transaction.type || (transaction.type !== "depósito" && transaction.type !== "transferência")) {
        return alert("Por favor, selecione um tipo de transação válido.");
      }
  
      const receiptUrl = await handleFileUpload(file, oldTransaction.receiptUrl);
      
      await updateTransaction(transaction.id!, { 
        ...transaction, 
        type: transaction.type,
        receiptUrl 
      });
  
      let updatedBalance = calculateUpdatedBalance(account.balance, oldTransaction, true);
      updatedBalance = calculateUpdatedBalance(updatedBalance, transaction);
      await updateAccountState({ ...account, balance: updatedBalance });
  
      setTransactionHistory(transactionHistory.map((t) => (t.id === transaction.id ? { ...transaction, receiptUrl } : t)));
    } catch (error) {
      console.error("Erro ao editar transação:", error);
    }
  };

  const handleDeleteTransaction = async (transactionId: number) => {
    try {
      const transaction = transactionHistory.find((t) => t.id === transactionId);
      if (!transaction) return;

      if (transaction.receiptUrl) await deleteFile(transaction.receiptUrl.split("/").pop()!);
      await deleteTransaction(transactionId);
      await updateAccountState({ ...account, balance: calculateUpdatedBalance(account.balance, transaction, true) });
      setTransactionHistory(transactionHistory.filter((t) => t.id !== transactionId));
    } catch (error) {
      console.error("Erro ao excluir transação:", error);
    }
  };

  return {
    transactionHistory,
    transactionType,
    setTransactionType,
    amount,
    setAmount,
    handleTransaction,
    handleEditTransaction,
    handleDeleteTransaction
  };
};

export default useTransaction;
