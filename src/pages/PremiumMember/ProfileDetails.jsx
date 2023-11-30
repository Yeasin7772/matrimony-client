import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Container from "../../components/Container/Container";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GenderProfile from "./GenderProfile.jsx/GenderProfile";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import usePremium from "../../hooks/usePremium";

const ProfileDetails = () => {
    const data = useLoaderData();
    const [filterData, setFilterData] = useState();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

  const {isPremium} = usePremium()

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get("/users");
                return res.data;
            } catch (error) {
                throw new Error("Error fetching user data: " + error.message);
            }
        },
    });

    useEffect(() => {
        axiosPublic.get("/boidatas").then((res) => {
            const filterItem = res.data.filter((item) => item.type === data.type);
            setFilterData(filterItem);
        });
    }, []);

    const handelAddToFavorite = (data) => {
        if (user && user.email) {
            const favoritesItem = {
                biodataId: data.biodataId,
                profileImage: data.profileImage,
                age: data.age,
                email: user.email,
                name: data.name,
                division: data.division,
                occupation: data.occupation,
            };

            axiosPublic
                .post("/favorites", favoritesItem)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Added to your Favorite collection`,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error post request:", error);
                });
        }
    };

    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex justify-center items-center overflow-y-scroll">
                    <div className="grid grid-cols-1 gap-5 mt-8 lg:mt-0">
                        {filterData?.map((item) => (
                            <GenderProfile key={item._id} item={item} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center ">
                    <Card className="w-full md:w-3/4 lg:w-4/5 xl:w-3/4">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="w-full h-[300px] md:h-[400px] lg:h-[500px]"
                        >
                            <img src={data?.profileImage} alt="ui/ux review check" />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray">
                                {data?.name}
                                <Typography
                                    variant="lead"
                                    color="gray"
                                    className="mt-3 font-normal"
                                >
                                    Age: {data?.age} Years Old
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="gray"
                                    className="mt-3 font-normal"
                                >
                                    Division: {data?.division}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="gray"
                                    className="mt-3 font-normal"
                                >
                                    Occupation: {data?.occupation}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="gray"
                                    className="mt-3 font-normal"
                                >
                                    About Info: {data?.description}
                                </Typography>
                                {isPremium ? (
                                    <>
                                        <Typography
                                            variant="lead"
                                            color="gray"
                                            className="mt-3 font-normal"
                                        >
                                            Contact Info: {data?.phoneNumber}
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="gray"
                                            className="mt-3 font-normal"
                                        >
                                            Contact Info: {data?.email}
                                        </Typography>
                                    </>
                                ) : (
                                    <Link to="/checkoutPage">
                                        <Button
                                            variant="outlined"
                                            className="bg-blue-800 text-black"
                                        >
                                            ADD checkOut
                                        </Button>
                                    </Link>
                                )}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                variant="outlined"
                                onClick={() => handelAddToFavorite(data)}
                                className="bg-yellow-400 text-black"
                            >
                                ADD favorite
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default ProfileDetails;
