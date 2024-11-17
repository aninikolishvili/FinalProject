import { Description } from '@headlessui/react'
import React from 'react'
import Admin_Menu from './Admin_Menu'

const CostumersReviews = () => {
    const reviews = [
        {
            img: 'images/Avatar1.png',
            name: 'Esther Howard',
            review: 'Completed the task and added the required documentation, can someone please ....',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar2.png',
            name: 'Wade Warren',
            review: 'Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar3.png',
            name: 'Brooklyn Simmons',
            review: 'Twenty 30-second applications within half an hour is well in excess.',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar4.png',
            name: 'Robert Fox',
            review: 'An interesting implication of the 2007 study concerns the use of hand sanitizers.',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar5.png',
            name: 'Dianne Russell',
            review: 'I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar6.png',
            name: 'Ralph Edwards',
            review: 'The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar7.png',
            name: 'Theresa Webb',
            review: 'Alcohol based exposures through inadvertently consuming hand sanitize',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar8.png',
            name: 'Arlene McCoy',
            review: 'Im grateful for the supportive work environment during personal challenges.',
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
                            <h4 className='text-[18px] font-semibold'>Reviews</h4>
                            <div className='gap-[16px] flex'>
                                <div className="flex gap-2 px-3 py-[7.5px] border border-hr-grey outline-none rounded-md">
                                    <img src="/images/Search.png" />
                                    <input type="text" placeholder="Search reviews" />
                                </div>
                            </div>
                        </div>
                        <table className="w-full text-neutral-gray mt-[24px]">
                            <thead>
                                <tr className='border-b border-t border-hr-grey'>
                                    <th >
                                        <img className='text-left  px-[61px]' src='images/sort.svg' />
                                    </th>
                                    <th className='text-left py-[9px]'>Name</th>
                                    <th className='text-left'>Email</th>
                                    <th className='text-left'>Shipping Address</th>
                                    <th className='text-left px-[48px]'>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {reviews.map((item, index) => (
                                    <tr key={index} >
                                        <td className='py-[32px]  px-[47px]'><img src={item.img} /></td>
                                        <td className='py-[32px]'> {item.name}</td>
                                        <td className='py-[32px]'> {item.review}</td>
                                        <td className='py-[32px] px-[48px]'> <img src={item.action} /></td>
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

export default CostumersReviews