import Button from "@/components/Button";
import CheckboxField from "@/components/Inputs/CheckboxField";
import SelectorField from "@/components/Inputs/SelectorField";
import TextField from "@/components/Inputs/TextField";
import useSuggestedAmounts from "@/hooks/useSuggestedAmounts";
import useTransaction from "@/hooks/useTransaction";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { FiFileText, FiUpload } from "react-icons/fi";
import Transaction from "../../../public/images/illustrations/transaction";

const FormTransaction = () => {
  const { transactionType, setTransactionType, amount, setAmount, handleTransaction } = useTransaction();
  const suggestedAmounts = useSuggestedAmounts();
  const [receipt, setReceipt] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleTransaction(receipt);
  };

  return (
    <form className="max-h-auto bg-background bg-cover rounded-lg p-8 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2">
      <h4 className="text-xl font-bold max-sm:text-center">Nova Transação</h4>
      <div className="grid grid-cols-6 grid-row-3 gap-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2">
        <div className="col-span-4 mt-8">
          <SelectorField
            onChange={(e) => setTransactionType(e.target.value as "depósito" | "transferência")}
            value={transactionType}
          />
        </div>

        {transactionType && (
          <div className="col-span-4 mt-4 flex flex-col gap-2">
            <h2 className="text-l font-bold max-sm:text-center">Você quer usar um valor abaixo?</h2>
            <div className="flex flex-row gap-6 max-sm:flex-col max-sm:gap-2 max-sm:items-center">
              {suggestedAmounts.map((value, index) => (
                <CheckboxField
                  key={index}
                  id={`sugestao${index}`}
                  label={`R$ ${value}`}
                  checked={amount === value}
                  onChange={() => setAmount(value)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="col-span-3">
          <TextField
            id="Valor"
            placeholder="R$ 00,00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-blue focus:outline-blue max-sm:w-full"
          />
        </div>

        <div className="col-span-4 flex items-center gap-4">
          <label htmlFor="receipt-upload" className="cursor-pointer flex items-center gap-2">
            <FiUpload size={24} className="hover:text-blue transition-all" />
            <span className="text-sm">Anexar Recibo</span>
          </label>
          <input
            id="receipt-upload"
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {receipt && (
            <div className="flex items-center gap-2">
              {receipt.type.startsWith("image/") ? (
                <Image
                  src={URL.createObjectURL(receipt)}
                  alt="Prévia do Recibo"
                  width={40}
                  height={40}
                  className="rounded-md border"
                />
              ) : (
                <FiFileText size={24} className="text-gray" />
              )}
              <span className="text-sm truncate max-w-[150px]">{receipt.name}</span>
            </div>
          )}
        </div>

        <div className="col-span-3">
          <Button text="Concluir Transação" className="bg-blue text-white px-10" onClick={(event) => handleSubmit(event)} type="button"/>
        </div>

        <div className="col-span-3 flex justify-end items-end">
          <Transaction />
        </div>
      </div>
    </form>
  );
};

export default FormTransaction;
