import React from 'react'
import Admin_Menu from './Admin_Menu'

const Costumers = () => {
    const costumers = [
        {
            img: 'images/Avatar1.png',
            name: 'Esther Howard',
            email: 'esther.howard@gmail.com',
            shippingAddress: '8642 Yule Street, Arvada CO 80007',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar2.png',
            name: 'Wade Warren',
            email: 'wade.warren@gmail.com',
            shippingAddress: '5331 Rexford Court, Montgomery AL 36116',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar3.png',
            name: 'Brooklyn Simmons',
            email: 'brooklyn.simmons@gmail.com',
            shippingAddress: '2325 Eastridge Circle, Moore OK 73160',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar4.png',
            name: 'Robert Fox',
            email: 'robert.fox@gmail.com',
            shippingAddress: '2436 Naples Avenue, Panama City FL 32405',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar5.png',
            name: 'Dianne Russell',
            email: 'dianne.russell@gmail.com',
            shippingAddress: '6095 Terry Lane, Golden CO 80403',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar6.png',
            name: 'Ralph Edwards',
            email: 'ralph.edwards@gmail.com',
            shippingAddress: '4001 Anderson Road, Nashville TN 37217',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar7.png',
            name: 'Theresa Webb',
            email: 'theresa.webb@gmail.com',
            shippingAddress: '19141 Pine Ridge Circle, Anchorage AK 99516',
            action: 'images/More.svg'
        },

        {
            img: 'images/Avatar8.png',
            name: 'Arlene McCoy',
            email: 'arlene.mccoy@gmail.com',
            shippingAddress: '2613 Cottonwood Street, Anchorage AK 99508',
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
                            <h4 className='text-[18px] font-semibold'>Customers</h4>
                            <div className='gap-[16px] flex'>
                                <div className="flex gap-2 px-3 py-[7.5px] border border-hr-grey outline-none rounded-md">
                                    <img src="/images/Search.png" />
                                    <input type="text" placeholder="Search costumers" />
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
                                {costumers.map((item, index) => (
                                    <tr key={index} >
                                        <td className='py-[32px]  px-[47px]'><img src={item.img} /></td>
                                        <td className='py-[32px]'> {item.name}</td>
                                        <td className='py-[32px]'>  {item.email}</td>
                                        <td className='py-[32px]'> {item.shippingAddress}</td>
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

export default Costumers