import React from 'react'
import Admin_Menu from './Admin_Menu'

const Settings = () => {
    return (
        <div className='flex'>
            <Admin_Menu />
            <div className="bg-neutral-white w-full  ">
                <div className="max-w-[1116px] ">
                    <div className="flex my-[22px] ml-[47px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Admin</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px] font-semibold" href="/Dashboard">Dashboard</a>
                    </div>
                    <div className='bg-white rounded-[8px] ml-[48px] py-[24px] '>
                        <h4 className='text-[18px] font-semibold px-[48px] '>Settings</h4>
                        <div className='border-b mt-[32px] border-hr-grey'></div>
                        <div className='ml-[48px]'>

                            <form className="py-[64px]  ">
                                <div className='w-full mb-3'>
                                    <label className="text-input-text text-[14px]">Site Name</label>
                                    <input className="border w-[50%] border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>
                                <div className='w-full mb-3'>
                                    <label className="text-input-text text-[14px]">Support Email</label>
                                    <input className="border w-[50%] border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>
                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Monthly Order Goal</label>
                                    <input className="border w-[50%] border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>
                            </form>
                            <button className='bg-Neutral-black mb-[80px] px-[24px] py-[9.5px] text-[14px] rounded-[4px] text-white'>Save Changes</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings