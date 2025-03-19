"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Menu from "@/components/Menu";
import Account from "@/components/Account";
import Extract from "@/components/Extract";
import useTransaction from "@/hooks/useTransaction";
import useAccount from "@/hooks/useAccount";

interface PageLayoutProps {
    mainContent: React.ReactNode;
}

const PageLayout = ({ mainContent }: PageLayoutProps) => {
    const { transactionHistory, handleDeleteTransaction, handleEditTransaction} = useTransaction();
    const { account } = useAccount();

    return (
        <DashboardLayout
            menu={<Menu />}
            account={<Account saldo={account.balance} />}
            mainContent={mainContent}
            extract={
                <Extract
                    transactions={transactionHistory}
                    onEdit={handleEditTransaction}
                    onDelete={handleDeleteTransaction}
                />
            }
        />
    );
};

export default PageLayout;