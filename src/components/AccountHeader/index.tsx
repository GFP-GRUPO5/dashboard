import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Button from "@/components/Button";
import Link from "next/link";
import { normalizeText } from "@/utils/formatters";
import { useMenu } from "@/hooks/useToogleMenu";
import useAccount from "@/hooks/useAccount";

const AccountHeader = () => {

    const{menuOpen, toggleMenu} = useMenu();
    const normalizedText = normalizeText;
    const options = ['Inicial', 'Investimentos', 'Cartões', 'Serviços', 'Configurações'];
    const {fullName} = useAccount();

    return (
        <header className="flex justify-end max-sm:justify-between items-center h-24 p-6 gap-8 bg-blue">
            <Button
                text={menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                className="text-white text-xl sm:hidden"
                onClick={toggleMenu}
            />
            <div className="flex items-center gap-8">
                <span className="text-white text-lg">{fullName}</span>
                <IoPersonCircleOutline size={40} className="text-orange cursor-pointer" />
            </div>
            {
                menuOpen && (
                    <div className="absolute top-24 left-0 bg-lightgray p-4 shadow-lg sm:hidden">
                        {options.map((option) => (
                            <Link
                                key={option}
                                href={`/dashboard/${normalizedText(option)}`}
                                className="block w-full text-left py-2 px-4 hover:bg-gray"
                            >
                                {option}
                            </Link>
                        ))}
                    </div>
                )
            }
        </header >
    );
};

export default AccountHeader;
