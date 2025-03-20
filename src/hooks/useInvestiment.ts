/* eslint-disable @typescript-eslint/no-explicit-any */
import { getInvestments, updateInvestment } from "@/api/services/investment";
import { useEffect, useState } from "react";

interface UseInvestmentPopupProps {
  investments: any[] | null;
  isPopupOpen: boolean;
  currentType: string | null;
  inputValue: string;
  openPopup: (type: string, initialValue: number) => void;
  closePopup: () => void;
  handleSubmit: () => void;
  setInputValue: (value: string) => void;
  fetchInvestments: () => void;
}

const useInvestmentPopup = (): UseInvestmentPopupProps => {
  const [investments, setInvestments] = useState<any[] | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentType, setCurrentType] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const fetchInvestments = async () => {
    try {
      const data = await getInvestments();
      setInvestments(data);
    } catch (error) {
      console.error("Erro ao buscar investimentos", error);
    }
  };

  useEffect(() => {
    fetchInvestments();
  }, []);

  const openPopup = (type: string, initialValue: number) => {
    setCurrentType(type);
    setInputValue(initialValue.toString());
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const handleSubmit = async () => {
    if (!currentType) return;

    try {
      const updatedInvestment = await updateInvestment(currentType, Number(inputValue));
      setInvestments((prevInvestments) =>
        prevInvestments!.map((investment) =>
          investment.type === currentType ? updatedInvestment : investment
        )
      );
      closePopup();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    investments,
    isPopupOpen,
    currentType,
    inputValue,
    openPopup,
    closePopup,
    handleSubmit,
    setInputValue,
    fetchInvestments,
  };
};

export default useInvestmentPopup;
