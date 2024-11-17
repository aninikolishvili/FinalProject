import React from 'react'
import Discount from '../components/Discount'
import Header from '../components/Header'
import Footer from '../components/Footer'

const FailedOrder = () => {
    return (
        <div>
            <Discount />
            <Header />

            <div className="bg-fail ">
                <div className="max-w-[1116px] m-auto py-[34.5px]">
                    <h3 className="text-[24px] font-bold">Failed Order</h3>
                    <div className="flex mt-[8px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Ecommerce</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px]" href="/FailedOrder">Failed Order</a>
                    </div>
                </div>
            </div>

            <div className='mt-[160px] text-center mb-[176px] '>
                <div className='flex  justify-center '>
                    <img src='images/Box2.svg' />
                </div>
                <h3 className='font-bold text-[24px] mt-[20px] mb-[16px]'>Oops! There was an issue</h3>
                <p className='text-[14px] text-neutral-gray'>Oops! There was a problem processing your order. Please review the details and try again.</p>
                <div className='flex justify-center mt-[48px]'>
                    <button className='bg-Neutral-black flex items-center py-[9.5px] px-[24px] gap-[6px] text-white rounded-[4px]'>
                        Reorder
                        <img src='images/ArrowRight.png' />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default FailedOrder