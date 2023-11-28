import useAuth from "../../../../hooks/useAuth";
import { useState, useEffect } from 'react'
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Button, Card, Typography,CardHeader ,CardBody} from "@material-tailwind/react";

const ViewBioData = () => {
    const { user } = useAuth()
    const [findData, setFindData] = useState()
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get('/boidatas')
            .then(res => {
                console.log(res.data);
                const checkData = res.data
                const findItem = checkData.find(check => check?.email === user?.email)
                setFindData(findItem)
            })
    }, [])
    console.log(findData);




return (
    <div >

        <Card className="w-full flex-col  md:flex-row">
            <CardHeader
                shadow={true}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={findData?.profileImage}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    ID: {findData?.biodataId}
                </Typography>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Age: {findData?.age} Years
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Name: {findData?.name}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Division:  {findData?.division}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Occupation: {findData?.occupation}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Gender: {findData?.type}
                </Typography>

            </CardBody>

            {/* another part 2*/}

            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Email: {findData?.email}
                </Typography>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    Fathers_name: {findData?.fathers_name}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    mother_name: {findData?.mother_name}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    Date of birth:  {findData?.date_of_birth}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    present division: {findData?.present_division}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    race: {findData?.race}
                </Typography>
                <a href="#" className="inline-block">

                </a>
            </CardBody>
            {/* another part 3*/}
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    height: {findData?.height}
                </Typography>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    partner_height: {findData?.partner_height}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    contact number: {findData?.number}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    weight:  {findData?.weight}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    age : {findData?.age}
                </Typography>
                <Typography color="gray" className="mb-8 font-normal">
                    partner_age: {findData?.partner_age}
                </Typography>
                <a href="#" className="inline-block">

                </a>
            </CardBody>


        </Card>
        <Card className="flex justify-center items-center bg-yellow-300 mt-5">
            <a href="#" className="inline-block">
                <Button  variant="text" className="flex items-center gap-2">
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

    </div>
);

}


export default ViewBioData;