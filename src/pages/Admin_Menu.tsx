import React from 'react'

const Admin_Menu = () => {
    const dashboard = [
        {
            img: '/images/1.svg',
            label: 'Dashboard'
        },

        {
            img: '/images/2.svg',
            label: 'Products'
        },

        {
            img: '/images/3.svg',
            label: 'Orders'
        },

        {
            img: '/images/4.svg',
            label: 'Customers'
        },

        {
            img: '/images/5.svg',
            label: 'Reviews'
        },

        {
            img: '/images/6.svg',
            label: 'Settings'
        },
    ];
    return (
        <div className='max-w-[260px] h-screen '>
            <div className='flex gap-[12px] mt-[16px]  items-center mx-[72px] '>
            <img src='images/Logo.png'/>
            <h2 className='font-bold size-[20px]'>Admin</h2>
            </div>
            <div className='mt-[48px]'>
                   
                        {
                            dashboard.map((item, index) => (
                                <div className='flex gap-[10px] w-[212px] text-neutral-gray justify-start ml-[20px] items-center text-[14px] mb-[16px]' key={index}>
                                    <img src={item.img} />
                                    {item.label}
                                </div>
                            ))
                        }
                         <div className="mt-[46.87px]  border-t border-hr-grey" >
                            <div className='flex gap-[10px] mt-[32.13px] ml-[20px]'>
                                <img src='images/add.svg'/>
                                <label className='text-[14px] text-gray'>Extras</label>
                            </div>
                        </div>
        </div>
        </div>
    )
}

export default Admin_Menu;