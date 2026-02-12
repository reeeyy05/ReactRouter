import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
    items: Item[];
    tittle: string;
}

interface Item {
    name: string;
    value: string | number;
}


export default function LineChartElement({ items, tittle }: LineChartProps) {
    return (
        <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">{tittle}</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={items}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="ventas" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}