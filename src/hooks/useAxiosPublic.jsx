import axios from 'axios'

const axiosPublic = axios.create({
    baseURL: 'https://matrimony-server-beige.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;