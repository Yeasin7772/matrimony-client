import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";
import Container from "../../components/Container/Container";

const Biodata = () => {
    const [biodata, setBiodata] = useState([]);
    const [filters, setFilters] = useState({
        minAge: '',
        maxAge: '',
        biodataType: '',
        division: '',
    });

    useEffect(() => {
        fetchBiodata();
    }, [filters]);

    const fetchBiodata = async () => {
        try {
            
            const ageFilters = {
                minAge: filters.minAge === '' ? undefined : filters.minAge,
                maxAge: filters.maxAge === '' ? undefined : filters.maxAge,
            };

            const response = await axios.get('http://localhost:5000/biodatas/filter', {
                params: { ...filters, ...ageFilters },
            });
            setBiodata(response.data);
        } catch (error) {
            console.error('Error fetching biodata:', error);
        }
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;

        // Log the selected value
        console.log(`Selected ${name}:`, value);

        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };
    return (
        <Container>
            <div className="flex space-x-4 mb-8">
                {/* Min Age Input */}
                <div className="w-72">
                    <select
                        name="minAge"
                        value={filters.minAge}
                        onChange={handleFilterChange}
                        className="border rounded px-2 py-1"
                    >
                        <option disabled value="">Pick one</option>
                        <option value="28">28</option>
                        <option value="25">25</option>


                    </select>
                </div>

                {/* Division Select */}
                <div className="w-72">
                    <select
                        name="division"
                        value={filters.division}
                        onChange={handleFilterChange}
                        className="border rounded px-2 py-1"
                    >
                        <option disabled value="">Pick one</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Chattagram">Chattagram</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Maymansign">Maymansign</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Barisal">Barisal</option>


                    </select>
                </div>

                {/* Biodata Type Select */}
                <select
                    name="biodataType"
                    value={filters.biodataType}
                    onChange={handleFilterChange}
                    className="border rounded px-2 py-1"
                >
                    <option disabled value="">Pick one</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {biodata.map((item) => (
                    <Card key={item.biodataId} className="mt-6">
                        <CardHeader color="blue-gray" className="relative h-80">
                            <img
                                src={item.profileImage}
                                alt={`Profile of ${item.biodataId}`}
                                className="w-full h-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {`Profile ID: ${item?.biodataId}`}
                            </Typography>
                            <Typography className="text-xl font-bold">{`Name: ${item?.name}`}</Typography>
                            <Typography className="text-xl font-bold">{`Age: ${item?.age} Years`}</Typography>
                            <Typography className="text-xl font-bold">{`Division: ${item?.division} `}</Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Link to={`premiumProfile${item._id}`}>
                                <Button className="bg-red-500">View Profile</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default Biodata;
