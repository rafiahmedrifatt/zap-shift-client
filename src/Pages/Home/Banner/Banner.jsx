import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} className='bg-none' showStatus={false} showIndicators={false}>
            <div>
                <img src="https://i.postimg.cc/pLWvDK2Y/banner1.png" />
            </div>
            <div>
                <img src="https://i.postimg.cc/tJFbz5ZD/banner2.png" />
            </div>
            <div>
                <img src="https://i.postimg.cc/t4BjD7J0/banner3.png" />
            </div>
        </Carousel>
    );
};

export default Banner;