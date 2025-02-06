import React, { useState, useEffect } from 'react';
import {
    Cur1,
    Cur2,
    Cur3,
    Cur4,
    Cur5,
    Cur6
} from '../../assets';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        Cur1,
        Cur2,
        Cur3,
        Cur4,
        Cur5,
        Cur6
    ];
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div id="carouselExampleCrossfade" className=" relative" data-twe-carousel-init data-twe-ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] rounded-3xl">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative float-left -mr-[100%] w-full transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={image} className="block w-full h-[600px] object-cover" alt={`Slide ${index + 1}`} />

                    </div>
                ))}
            </div>

            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={prevSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>

            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                onClick={nextSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
