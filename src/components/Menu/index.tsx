import { normalizeText } from "@/utils/formatters";
import Link from "next/link";

const Menu = () => {
    const options = ['Inicial', 'Investimentos', 'Cartões', 'Serviços', 'Configurações'];
    const normalizedText = normalizeText;

    return (
        <div className="bg-lightgray rounded-lg p-4 max-lg:flex max-lg:flex-row max-lg:justify-center max-sm:hidden">
            {options.map((option) => (
                <div key={option}>
                    <Link 
                        href={`/dashboard/${normalizedText(option)}`} 
                        className="flex justify-center p-2 active:text-green active:font-bold active:scale-105"
                    >
                        {option}
                    </Link>
                    <div className="border-b border-darkgray mt-2 w-full max-lg:hidden" />
                </div>
            ))}
        </div>
    );
};

export default Menu;

