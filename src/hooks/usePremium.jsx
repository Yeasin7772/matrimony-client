import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const usePremium = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()


    const { data: isPremium, isPending: isPremiumLoading } = useQuery({
        queryKey: [user?.email, 'isPremium'],

        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/premium/${user?.email}`)

           // console.log('give me true',res.data);

            return res.data?.premium
        }
    })
    return { isPremium, isPremiumLoading }
};


export default usePremium;