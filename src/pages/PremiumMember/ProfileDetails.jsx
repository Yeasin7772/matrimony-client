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
import { useState, useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GenderProfile from "./GenderProfile.jsx/GenderProfile";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ProfileDetails = () => {
    const data = useLoaderData()
    const [filterData, setFilterData] = useState()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const isPremium = true

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

    useEffect(() => {
        axiosPublic.get('/boidatas')
            .then(res => {
                // console.log(res.data);
                // setFilterData(res.data)
                const filterItem = res.data.filter(item => item.type === data.type)
                setFilterData(filterItem)
            })

    }, [])
    console.log(filterData);

    const handelAddToFavorite = (data) => {
        // console.log(data, user.email);

        if (user && user.email) {

            const favoritesItem = {
                biodataId: data.biodataId,
                profileImage: data.profileImage,
                age: data.age,
                email: user.email,
                name: data.name,
                division: data.division,
                occupation: data.occupation
            }

            console.log(favoritesItem);


            axiosPublic.post('/favorites', favoritesItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `Added to your Favorite collection`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                    }
                })
                .catch(error => {
                    console.error("Error  post request:", error);
                });

        }

    }


    // const handelAddToRequest = (data) => {
    //     console.log(data);

    //     if (user && user.email) {

    //         const AddRequestData = {
    //             biodataId: data.biodataId,
    //             profileImage: data.profileImage,
    //             age: data.age,
    //             email: user.email,
    //             name: data.name,
    //             division: data.division,
    //             occupation: data.occupation,
    //             number: data?.number
    //         }

    //         console.table(AddRequestData);


    //         axiosPublic.post('/request', AddRequestData)
    //             .then(res => {
    //                 console.log(res.data);
    //                 if (res.data.insertedId) {
    //                     Swal.fire({
    //                         position: "top-end",
    //                         icon: "success",
    //                         title: `Added your Request`,
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     });

    //                 }
    //             })
    //             .catch(error => {
    //                 console.error("Error  post request:", error);
    //             });

    //     }



    // }

    return (
        <Container>
            <div className=" h-screen grid grid-cols-2 lg:grid-cols-12 gap-4">
                <div className="col-span-4 flex justify-center items-center overflow-y-scroll ">
                    <div className="grid grid-cols-1 gap-5 mt-48">
                        {
                            filterData?.map(item => <GenderProfile key={item._id} item={item} />)
                        }
                    </div>
                </div>

                {/* details data  */}
                <div className="col-span-8  flex justify-center items-center ">
                    <Card className=" overflow-hidden">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className=" w-full object-cover "
                        >
                            <img
                                src={data?.profileImage}
                                alt="ui/ux review check"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h4" color="blue-gray">
                                {data?.name}
                                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                    Age:  {data?.age} Years Old
                                </Typography>
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                Division:   {data?.division}
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                Occupation:   {data?.occupation}
                            </Typography>
                            <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                About Info :    {data?.description}
                            </Typography>
                            {
                                isPremium ? <>
                                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                        contact Info :    {data?.phoneNumber}
                                    </Typography>
                                    <Typography variant="lead" color="gray" className="mt-3 font-normal">
                                        contact Info :    {data?.email}
                                    </Typography>
                                </> : <Link to='/checkoutPage'>
                                    <Button variant="outlined" className="bg-blue-800 text-black">ADD checkOut</Button>
                                </Link>
                            }
                        </CardBody>
                        <CardFooter className="pt-0">


                            <Button variant="outlined" onClick={() => handelAddToFavorite(data)} className="bg-yellow-400 text-black">ADD favorite</Button>

                        </CardFooter>
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default ProfileDetails;