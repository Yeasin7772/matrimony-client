import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const UserFavorites = () => {
    const axiosPublic = useAxiosPublic()


    const { data: favorites = [] } = useQuery({
        queryKey: ['favorites'],
        queryFn: async () => {
            const res = await axiosPublic.get('/favorites')
            return res.data
        }
    })
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {favorites.map((favorite) => (
                    <Card key={favorite.biodataId} className="mt-6 ">
                        <CardHeader color="blue-gray" className="relative h-80">
                            <img
                                src={favorite.profileImage}
                                alt={`Profile of ${favorite.biodataId}`}
                                className="w-full  object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            {/* <Typography variant="h5" color="blue-gray" className="mb-2">

                            </Typography> */}
                            <Typography className=" font-bold text-red-200 ">{`Profile ID: ${favorite.biodataId}`}</Typography>
                            <Typography className="text-xl font-bold">Name:  {favorite?.name}</Typography>
                            <Typography className="text-xl font-bold">{`Age: ${favorite?.age}`} Years</Typography>

                        </CardBody>
                        {/* <CardFooter className="pt-0">
                            <Link to={`/ProfileDetails/${favorite?._id}`}>
                                <Button className=" bg-red-500"> View Profile</Button>
                            </Link>
                        </CardFooter> */}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UserFavorites;