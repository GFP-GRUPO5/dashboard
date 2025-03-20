import { MdModeEdit } from "react-icons/md";
import Settings from "../../../public/images/illustrations/settings";
import Button from "../Button";
import TextField from "../Inputs/TextField";

const AccountSettings = () => {

    const fields = [
        { id: "Nome", value: "Joana Oliveira" },
        { id: "E-mail", value: "joanaoliveira@exemplo.com" },
        { id: "Senha", value: "********", type: "Senha" },
    ];

    return (
        <div className="bg-background bg-cover rounded-lg flex flex-col p-12">
            <h2 className="text-2xl font-bold mb-8">Configurações de conta</h2>
            <div className="flex flex-col lg:flex-row-reverse gap-8">
                <form className="w-full">
                    {fields.map((field) => (
                        <div key={field.id} className="relative">
                            <TextField
                                id={field.id}
                                value={field.value}
                                placeholder={`${field.id}`}
                            />
                            <MdModeEdit className="absolute right-5 top-14 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    ))}
                    <Button
                        text="Salvar alterações"
                        onClick={() => { }}
                        className="bg-orange text-white w-2/3 self-center max-sm:w-full"
                    />
                </form>
                <div className="w-full self-center">
                    <div className="self-center w-full">
                        <Settings />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;