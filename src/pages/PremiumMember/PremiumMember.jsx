import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import useBiodata from "../../hooks/useBiodata";

const PremiumMember = () => {
    const [biodata, loading] = useBiodata();
   // console.log(biodata);
    const [premiumMembersData, setPremiumMembersData] = useState([]);

    useEffect(() => {
        if (!loading) {
            const premiumCollections = biodata.filter((item) => item.status === 'premium');
            setPremiumMembersData(premiumCollections);
            console.log(premiumCollections);
        }
    }, [biodata, loading]);

    //console.log('premium Members Data', premiumMembersData);


    return (
        <>
            <Container>


                <div className="mb-6">

                    <h1 className="text-center text-4xl font-medium my-10 "><span className="text-red-300">Premium Members</span> Looking for Partner</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {premiumMembersData.map((data) => (
                            <Card key={data.biodataId} className="mt-6 ">
                                <CardHeader color="blue-gray" className="relative h-80">
                                    <img
                                        src={data.profileImage}
                                        alt={`Profile of ${data.biodataId}`}
                                        className="w-full  object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">

                                    </Typography>
                                    <Typography className=" font-bold text-red-200 ">{`Profile ID: ${data.biodataId}`}</Typography>
                                   
                                    <Typography className="text-red-200 font-bold">{` ${data?.age}`} Years</Typography>
                                    
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Link to={`/ProfileDetails/${data?._id}`}>
                                        <Button className=" bg-red-500"> View Profile</Button>
                                    </Link>
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
