import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import Button from "../../Button";

interface BalanceProps {
    saldo: number;
}

const Balance = ({ saldo }: BalanceProps) => {
    
    const [isSaldoVisible, setIsSaldoVisible] = useState(true);
    const toggleSaldoVisibility = () => {
        setIsSaldoVisible((prev) => !prev);
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-6 max-w-[180px] w-full border-b-2 border-orange py-4 cursor-pointer">
                <h3 className="font-semibold text-xl">Saldo Atual</h3>
                <Button
                    onClick={toggleSaldoVisibility}
                    text={isSaldoVisible ? <IoMdEye size={20} className="text-orange" /> : <IoMdEyeOff size={20} className="text-orange" />}
                />
            </div>
            <span className="pt-4 pb-2">Conta Corrente</span>
            <span className="text-3xl">{isSaldoVisible ? `R$ ${saldo.toFixed(2)}` : "●●●●●●"}</span>
        </div>
    );
};

export default Balance;
