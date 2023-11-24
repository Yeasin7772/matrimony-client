import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from "../components/Container/Container";
import img1 from '../assets/banner_01.jpg';
import img4 from '../assets/banner_04.jpg';
import img5 from '../assets/banner_05.jpg';

const Header = () => {
    return (
      
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                transitionTime={500}
                stopOnHover={false}
            >
                <div className="relative h-screen flex items-center justify-center">
                    <img src={img1} alt="Banner 1" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute text-white z-10 text-center">
                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Someone Somewhere is Dreaming of You
                        </h1>
                        <p className="text-lg sm:text-xl">Find your perfect match today!</p>
                    </div>
                </div>
             
                <div className="relative h-screen">
                    <img src={img4} alt="Banner 2" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
                <div className="relative h-screen">
                    <img src={img5} alt="Banner 2" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                </div>
               
            </Carousel> 
      
    );
};

export default Header;
