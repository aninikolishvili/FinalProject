import React from 'react'
import Discount from '../components/Discount';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Profile_Menu from './Profile_Menu';

const ChangePassword = () => {
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
                        <a className="text-[14px]" href="/ChangePassword">My Account</a>
                    </div>
                </div>
            </div>

            <div className='max-w-[1116px] m-auto flex'>
                <Profile_Menu />
                <div className='border-r h-[504px]  border-hr-grey mt-[60px] mb-[131px]'>
                </div>
                <div className='ml-[48px]' >
                    <h3 className='font-semibold text-[16px] mt-[64px]'>Change Password</h3>
                    <img className='mt-[40px]' src='images/Avatar-1.png'/>
                
                <form className="mt-[32px] ">
                    

                    <div className="mb-[15px] w-full">
                        <label className="text-input-text text-[14px]">New Password</label>
                        <input  className="border h-[44px] w-[320px] border-box-grey rounded-[6px] block" type="text" />
                    </div>

                    <div className="flex gap-[16px] mb-[15px]">

                        <div>
                            <label className="text-input-text text-[14px]">Confirm Password</label>
                            <input  className="border h-[44px] w-[320px] border-box-grey rounded-[6px] block" type="text"  />
                        </div>

                        
                    </div>

                    
                </form>
                <button className="text-white rounded-[4px] bg-Neutral-black mb-[56px] mt-[64px] text-[14px] py-[9.5px] px-[24px]">Change Password</button>
                </div>
            </div>
            <Footer />
            </div>
    )
}

export default ChangePassword