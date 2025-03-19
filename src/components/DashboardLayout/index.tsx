import AccountHeader from "../AccountHeader";

interface DashboardLayoutProps {
    menu?: React.ReactNode;
    account?: React.ReactNode;
    mainContent?: React.ReactNode;
    extract?: React.ReactNode;
}

const DashboardLayout = ({ menu, account, mainContent, extract }: DashboardLayoutProps) => {
    return (
        <div className="flex flex-col gap-6">
            <AccountHeader />
            <div className="grid grid-cols-12 grid-rows-1 gap-6 px-28 max-lg:flex max-lg:px-14 max-lg:flex-col">
                <div className="col-start-1 col-end-3">
                    {menu}
                </div>
                <div className="col-start-3 col-end-9 flex flex-col gap-6">
                    {account}
                    {mainContent}
                </div>
                <div className="col-start-9 col-end-13">
                    {extract}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
