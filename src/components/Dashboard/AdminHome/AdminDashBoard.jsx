import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState, useEffect } from 'react'
const AdminDashBoard = () => {
    const { item } = useAuth()
    const [totalData, setTotalData] = useState()
    const [totalBoy, setTotalBoy] = useState()
    const [totalGirl, setTotalGirl] = useState()
    const [totalPremium, setTotalPremium] = useState()
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get('/boidatas')
            .then(res => {
                const total = res.data
                const girls = total.filter(item => item.type === 'Female').length;
                const boys = total.filter(item => item.type === 'Male').length;
                const premium = total.filter(item => item.status === 'premium').length;
                setTotalData(total)
                setTotalBoy(boys)
                setTotalGirl(girls)
                setTotalPremium(premium)
            })
    }, [])
    console.log(totalData, totalBoy, totalGirl, totalPremium);
    return (
        <div className="flex flex-col md:flex-row justify-center gap-6 uppercase"> 
            <div className="bg-white p-4 rounded-md shadow-md w-full">
                <div className="text-lg font-semibold ">Total biodata</div>
                <div className="text-3xl font-bold text-gray-800">{totalData?.length}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-red-500 w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md w-full">
                <div className="text-lg font-semibold">male biodata</div>
                <div className="text-3xl font-bold text-gray-800">{totalBoy}</div>
               
            </div>
            <div className="bg-white p-4 rounded-md shadow-md w-full">
                <div className="text-lg font-semibold"> girls biodata</div>
                <div className="text-3xl font-bold text-gray-800">{totalGirl}</div>
               
            </div>
            <div className="bg-white p-4 rounded-md shadow-md w-full">
                <div className="text-lg font-semibold">Total Premium</div>
                <div className="text-3xl font-bold text-gray-800">{totalPremium}</div>
               
            </div>
            <div className="bg-white p-4 rounded-md shadow-md w-full">
                <div className="text-lg font-semibold ">total revenue</div>
                <div className="text-3xl font-bold text-gray-800">31K</div>
                
            </div>
        </div>
    );
};

export default AdminDashBoard;