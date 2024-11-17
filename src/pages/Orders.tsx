import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile_Menu from './Profile_Menu';



const Orders = () => {
   

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
                        <a className="text-[14px]" href="/Order">My Account</a>
                    </div>
                </div>
            </div>

            <div className='max-w-[1116px] m-auto flex'>
            <Profile_Menu/>
                <div className='border-r h-[504px]  border-hr-grey mt-[60px] mb-[131px]'>
                </div>
                <div className='ml-[48px]' >
                    <h3 className='font-semibold text-[16px] mt-[64px]'>Orders</h3>

                    <div className="flex items-center gap-[32px] mt-[48px]">
                        <img src="images/image1.png" />
                        <div>
                            <div className="text-[14px] font-semibold">Raw Black T-Shirt Lineup</div>
                            <div className="text-grey text-[12px]">Ordered on: 27 July 2023 </div>
                            <div className='font-semibold text-[12px]'>$70.00</div>
                        </div>
                        <div className='font-semibold border-b ml-[116px]'>
                            Processing
                        </div>
                        <button className='font-semibold text-[14px] px-[24px] py-[9.5px] border rounded-[4px]'>
                            View item
                        </button>
                    </div>
                    <div className='border-b border-hr-grey mt-[32px] mb-[32px]'>
                    </div>

                    <div className="flex items-center gap-[32px]">
                        <img src="images/image-2.png" />
                        <div>
                            <div className="text-[14px] font-semibold">Monochromatic Wardrobe</div>
                            <div className="text-grey text-[12px]">Ordered on: 9 march 2023</div>
                            <div className='font-semibold text-[12px]'>$27.00</div>
                        </div>
                        <div className='border-b font-semibold border-green ml-[116px]'>
                            Completed
                        </div>
                        <button className='font-semibold text-[14px] px-[24px] py-[9.5px] border rounded-[4px]'>
                            View item
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}


export default Orders;