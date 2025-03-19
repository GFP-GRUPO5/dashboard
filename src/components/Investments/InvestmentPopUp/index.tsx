import PopUp from "@/components/PopUp";

interface InvestmentPopupProps {
  isPopupOpen: boolean;
  currentType: string | null;
  inputValue: string;
  closePopup: () => void;
  handleSubmit: () => void;
  setInputValue: (value: string) => void;
}

const InvestmentPopup: React.FC<InvestmentPopupProps> = ({
  isPopupOpen,
  currentType,
  inputValue,
  closePopup,
  handleSubmit,
  setInputValue,
}) => {
  
  const typeLabels: Record<string, string> = {
    poupanca: "Poupança",
    acoes: "Ações",
    cdb: "CDB",
    tesouro: "Tesouro Direto",
    fundos: "Fundos de Investimento",
  };

  return (
    <PopUp
      isOpen={isPopupOpen}
      title={`Digite o valor para ${typeLabels[currentType as keyof typeof typeLabels] || "Investimento"}`}
      onClose={closePopup}
      onSubmit={handleSubmit}
    >
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full p-2 border border-gray rounded-md mb-4"
      />
    </PopUp>
  );
};

export default InvestmentPopup;