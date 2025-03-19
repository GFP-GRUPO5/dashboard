import { MdClose } from "react-icons/md";
import Button from "@/components/Button";

interface PopUpProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSubmit?: () => void;
  children: React.ReactNode;
  hideButtons?: boolean;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, title, onClose, onSubmit, children, hideButtons = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
        <Button
          text={<MdClose size={24} />}
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        />
        <h2 className="text-xl mb-4 text-center">{title}</h2>
        <div className="mb-4">{children}</div>
        {!hideButtons && (
          <div className="flex justify-between">
            <Button text="Cancelar" onClick={onClose} className="bg-blue text-white p-2 rounded" />
            <Button text="Salvar" onClick={onSubmit} className="bg-blue text-white p-2 rounded" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;