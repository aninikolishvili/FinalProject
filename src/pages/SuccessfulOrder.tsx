import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import Footer from '../components/Footer'

const SuccessfulOrder = () => {
    return (
        <div>
            <Discount />
            <Header />

            <div className="bg-success ">
                <div className="max-w-[1116px] m-auto py-[34.5px]">
                    <h3 className="text-[24px] font-bold">Successful Order</h3>
                    <div className="flex mt-[8px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Ecommerce</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px]" href="/SuccessfulOrder">Successful Order</a>
                    </div>
                </div>
            </div>

            <div className='mt-[160px] text-center mb-[176px]'>
                <div className='flex  justify-center '>
                    <img src='images/box.png' />
                </div>
                <h3 className='font-bold text-[24px] mt-[20px] mb-[16px]'>Thank you for shopping</h3>
                <p className='text-[14px] text-neutral-gray'>Your order has been successfully placed and is now being processed.</p>
                <div className='flex justify-center mt-[48px]'>
                <button className='bg-Neutral-black flex items-center py-[9.5px] px-[24px] gap-[6px] text-white rounded-[4px]'>
                    Go to my account
                    <img src='images/ArrowRight.png'/>
                    </button>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SuccessfulOrder