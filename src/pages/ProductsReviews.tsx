import React from 'react'
import Header from '../components/Header'
import Discount from '../components/Discount'
import Swiper from '../components/Swiper';
import { useRef, useState } from 'react';
import Colors from '../components/Colors';
import Details from '../components/Detailsfunct';
import AlikeProducts from '../components/AlikeProducts';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Detailsfunct from '../components/Detailsfunct';
import Main from './Main';
import { useNavigate } from 'react-router-dom';
import Reviewsfunct from '../components/Reviewsfunct';
import Counter from './Counter'
import BasicRating from '../components/Rating';


const ProductsReviews = () => {
    const navigate = useNavigate();
    const DetailsClick = () => {
        navigate('/ProductsDetails');
    }
    const ReviewsClick = () => {
        navigate('/ProductsReviews')

    }

    const ReviewsInfo = [
        {
            image: 'images/Avatar.png',
            name: 'Emily Davis',
            time: '1 Week ago',
            information: 'This company always goes above and beyond to satisfy their customers.'
        },
        {
            image: 'images/Avatar.png',
            name: 'Daniel Smith',
            time: '2 Month ago',
            information: 'I cant believe how affordable and high-quality this item is!'
        },
        {
            image: 'images/Avatar.png',
            name: 'Benjamin Clark',
            time: '23 April',
            information: 'These guys know their stuff, and it shows in their products.'
        }
    ]
    return (
        <div>

            <Discount />
            <Header />
            <div className='max-w-[1116px] m-auto'>
                <div className='flex mt-[16px] '>
                    <a href='/'>Ecommerce</a>
                    <img src='images/Right.png' />
                    <a href='/'>Black man t-shirt</a>
                </div>

                <div className='flex justify-between'>
                    <div className=' bg-neutral-white h-[574px] w-full  max-w-[534px]'>
                        <div className='w-[288px] mt-[16px] mx-auto mb-[10px] '>

                            <Swiper />

                        </div>
                    </div>

                    <div>
                        <div className='flex gap-[119px] items-center '>
                            <h2 className='font-bold text-[24px]'>Raw Black T-Shirt Lineup</h2>
                            <img className='w-[24px] h-[24px]' src='images/Share.png' />
                        </div>
                        <div>
                            <div className='flex items-center gap-[8px] mt-[12px] mb-[24px]' >
                                <div className='bg-neutral-white flex rounded-[100px] w-[167px] h-[28px]  items-center gap-[8px]'>
                                    <img className='ml-[20px]' src='images/Star.png' />
                                    <span className='text-neutral-gray py-[2px] mr-[16px] text-[12px]'>4.2 — 54 Reviews</span>
                                </div>

                                <button className="border rounded-[100px] px-[16px] py-[2px] text-[12px] text-neutral-gray">IN STOCK</button>
                            </div>
                            <span className="text-[18px] font-bold">$75.00</span>
                            <Colors />
                            <div>
                                <div className='text-[12px] text-neutral-gray mt-[32px]'>Quantity</div>
                                <div className='mt-[10px]'> <Counter /> </div>
                            </div>
                            <div className='mt-[40px] flex gap-[16px]'>
                                <button className='text-[14px] text-white py-[9.5px] px-[104px] bg-Neutral-black rounded-[4px]'>Add to cart</button>
                                <img src='images/Wishlist.png' />
                            </div>
                            <div className='text-[12px] text-neutral-gray mt-[12px]'>— FREE SHIPPING ON ORDERS $100+</div>
                        </div>
                    </div>


                </div>
                <div >

                    <div className='flex max-w-[1116px] m-auto justify-between'>
                        <div className='mt-[248px] text-[14px]  '>
                            <button onClick={DetailsClick} className='flex cursor-pointer rounded-[8px] bg-neutral-white items-center w-[241px] h-[41px]  gap-[10px]'>
                                <img src='images/Details.png' />
                                Details
                            </button>
                            <div className='flex items-center mt-[16px]  text-[14px]'>

                                <button onClick={ReviewsClick} className='flex cursor-pointer gap-[10px]  w-[241px]  h-[41px] items-center '>
                                    <img src='images/EmptyStar.png' />
                                    Review
                                </button>
                            </div>

                        </div>


                        <div >
                            <div className='mt-[176px]'>
                                <h3 className='text-[16px] font-bold'>Reviews</h3>
                                <div className='flex items-center mt-[16px]'>
                                    <div className='text-[32px] font-bold'>4.2</div>
                                    <div className='text-[14px] text-grey'>— 54 Reviews</div>
                                </div>
                                <button className='text-[14px] border px-[24px] py-[9.5px] rounded-[4px] mt-[40px] mb-[40px]'>Write a review</button>
                                <hr className=' border-zinc-100  max-w-[727px]' />


                                {ReviewsInfo.map((Review, index) => (
                                    <Reviewsfunct key={index} Review={Review} />
                                )
                                )}

                            </div>
                        </div>
                    </div>
                    <AlikeProducts />
                </div>
            </div>
            <Subscribe />
            <Footer bgWhite/>
        </div>
    )
}

export default ProductsReviews