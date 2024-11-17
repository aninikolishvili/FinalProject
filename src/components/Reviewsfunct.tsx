import React from 'react'
import BasicRating from './Rating';

interface review {
    image: string,
    name: string,
    time: string,
    information: string
}

function Reviewsfunct(props: { Review: review }) {
    const { Review } = props;


    return (
        <div >


            <div className='mt-[24px]  flex gap-[24px]'>
                <img className='w-[48px] h-[48px]' src={Review.image} />
                <div className='w-full' >
                    <div className='flex justify-between h-[30px]'>
                        <h4 className='text-[14px] font-semibold flex '>{Review.name}</h4>
                        {/* <img  src={Review.stars}/> */}
                        <BasicRating />
                    </div>
                    <div className='mt-[6px] text-[12px] text-neutral-gray'>{Review.time}</div>
                    <p className='text-neutral-gray text-[14px] mt-[16px]'>{Review.information}</p>
                </div>
            </div>
        </div>
    )
}

export default Reviewsfunct