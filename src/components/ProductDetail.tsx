import React from 'react'
import Swiper from '../components/Swiper';
import { useRef, useState } from 'react';
import Colors from '../components/Colors';
import Discount from './Discount';
import Header from './Header';




interface products {
    image: string,
    title: string,
    stock: string,
    price: string,
    rating: string,
    reviews: string
}

function ProductDetail(props: { product: products }) {
    const { product } = props;
    return (
        <div>
        <Discount />
        <Header />
        <div className='flex justify-between'>
            
                <div className='bg-neutral-white h-[574px] w-full max-w-[534px]'>
                    <span >
                      
                        <div className='w-[288px] mt-[16px] mx-auto mb-[10px]'>
                        <img className="bg-neutral-white rounded" src={product.image}  />
                    
                        
                        </div>
                    </span>
                    <div className='flex gap-[119px] items-center'>
                        <h2 className='font-bold text-[24px]'>{product.title}</h2>
                        
                    </div>
                    <div>
                        <div className='flex items-center gap-[8px] mt-[12px] mb-[24px]'>
                            <div className='bg-neutral-white flex rounded-full w-[167px] h-[28px] items-center gap-[8px]'>
                                <img className='ml-[20px]' src='images/Star.png' alt="Star Rating" />
                                <span className='text-neutral-gray py-[2px] mr-[16px] text-[12px]'>
                                    {product.rating} — {product.reviews} Reviews
                                </span>
                            </div>
                            <button className="border rounded-full px-[16px] py-[2px] text-[12px] text-neutral-gray"> {product.stock}</button>
                        </div>
                        <span className="text-[18px] font-bold">{product.price}</span>
                        <Colors />
                    </div>
                </div>
       
        </div>
        </div>

    )
}

export default ProductDetail;