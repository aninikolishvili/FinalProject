import React from 'react'
import Admin_Menu from './Admin_Menu'

const Dashboard = () => {
    return (
        <div className='flex '>
            <Admin_Menu />
            <div className="bg-neutral-white w-full  ">
                <div className="max-w-[1116px] ">
                    <div className="flex my-[22px] ml-[47px]">
                        <a className="text-[14px] text-neutral-gray" href="/">admin</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px] font-semibold" href="/Dashboard">Dashboard</a>
                    </div>
                    <div className='grid grid-cols-3 gap-[38px]  mt-[56px]  ml-[48px] justify-between'>
                        <div className='bg-white max-w-[328px] rounded-[8px] '>
                            <div className='ml-[24px] py-[24px]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-bold'>Total Sales</h4>
                                        <div className='mt-[6px] mb-[44px] text-[12px] text-gray'>THIS MONTH</div>
                                    </div>
                                    <span className='text-[24px] font-bold mr-[32px]'>$ 4,235</span>
                                </div>
                                <img src='images/Sales.png' />
                            </div>
                        </div>
                        <div className='bg-white max-w-[328px] rounded-[8px]'>
                            <div className='ml-[24px] py-[24px]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-bold'>Customers </h4>
                                        <div className='mt-[6px] mb-[44px] text-[12px] text-gray'>THIS MONTH</div>
                                    </div>
                                    <span className='text-[24px] font-bold mr-[32px]'>2,571</span>
                                </div>
                                <img src='images/Customers.png' />
                            </div>
                        </div>
                        <div className='bg-white max-w-[328px] rounded-[8px]'>
                            <div className='ml-[24px] py-[24px]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <h4 className='text-[16px] font-bold'>Orders </h4>
                                        <div className='mt-[6px] mb-[58px] text-[12px] text-gray'>Monthly GOALS : 1,000</div>
                                    </div>
                                    <span className='text-[24px] font-bold mr-[32px]'>734</span>
                                </div>
                                <div className='text-gray text-[12px]'>266 Left</div>
                                <img className='mt-[8px]' src='images/Bar.png' />
                            </div>
                        </div>

                    </div>

                    <div className='flex gap-[38px] ml-[48px] mt-[40px]'>

                        <div className='bg-white w-[328px]  rounded-[8px]'>
                            <div className=' ml-[32px] mt-[32px]'>
                                <h4 className='text-[16px] font-bold'>Best Selling</h4>
                                <div className='mt-[6px] mb-[24px] text-[12px]  text-gray'>THIS MONTH</div>
                            </div>
                            <div className='border-t border-hr-grey '>
                                <div className='flex gap-[8px] mt-[34px] items-center ml-[32px]'>
                                    <span className='text-[24px] font-bold'>$2,400</span>
                                    <div className='text-[14px] text-neutral-gray'>—</div>
                                    <div className='text-[14px] text-neutral-gray'>Total Sales</div>
                                </div>

                                <div className='text-[12px] flex gap-[8px] mt-[26px] max-w-[270px] ml-[32px] border border-hr-grey rounded-[8px] py-[2px] px-[16px]'>
                                    <div className='text-neutral-gray'>Classic Monochrome Tees —  </div>
                                    <div className='font-bold'> $940 Sales</div>
                                </div>

                                <div className='text-[12px] flex gap-[8px] mt-[26px] max-w-[270px] ml-[32px] border border-hr-grey rounded-[8px] py-[2px] px-[16px]'>
                                    <div className='text-neutral-gray'>Monochromatic Wardrobe —   </div>
                                    <div className='font-bold'> $790 Sales</div>
                                </div>

                                <div className='text-[12px] flex gap-[8px] mt-[26px] max-w-[270px] ml-[32px] border border-hr-grey rounded-[8px] py-[2px] px-[16px]'>
                                    <div className='text-neutral-gray'>Essential Neutrals —   </div>
                                    <div className='font-bold'> $740 Sales</div>
                                </div>

                                <img className='ml-[32px] mt-[34px] mb-[49px]' src='images/Circle.png' />

                            </div>
                        </div>

                        <div className='bg-white max-w-[695px] rounded-[8px]'>
                            <div className=' ml-[40px] mt-[32px] flex gap-[16px] mb-[20px]'>
                                <h4 className='text-[16px] font-bold'>Recent Orders</h4>
                                <button className='bg-light-gray rounded-[100px] px-[16px] py-[2px] text-[12px]'>View All</button>
                            </div>
                            <div className='border-t border-hr-grey'>
                                <table className=" w-[695px] ml-[40px] text-neutral-gray">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td>Mens Black T-Shirts</td>
                                            <td>20 Mar, 2023</td>
                                            <td>$75.00</td>
                                            <td>Processing</td>
                                        </tr>
                                        <tr >
                                            <td>Essential Neutrals</td>
                                            <td>19 Mar, 2023</td>
                                            <td>$22.00</td>
                                            <td>Processing</td>
                                        </tr>
                                        <tr>
                                            <td>Sleek and Cozy Black</td>
                                            <td>27 Feb, 2023</td>
                                            <td>$57.00</td>
                                            <td>Completed</td>
                                        </tr>
                                        <tr>
                                            <td>MOCKUP Black</td>
                                            <td>29 Jan, 2023</td>
                                            <td>$30.00</td>
                                            <td>Completed</td>
                                        </tr>
                                        <tr>
                                            <td>Monochromatic Wardrobe</td>
                                            <td>27 Jan, 2023</td>
                                            <td>$27.00</td>
                                            <td>Completed</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard