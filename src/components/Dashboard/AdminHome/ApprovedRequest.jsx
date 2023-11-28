import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Button, Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["#","Biodata ID", "Name", "Email", "Role",];
const ApprovedRequest = () => {
    const axiosSecure = useAxiosSecure()
    const { data: requests = [], isPending: loading, refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/request')
            return res.data
        }
    })


    return (
        <div>
            <h2 className="text-2xl text-center my-10 text-red-500">User contact request</h2>
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {requests?.map(({ name, email, biodataId, }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {++index}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {biodataId}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {email}
                                    </Typography>
                                </td>
                                {/* <td className="p-4">
                                    {
                                        role === 'admin' ? <span className="text-xl text-primary">Admin</span> :
                                            <button onClick={() => handelMakeAdmin(_id)}
                                                className="btn  ">
                                                <FaUsers className="text-green-500 text-2xl" /></button>
                                    }
                                </td> */}
                                <td className="p-4">
                                    <Button>
                                        Approved request
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default ApprovedRequest;