import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const ApprovedPremium = () => {
    const axiosPublic = useAxiosPublic()
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/request')
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-2xl">Approved Premium</h2>
        </div>
    );
};

export default ApprovedPremium;