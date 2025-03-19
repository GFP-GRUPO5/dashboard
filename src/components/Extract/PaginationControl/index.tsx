import Button from "@/components/Button";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
}

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }: PaginationProps) => {
    const isFirstPage = currentPage === 0;
    const isLastPage = currentPage === totalPages - 1;

    return (
        <div className="flex justify-center items-center gap-4 mt-4">
            <Button
                className="px-4 py-2 bg-green rounded-md text-white disabled:opacity-50"
                disabled={isFirstPage}
                onClick={onPrevious}
                text={<GrFormPrevious size={24} />}
            />
            <span className="text-lg font-bold text-darkgray">
                {currentPage + 1} / {totalPages}
            </span>
            <Button
                className="px-4 py-2 bg-green rounded-md text-white disabled:opacity-50"
                disabled={isLastPage}
                onClick={onNext}
                text={<GrFormNext size={24} />}
            />
        </div>
    );
};

export default Pagination;
