import useAccount from "@/hooks/useAccount";
import { formatLongDate } from "@/utils/formatters";
import BalanceIlustration from '../../../public/images/illustrations/balance';
import Balance from "./Balance";

interface AccountProps {
  saldo: number;
}

const Account = ({ saldo }: AccountProps) => {
  const { name } = useAccount();
  const today = new Date();
  const formattedDate = formatLongDate(today);

  return (
    <div
      className="
      max-h-[402px]
      max-sm:max-h-[800px]
      grid
      grid-cols-6
      grid-rows-6
      bg-backgroundBlue
      bg-cover
      rounded-lg
      p-8
      max-sm:flex
      max-sm:flex-col
      max-sm:items-center
      text-white
      max-sm:gap-8
      "
    >
      <div className="col-start-1 col-end-3">
        <h1 className="font-semibold text-2xl mb-6">Olá, {name} :)!</h1>
        <span className="text-xs">{formattedDate}</span>
      </div>
      <div className="col-start-4 col-end-7 row-start-3 row-end-6">
        <Balance saldo={saldo} />
      </div>
      <div className="col-start-1 col-end-5 row-start-3 row-end-6">
        <div className="col-start-1 lg:hidden">
          <BalanceIlustration />
        </div>
      </div>
    </div>
  );
};

export default Account;
