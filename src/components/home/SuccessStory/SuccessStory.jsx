import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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

const SuccessStory = () => {
    return (
        <>
            <Container>
                <div className='text-center my-10'>
                    <h2 className="text-3xl"> choice for finding your life partner</h2>
                </div>
                <Swiper
                    spaceBetween={40}
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
                    <SwiperSlide>
                        <Card className="w-full flex-col  md:flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full rounded-r-none"
                            >
                                <img
                                    src="https://i.ibb.co/N9TtJRw/pexels-look-me-photography-19118295.jpg"
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="w-full">
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Success Story
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sujan proposed to Maida after meeting her through Bangladeshi Matrimony
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until
                                    recently a traditional boxed software company selling licenses. Yet its own business
                                    model disruption is only part of the story
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="w-full flex-col  md:flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full rounded-r-none"
                            >
                                <img
                                    src="https://i.ibb.co/ZXh0QrP/pexels-helena-lopes-1378849.jpg"
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="w-full">
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Success Story
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sujan proposed to Maida after meeting her through Bangladeshi Matrimony
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until
                                    recently a traditional boxed software company selling licenses. Yet its own business
                                    model disruption is only part of the story
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Card className="w-full flex-col  md:flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full rounded-r-none"
                            >
                                <img
                                    src="https://i.ibb.co/sJpyZvw/pexels-andre-furtado-1417255.jpg"
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="w-full">
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Success Story
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sujan proposed to Maida after meeting her through Bangladeshi Matrimony
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until
                                    recently a traditional boxed software company selling licenses. Yet its own business
                                    model disruption is only part of the story
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="w-full flex-col  md:flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full rounded-r-none"
                            >
                                <img
                                    src="https://i.ibb.co/zfXRQ5p/pexels-look-me-photography-19118310.jpg"
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="w-full">
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Success Story
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sujan proposed to Maida after meeting her through Bangladeshi Matrimony
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until
                                    recently a traditional boxed software company selling licenses. Yet its own business
                                    model disruption is only part of the story
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Card className="w-full flex-col  md:flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-full rounded-r-none"
                            >
                                <img
                                    src="https://i.ibb.co/ZXh0QrP/pexels-helena-lopes-1378849.jpg"
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className="w-full">
                                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                    Success Story
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sujan proposed to Maida after meeting her through Bangladeshi Matrimony
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    Like so many organizations these days, Autodesk is a company in transition. It was until
                                    recently a traditional boxed software company selling licenses. Yet its own business
                                    model disruption is only part of the story
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </Button>
                                </a>
                            </CardBody>
                        </Card>
                    </SwiperSlide>



                </Swiper>
            </Container>
        </>
    );
};

export default SuccessStory;