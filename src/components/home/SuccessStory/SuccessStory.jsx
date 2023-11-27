import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from "@material-tailwind/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Container from '../../Container/Container';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const SuccessStory = () => {
    const [success, setSuccess] = useState()
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/success')
            .then(res => {
                setSuccess(res.data)
            })
    }, [])
    console.log(success);

    return (
        <>
            <Container>
                <div className='text-center my-10'>
                    <h1 className='text-4xl font-medium my-4 '>our success story</h1>
                    <h2 className="text-xl"> choice for finding your life partner</h2>
                </div>
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{ height: '400px' }}
                >
                    {
                        success?.map(item => <SwiperSlide key={item._id}>
                            <Card key={item._id} className="w-full flex-col md:flex-row">
                                <CardHeader
                                    shadow={false}
                                    floated={false}
                                    className="m-0 w-full rounded-r-none"
                                >
                                    <img
                                        src={item.couple_image}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody className="w-full">
                                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                        Success Story
                                    </Typography>
                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                        {item.success_text}
                                    </Typography>
                                    <Typography color="gray" className="mb-8 font-normal">
                                        {item.success_text.substring(0, 200)}...
                                    </Typography>
                                    <Typography >
                                    <Rating value={5} />
                                    </Typography>
                                    
                                    
                                  
                                   
                                    <a href="#" className="inline-block">
                                        <Button variant="text" className="flex items-center gap-2">
                                            Read More
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
                                </CardBody>
                            </Card>
                        </SwiperSlide>)
                    }





                </Swiper>
            </Container>
        </>
    );
};

export default SuccessStory;