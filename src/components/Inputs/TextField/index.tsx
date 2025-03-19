interface TextFieldProps {
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
}

const TextField = ({ id, className, placeholder, value, onChange }: TextFieldProps) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2 font-bold" htmlFor={id}>{id}</label>
            <input
                type={id === "Senha" ? "password" : "text"}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${className} truncate border text-base rounded-lg p-3.5 pr-12 mb-2 placeholder:text-placeholder placeholder:text-base`}
            />
        </div>
    )
}

export default TextField