import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Card,
  Typography,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
} from "@material-tailwind/react";
import React, { useState } from "react";

const TABLE_HEAD = ["#", "Male Biodata Id", "Female Biodata Id", "Action"];

const AllSuccessStory = () => {
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const axiosSecure = useAxiosSecure();
  const { data: success = [], refetch } = useQuery({
    queryKey: ["success"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/success");
        return res.data;
      } catch (error) {
        throw new Error("Error fetching user data: " + error.message);
      }
    },
  });

  const handleOpen = (story) => {
    setSelectedStory(story);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedStory(null);
  };

  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {success?.map(({ successId, selfBiodataNumber, partnerBiodataNumber, couple_image: imageUrl, marriage_date }, index) => (
              <tr key={successId} className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {index + 1}
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
                  <Button  onClick={() => handleOpen({ successId, selfBiodataNumber, partnerBiodataNumber, imageUrl, marriage_date })} variant="gradient">
                    View Story
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Dialog open={open} handler={handleClose} className="max-w-md mx-auto">
        <DialogHeader className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">Success Story</DialogHeader>
        <DialogBody>
          {selectedStory && (
            <>
              <p className="mb-2 text-xl font-medium">Marriage Date: {selectedStory.marriage_date}</p>
              <p className="mb-2 text-xl font-medium">Male Biodata Id: {selectedStory.selfBiodataNumber}</p>
              <p className="mb-4 text-xl font-medium" >Female Biodata Id: {selectedStory.partnerBiodataNumber}</p>
              <img src={selectedStory.imageUrl} alt={`Success ${selectedStory.successId}`} className="w-full h-40 object-cover rounded-lg mb-4" />
              <Rating value={5} readonly />
            </>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleClose} className="mr-1">
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AllSuccessStory;
