import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Button, Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["#", "Name", "Email", "Role", "Action"];
import {  FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/users',);
                return res.data;
            } catch (error) {
                throw new Error("Error fetching user data: " + error.message);
            }
        }
    });

    const handelMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div>
            <h1 className="text-2xl"> Total Users: {users.length}</h1>

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
                        {users?.map(({_id, name, email,role }, index) => (
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
                                        {email}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    {
                                        role === 'admin' ? <span className="text-xl text-primary">Admin</span> :
                                            <button onClick={() => handelMakeAdmin(_id)}
                                                className="btn  ">
                                                <FaUsers className="text-green-500 text-2xl" /></button>
                                    }
                                </td>
                                <td className="p-4">
                                   make p
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default ManageUsers;