import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const GenderProfile = ({ item }) => {
    const { _id,profileImage, division, age, name,biodataId } = item || {}


    return (
        <div>
            <Card key={biodataId} className="mt-6 ">
                <CardHeader color="blue-gray" className="relative h-80">
                    <img
                        src={profileImage}
                        alt={`Profile of ${biodataId}`}
                        className="w-full  object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">

                    </Typography>
                    <Typography className=" font-bold text-red-200 ">{`Profile ID: ${biodataId}`}</Typography>
                    <Typography className="text-xl font-bold">Name:  {name}</Typography>
                    <Typography className="text-xl font-bold">{`Age: ${age}`} Years</Typography>

                </CardBody>
                {/* <CardFooter className="pt-0">
                    <Link to={`ProfileDetails${_id}`}>
                        <Button className=" bg-red-500"> View Profile</Button>
                    </Link>
                </CardFooter> */}
            </Card>
        </div>
    );
};

export default GenderProfile;