import PopUp from "@/components/PopUp";
import useTransaction from "@/hooks/useTransaction";
import { TransactionPopupProps } from "@/interfaces/transaction";
import { useState } from "react";
import { FiFileText, FiUpload } from "react-icons/fi";

const TransactionPopup = ({ transaction, onClose, onSave }: TransactionPopupProps) => {
  const [value, setValue] = useState(transaction.value.toString());
  const [type, setType] = useState<"depósito" | "transferência">(transaction.type);
  const [file, setFile] = useState<File | null>(null);

  const { handleEditTransaction } = useTransaction();

  const handleSave = () => {
    const updatedValue = parseFloat(value);
    if (isNaN(updatedValue)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    handleEditTransaction({ ...transaction, value: updatedValue, type }, file);
    onClose();
  };

  return (
    <PopUp isOpen={true} title="Editar Transação" onClose={onClose} onSubmit={handleSave}>
      
      <label>
        Valor:
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2 border border-gray rounded-md mb-4"
        />
      </label>

      <label>
        Tipo:
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "depósito" | "transferência")}
          className="w-full p-2 border border-gray rounded-md mb-4"
        >
          <option value="depósito">Depósito</option>
          <option value="transferência">Transferência</option>
        </select>
      </label>


      <label>
        Anexo:
        <div className="flex items-end gap-4">
          {transaction.receiptUrl && (
            <div className="mt-4">
              <img src={transaction.receiptUrl} alt="Comprovante" className="w-[50px] h-auto rounded-lg border" />
            </div>
          )}
          <div className="flex gap-2 items-center justify-center">
            <FiUpload size={24} className="hover:text-blue-800 transition-all" />
            <span className="text-sm">Alterar Recibo</span>
          </div>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="w-full p-2 border border-gray rounded-md mb-4 hidden"
          />
        </div>
      </label>

    </PopUp>
  );
};

export default TransactionPopup;