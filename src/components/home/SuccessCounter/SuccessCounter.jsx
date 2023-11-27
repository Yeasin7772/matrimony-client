import { useState, useEffect } from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Card, Progress, Typography } from "@material-tailwind/react";
import Container from '../../Container/Container';

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
            <div>
                <div className='text-center my-10'>
                    <h1 className='text-4xl font-medium my-4 '>our Success Counter</h1>
                </div>

                <div className="flex w-full flex-col gap-4">
                    <div className="w-full ">
                        <div className="mb-2 flex items-center justify-between gap-4">
                            <Typography color="red" variant="h4">
                                Total Biodata
                            </Typography>
                            <Typography color="blue-gray" variant="h6">
                                {statistics.total}%
                            </Typography>
                        </div>
                        <Progress color="red" autoRun value={statistics.total} />
                    </div>

                    <div className="w-full ">
                        <div className="mb-2 flex items-center justify-between gap-4">
                            <Typography color="amber" variant="h4">
                                Total Boys
                            </Typography>
                            <Typography color="amber" variant="h6">
                                {statistics.boys}%
                            </Typography>
                        </div>
                        <Progress color="amber" autoRun value={statistics.boys} />
                    </div>

                    <div className="w-full ">
                        <div className="mb-2 flex items-center justify-between gap-4">
                            <Typography color="green" variant="h4">
                                Total Girls
                            </Typography>
                            <Typography color="green" variant="h6">
                                {statistics.girls}%
                            </Typography>
                        </div>
                        <Progress color="green" autoRun value={statistics.girls} />
                    </div>

                    <div className="w-full ">
                        <div className="mb-2 flex items-center justify-between gap-4">
                            <Typography color="blue" variant="h4">
                                Marriages Completed
                            </Typography>
                            <Typography color="blue-gray" variant="h6">
                                {75}%
                            </Typography>
                        </div>
                        <Progress color="blue" autoRun value={75} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SuccessCounter;
