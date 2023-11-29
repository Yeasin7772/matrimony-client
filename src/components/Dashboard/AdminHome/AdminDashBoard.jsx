import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

const AdminDashBoard = () => {
    const { user } = useAuth();
    const [totalData, setTotalData] = useState();
    const [totalBoy, setTotalBoy] = useState();
    const [totalGirl, setTotalGirl] = useState();
    const [totalPremium, setTotalPremium] = useState();
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/boidatas')
            .then(res => {
                const total = res.data;
                const girls = total.filter(item => item.type === 'Female').length;
                const boys = total.filter(item => item.type === 'Male').length;
                const premium = total.filter(item => item.status === 'premium').length;
                setTotalData(total);
                setTotalBoy(boys);
                setTotalGirl(girls);
                setTotalPremium(premium);
            })
    }, []);

    const data = [
        { name: 'Total Data ', value: 400 },
        { name: 'Total Boy ', value: 200 },
        { name: 'Total Girl ', value: 200 },
        { name: 'Total Premium ', value: 100 },
        { name: 'Total Revenue ', value: 500 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center gap-6 uppercase">
                <div className="bg-[#0088FE] p-4 rounded-md shadow-md w-full">
                    <div className="text-lg font-semibold ">Total biodata</div>
                    <div className="text-3xl font-bold text-gray-800">{totalData?.length}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-red-500 w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="bg-[#00C49F] p-4 rounded-md shadow-md w-full">
                    <div className="text-lg font-semibold">male biodata</div>
                    <div className="text-3xl font-bold text-gray-800">{totalBoy}</div>
                </div>
                <div className="bg-[#FFBB28] p-4 rounded-md shadow-md w-full">
                    <div className="text-lg font-semibold"> girls biodata</div>
                    <div className="text-3xl font-bold text-gray-800">{totalGirl}</div>
                </div>
                <div className="bg-[#FF8042] p-4 rounded-md shadow-md w-full">
                    <div className="text-lg font-semibold">Total Premium</div>
                    <div className="text-3xl font-bold text-gray-800">{totalPremium}</div>
                </div>
                <div className="bg-pink-400 p-4 rounded-md shadow-md w-full">
                    <div className="text-lg font-semibold ">total revenue</div>
                    <div className="text-3xl font-bold text-gray-800">31K</div>
                </div>
            </div>

            <div className="flex justify-center items-center ">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminDashBoard;
