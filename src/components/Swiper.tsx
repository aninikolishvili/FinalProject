import React from 'react'
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

const ColorSwiper = () => {


    return (
        <div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                className='overflow-y-auto'
            >
                <SwiperSlide><img className='w-[288px] h-[404px]' src='images/Black T-Shirt.png' /></SwiperSlide>
                <SwiperSlide><img className='w-[288px] h-[404px]' src='images/Black T-Shirt.png' /></SwiperSlide>
                <SwiperSlide><img className='w-[288px] h-[404px]' src='images/Black T-Shirt.png' /></SwiperSlide>
                <SwiperSlide><img className='w-[288px] h-[404px]' src='images/Black T-Shirt.png' /></SwiperSlide>


            </Swiper ></div>
    )
}

export default ColorSwiper

