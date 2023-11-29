import React, { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Card, Progress, Typography } from "@material-tailwind/react";
import Container from '../../Container/Container';

// Loader component
const LoaderCard = () => (
    <Card>
        <div className="p-4">
            <div className="animate-pulse bg-gray-300 h-8 mb-4 w-3/4 mx-auto"></div>
            <div className="animate-pulse bg-gray-300 h-4 w-1/2 mx-auto"></div>
            <div className="animate-pulse bg-gray-300 h-4 w-3/4 mx-auto"></div>
        </div>
    </Card>
);

const SuccessCounter = () => {
    const [users, setUsers] = useState([]);
    const [statistics, setStatistics] = useState({ total: 0, girls: 0, boys: 0, marriages: 20 });
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/boidatas')
            .then(response => {
                setUsers(response.data);
                updateStatistics(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const updateStatistics = (users) => {
        const total = users.length;
        const girls = users.filter(user => user.type === 'Female').length;
        const boys = users.filter(user => user.type === 'Male').length;
        const marriages = users.filter(user => user.maritalStatus === 'married').length;

        setStatistics({ total, girls, boys, marriages });
    };

    return (
        <Container>
            <div className="text-center my-10">
                <h1 className="text-4xl font-medium my-4 ">Our Success Counter</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <LoaderCard />
                <LoaderCard />
                <LoaderCard />
                <LoaderCard />


                <SuccessCard title="Total Biodata" value={statistics.total} color="red" />
                <SuccessCard title="Total Boys" value={statistics.boys} color="amber" />
                <SuccessCard title="Total Girls" value={statistics.girls} color="green" />
                <SuccessCard title="Marriages Completed" value={75} color="blue" />
            </div>
        </Container>
    );
};

// SuccessCard component
const SuccessCard = ({ title, value, color }) => (
    <Card>
        <div className="p-4">
            <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color={color} variant="h4">
                    {title}
                </Typography>
                <Typography color={color} variant="h6">
                    {value}%
                </Typography>
            </div>
            <Progress color={color} autoRun value={value} />
        </div>
    </Card>
);

export default SuccessCounter;
