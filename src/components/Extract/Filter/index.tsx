interface TransactionFilterProps {
  filters: {
    date: string;
    type: string;
    minValue: string;
    maxValue: string;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      date: string;
      type: string;
      minValue: string;
      maxValue: string;
    }>
  >;
}

const TransactionFilter = ({ filters, setFilters }: TransactionFilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="date"
        value={filters.date}
        onChange={(e) => setFilters((prev) => ({ ...prev, date: e.target.value }))}
        className="border border-green p-2 rounded flex-1"
        placeholder="Filtrar por Data"
      />

      <select
        value={filters.type}
        onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
        className="border border-gree p-2 rounded"
      >
        <option value="">Todos</option>
        <option value="depósito">Depósito</option>
        <option value="transferência">Transferência</option>
      </select>

      <div className="flex gap-2">
        <input
          type="number"
          value={filters.minValue}
          onChange={(e) => setFilters((prev) => ({ ...prev, minValue: e.target.value }))}
          className="border border-green p-2 rounded w-1/2"
          placeholder="Valor mínimo"
        />

        <input
          type="number"
          value={filters.maxValue}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxValue: e.target.value }))}
          className="border border-green p-2 rounded w-1/2"
          placeholder="Valor máximo"
        />
      </div>

    </div>
  );
};

export { TransactionFilter };
