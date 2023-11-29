import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const TABLE_HEAD = ["#", "Male Biodata Id", "Female Biodata Id", "Action",];
import {
    Button, Card, Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import React from "react";

const AllSuccessStory = () => {
    const [open, setOpen] = React.useState(false);
    const axiosSecure = useAxiosSecure()
    const { data: success = [], refetch } = useQuery({
        queryKey: ["success"],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get('/success',);
                return res.data;
            } catch (error) {
                throw new Error("Error fetching user data: " + error.message);
            }
        }
    });

    const handleOpen = () => setOpen(!open);






    return (
        <div>
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
                        {success?.map(({ selfBiodataNumber, partnerBiodataNumber, }, index) => (
                            <tr key={index} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {++index}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {selfBiodataNumber}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {partnerBiodataNumber}
                                    </Typography>
                                </td>

                                <td className="p-4">
                                    <Button onClick={handleOpen} variant="gradient">
                                        View Story
                                    </Button>
                                    <Dialog open={open} handler={handleOpen}>
                                        <DialogHeader>Its a simple dialog.</DialogHeader>
                                        <DialogBody>
                                            The key to more success is to have a lot of pillows. Put it this way,
                                            it took me twenty five years to get these plants, twenty five years of
                                            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                                            getting started. I&apos;m up to something. Fan luv.
                                        </DialogBody>
                                        <DialogFooter>
                                            <Button
                                                variant="text"
                                                color="red"
                                                onClick={handleOpen}
                                                className="mr-1"
                                            >
                                                <span>Cancel</span>
                                            </Button>
                                            <Button variant="gradient" color="green" onClick={handleOpen}>
                                                <span>Confirm</span>
                                            </Button>
                                        </DialogFooter>
                                    </Dialog>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
};

export default AllSuccessStory;