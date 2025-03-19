import { MdDelete, MdEdit, MdFilePresent } from "react-icons/md";
import Button from "@/components/Button";
import { TransactionListProps } from "@/interfaces/transaction";

const TransactionList = ({ transactions, onEdit, onDelete, onShowReceipt }: TransactionListProps) => {
  if (transactions.length === 0) {
    return <p>Não há transações correspondentes.</p>;
  }

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id} className="border-b-2 border-green">
          <div className="h-[100px] grid grid-cols-3 grid-rows-3 gap-2 justify-center items-center">
            <div className="text-green text-sm font-semibold col-start-1 col-end-2 row-start-1 row-end-2">
              {transaction.month}
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
              {transaction.type === "depósito" ? "Depósito" : "Transferência"}
            </div>
            <div className="col-start-1 col-end-2 row-start-3 row-end-4 text-green font-semibold">
              R$ {transaction.value}
            </div>
            <div className="col-start-3 col-end-4 row-start-2 row-end-3 text-sm text-placeholder">
              {transaction.date}
            </div>
            <div className="col-start-3 col-end-4 row-start-3 row-end-4 flex justify-center items-center gap-4 text-green">
              {transaction.receiptUrl && (
                <button onClick={() => onShowReceipt(transaction.receiptUrl ?? null)}>
                  <MdFilePresent size={20} />
                </button>
              )}
              <Button text={<MdEdit size={20} />} onClick={() => onEdit(transaction)} />
              <Button text={<MdDelete size={20} />} onClick={() => onDelete(transaction.id!)} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
