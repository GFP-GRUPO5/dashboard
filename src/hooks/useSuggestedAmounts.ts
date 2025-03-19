import { useState, useEffect } from "react";

const fetchSuggestedAmounts = async (): Promise<string[]> => {
  return ["20,00", "75,00", "150,00"];
};

const useSuggestedAmounts = () => {
  const [suggestedAmounts, setSuggestedAmounts] = useState<string[]>([]);

  useEffect(() => {
    const loadSuggestions = async () => {
      const amounts = await fetchSuggestedAmounts();
      setSuggestedAmounts(amounts);
    };
    loadSuggestions();
  }, []);

  return suggestedAmounts;
};

export default useSuggestedAmounts;
