import { Description } from '@headlessui/react'
import React from 'react'
import Admin_Menu from './Admin_Menu'

const OrdersList = () => {
    const orders = [
        {
            img: 'images/1.png',
            label: 'Raw Black T-Shirt Lineup',
            date: '20 Mar, 2023',
            price: '$75.00',
            status: 'Processing',
            action: 'images/More.svg'
        },

        {
            img: 'images/2.png',
            label: 'Classic Monochrome Tees',
            date: '19 Mar, 2023',
            price: '$35.00',
            status: 'Processing',
            action: 'images/More.svg'
        },

        {
            img: 'images/3.png',
            label: 'Monochromatic Wardrobe',
            date: '7 Feb, 2023',
            price: '$27.00',
            status: 'Completed',
            action: 'images/More.svg'
        },

        {
            img: 'images/4.png',
            label: 'Essential Neutrals',
            date: '29 Jan, 2023',
            price: '$22.00',
            status: 'Completed',
            action: 'images/More.svg'
        },

        {
            img: 'images/5.png',
            label: 'UTRAANET Black',
            date: '27 Jan, 2023',
            price: '$43.00',
            status: 'Processing',
            action: 'images/More.svg'
        },

        {
            img: 'images/7 (2).png',
            label: 'Elegant Ebony Sweatshirts',
            date: '4 Jan, 2023',
            price: '$35.00',
            status: 'Cancelled',
            action: 'images/More.svg'
        },

        {
            img: 'images/8 (1).png',
            label: 'Sleek and Cozy Black',
            date: '28 Dec, 2022',
            price: '$57.00',
            status: 'Completed',
            action: 'images/More.svg'
        },

        {
            img: 'images/8 (2).png',
            label: 'MOCKUP Black',
            date: '20 Dec, 2022',
            price: '$30.00',
            status: 'Processing',
            action: 'images/More.svg'
        }
    ]
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
                        <div className=" w-full max-w-[980px] m-auto flex justify-between ">
                            <h4 className='text-[18px] font-semibold'>Orders</h4>
                            <div className='gap-[16px] flex'>
                                <div className="flex gap-2 px-3 py-[7.5px] border border-hr-grey outline-none rounded-md">
                                    <img src="/images/Search.png" />
                                    <input type="text" placeholder="Search orders" />
                                </div>
                            </div>
                        </div>


                        <table className="w-full text-neutral-gray mt-[24px]">
                            <thead>
                                <tr className='border-b border-t border-hr-grey'>
                                    <th >
                                        <img className='text-left  px-[48px]' src='images/sort.svg' />
                                    </th>
                                    <th className='text-left py-[9px]'>Order</th>
                                    <th className='text-left'>Date</th>
                                    <th className='text-left'>Total</th>
                                    <th className='text-left'>Status</th>
                                    <th className='text-left'>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {orders.map((item, index) => (
                                    <tr key={index} >
                                        <td className='py-[32px]  px-[48px]'><img src={item.img} /></td>
                                        <td className='py-[32px]'> {item.label}</td>
                                        <td className='py-[32px]'> {item.date}</td>
                                        <td className='py-[32px]'>  {item.price}</td>
                                        <td className='py-[32px]'> {item.status}</td>
                                        <td className='py-[32px]'> <img src={item.action} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersList