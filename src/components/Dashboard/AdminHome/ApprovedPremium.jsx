import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const TABLE_HEAD = ["#", "Name", "Bio DataId", "Email","Role" ,"Action",];
import { Button, Card, Typography } from "@material-tailwind/react";
import Swal from "sweetalert2";
const ApprovedPremium = () => {
    const axiosPublic = useAxiosPublic()
    const { data: premiums = [], refetch } = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await axiosPublic.get('/premium')
            return res.data
        }
    })

    console.log(premiums);

    const handelDeleted = (id) => {

        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosPublic.delete(`/premium/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your favorites items has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });


    }
    return (
        <div>
            <h2 className="text-2xl">Approved Premium</h2>
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
                        {premiums?.map(({ _id, name, email, biodataId }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {++index}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {biodataId}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    {email}
                                </td>
                                <td className="p-4">
                                <Button >
                                        Approved
                                    </Button>
                                </td>
                                <td className="p-4">
                                    <Button onClick={() => handelDeleted(_id)}>
                                        deleted
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

export default ApprovedPremium;