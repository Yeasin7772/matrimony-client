import useAuth from "../../../../hooks/useAuth";
import { useState, useEffect } from 'react'
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Button, Card, Typography, CardHeader, CardBody } from "@material-tailwind/react";
import Swal from "sweetalert2";

const ViewBioData = () => {
    const { user } = useAuth()
    const [findData, setFindData] = useState()
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get('/boidatas')
            .then(res => {
                console.log(res.data);
                const checkData = res.data
                const findItem = checkData.filter(check => check?.email === user?.email)
                setFindData(findItem)
            })
    }, [])
    console.log(findData);



    const handelMakePremium = (data) => {
        console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be premium  this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, premium it!"
        }).then((result) => {
            if (result.isConfirmed) {

                if (user && user.email) {

                    const AddPremium = {
                        biodataId: data?.biodataId,
                        name: user?.displayName,
                        email: user?.email,

                    }
                    axiosPublic.post('/premium', AddPremium)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `Added your premium Request`,
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
        });

    }




    return (
        <div>
            <h1 className="text-center text-2xl font-medium">view your boidata information</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-5">

                {
                    findData?.map(item => <div>
                        <Card className="w-full flex-col  md:flex-row">
                            <CardHeader
                                shadow={true}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={item?.profileImage}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    ID: {item?.biodataId}
                                </Typography>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Age: {item?.age} Years
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Name: {item?.name}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Division:  {item?.division}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Occupation: {item?.occupation}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Gender: {item?.type}
                                </Typography>

                            </CardBody>

                            {/* another part 2*/}

                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Email: {item?.email}
                                </Typography>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Fathers_name: {item?.fathers_name}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    mother_name: {item?.mother_name}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Date of birth:  {item?.date_of_birth}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    present division: {item?.present_division}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    race: {item?.race}
                                </Typography>
                                <a href="#" className="inline-block">

                                </a>
                            </CardBody>
                            {/* another part 3*/}
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    height: {item?.height}
                                </Typography>
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    partner_height: {item?.partner_height}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    contact number: {item?.number}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    weight:  {item?.weight}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    age : {item?.age}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    partner_age: {item?.partner_age}
                                </Typography>
                                <a href="#" className="inline-block">

                                </a>
                            </CardBody>


                        </Card>
                        <Card className="flex justify-center items-center bg-yellow-300 mt-5">
                            <a href="#" className="inline-block">
                                <Button onClick={() => handelMakePremium(item)} variant="text" className="flex items-center gap-2">
                                    make premium
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button>
                            </a>
                        </Card>
                    </div>)
                }

            </div>
        </div>
    );

}


export default ViewBioData;