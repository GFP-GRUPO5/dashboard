import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const colors = ["#55DDE0", "#C3D350", "#F6AE2D", "#FF6663", "#F564A9"];

interface InvestmentData {
    label: string;
    value: number;
    taxa: number;
}

interface InvestmentChartsProps {
    investments: InvestmentData[];
}

const InvestmentCharts = ({ investments }: InvestmentChartsProps) => {
    const dataPie = investments.map((investment) => ({
        name: investment.label,
        value: investment.value,
    }));

    const dataBar = investments.map((investment) => ({
        name: investment.label,
        Atual: investment.value,
        Estimado: investment.value * ((1 + investment.taxa) ** 12 - 1) + investment.value,
    }));

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    return (
        <div className="flex gap-4">
            <div className="w-1/3 bg-blue rounded-lg flex flex-col justify-center items-center p-4">
                <h3 className="text-xl text-white mb-4">Distribuição Atual</h3>
                <PieChart width={300} height={300}>
                    <Pie
                        data={dataPie}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                    >
                        {dataPie.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        formatter={(value) => formatCurrency(Number(value))}
                    />
                </PieChart>
            </div>

            <div className="w-2/3 bg-blue rounded-lg flex flex-col justify-center items-center p-4">
                <h3 className="text-xl text-white mb-4">Projeção Financeira</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dataBar}>
                        <XAxis
                            dataKey="name"
                            stroke="#FFFFFF"
                            angle={-45}
                            textAnchor="end"
                            interval={0}
                            tickFormatter={(name) => name.charAt(0)}
                        />
                        <YAxis stroke="#FFFFFF" />
                        <Tooltip 
                            formatter={(value) => formatCurrency(Number(value))}
                        />
                        <Bar
                            dataKey="Atual"
                            fill="#55DDE0"
                            name="Atual"
                            stackId="a"
                        />
                        <Bar
                            dataKey="Estimado"
                            fill="#C3D350"
                            name="Estimado"
                            stackId="a"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default InvestmentCharts;
