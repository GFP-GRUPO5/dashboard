import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

interface CheckboxFieldProps {
    id: string;
    label: string;
    checked: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const CheckboxField = ({ id, label, checked, onChange, error }: CheckboxFieldProps) => {
    return (
        <div className="flex flex-col mb-6">
            <div className="flex flex-row items-center relative">
                <div
                    onClick={() => onChange?.({ target: { value: '', checked: !checked } } as React.ChangeEvent<HTMLInputElement>)}
                    className="cursor-pointer"
                >
                    {checked ? (
                        <MdCheckBox size={24} color="green" />
                    ) : (
                        <MdCheckBoxOutlineBlank size={24} color="green" />
                    )}
                </div>
                <label htmlFor={id}>{label}</label>
            </div>
            {error && <span className="text-error text-sm">{error}</span>}
        </div>
    );
};

export default CheckboxField;