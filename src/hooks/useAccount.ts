import { getAccount, updateAccount } from "@/api/services/account";
import { useAccountContext } from "@/context/AccountContext";
import { useEffect, useState } from "react";

const useAccount = () => {
  const { account, setAccount } = useAccountContext();
  const [name, setName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const accountData = await getAccount();
        setAccount(accountData);
        setName(accountData.firstName || "Usuário");
        setFullName(accountData.fullName || "Usuário");
      } catch (error) {
        console.error("Erro ao carregar conta:", error);
      }
    };

    fetchAccount();
  }, [setAccount]);

  const updateAccountState = async (newAccount: {
    fullName: string;
    firstName: string;
    balance: number;
    currency: string;
  }) => {
    try {
      await updateAccount(newAccount);
      setAccount(newAccount);
      setName(newAccount.firstName || "Usuário");
      console.log("Conta atualizada:", newAccount);
    } catch (error) {
      console.error("Erro ao atualizar conta:", error);
    }
  };

  return { account, name, fullName, updateAccountState };
};

export default useAccount;
