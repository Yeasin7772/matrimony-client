import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Container from "../../components/Container/Container";

const PremiumMember = () => {
    const [premiumMembersData, setPremiumMembersData] = useState([]);

    useEffect(() => {
        fetch('/members.json')  // Ensure the correct path to your JSON file
            .then(res => res.json())
            .then(data => setPremiumMembersData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <Container>


                <div className="">
                  
                        <h1 className="text-center text-4xl font-medium my-10 "><span className="text-red-300">Premium Members</span> Looking for Partner</h1>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {premiumMembersData.map((data) => (
                            <Card key={data.biodataId} className="mt-6 ">
                                <CardHeader color="blue-gray" className="relative h-80">
                                    <img
                                        src={data.profileImage}  // Use the profile image URL from your data
                                        alt={`Profile of ${data.biodataId}`}
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">

                                    </Typography>
                                    <Typography className="text-xl font-bold"> {data.biodataType}</Typography>
                                    <Typography className="text-xl font-bold">{`Permanent Division: ${data.permanentDivision}`}</Typography>
                                    <Typography className="text-xl font-bold">{`Age: ${data.age}`}</Typography>
                                    <Typography className="text-xl font-bold">{`Occupation: ${data.occupation}`}</Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button className=" bg-red-500"> View Profile</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PremiumMember;
