"use client";

import { TransactionProvider } from "@/context/TransactionContext";
import { AccountProvider } from "@/context/AccountContext";

interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders = ({ children }: AppProvidersProps) => (
    <TransactionProvider>
        <AccountProvider>
            {children}
        </AccountProvider>
    </TransactionProvider>
);

export default AppProviders;
