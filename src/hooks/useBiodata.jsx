import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useBiodata = () => {

    const axiosPublic = useAxiosPublic()


    const { data: biodata = [], isPending: loading, refetch } = useQuery({
        queryKey: ['biodata'],
        queryFn: async () => {
            const res = await axiosPublic.get('/boidatas')
            return res.data
        }
    })
    return [biodata, loading, refetch]
};

export default useBiodata;