import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile_Menu from './Profile_Menu';

const EmptyState = () => {
    return (
        <div>
            <Discount />
            <Header />
            <div className="bg-neutral-white ">
                <div className="max-w-[1116px] m-auto py-[34.5px]">
                    <h3 className="text-[24px] font-bold">My Account</h3>
                    <div className="flex mt-[8px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Ecommerce</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px]" href="/EmptyState">My Account</a>
                    </div>
                </div>
            </div>

            <div className='max-w-[1116px] m-auto flex'>
                <Profile_Menu />
                <div className='border-r h-[504px] border-hr-grey mt-[60px] mb-[131px]'>
                </div>
                <div className='mt-[195px] text-center m-auto  mb-[319px]'>
                <div className='flex justify-center ' >
                    <img  src='images/Empty.png' />
                    </div>
                    <div className='text-[14px] text-neutral-gray my-[24px]'>Your order history is waiting to be filled.</div>
                    <div className='flex justify-center'>
                    <button className='bg-Neutral-black flex items-center py-[9.5px] px-[24px] gap-[6px] text-white rounded-[4px]'>
                        Start Shopping
                        <img src='images/ArrowRight.png' />
                    </button>
                    </div>
                
                </div>

               
            </div>
            <Footer />
        </div>
    )
}

export default EmptyState