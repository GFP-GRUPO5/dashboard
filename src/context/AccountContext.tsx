import React, { createContext, useContext, useState } from "react";

interface AccountContextType {
  account: {
    fullName: string;
    firstName: string;
    balance: number;
    currency: string;
  };
  setAccount: React.Dispatch<
    React.SetStateAction<{
      fullName: string;
      firstName: string;
      balance: number;
      currency: string;
    }>
  >;
}

const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: React.ReactNode }) => {
  const [account, setAccount] = useState({
    fullName: "Joana da Silva Oliveira",
    firstName: "Joana",
    balance: 3000,
    currency: "R$",
  });

  return (
    <AccountContext.Provider value={{ account, setAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("useAccountContext must be used within an AccountProvider");
  }
  return context;
};