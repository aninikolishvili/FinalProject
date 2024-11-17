import React from 'react'
import Detailsfunct from './Detailsfunct'

const DetailsFunction = () => {
  const DetailsInfo = [ {
    title: 'Detail',
    description: 'Elevate your everyday style with our Men\'s Black T-Shirts, the ultimate wardrobe essential for modern men. Crafted with meticulous attention to detail and designed for comfort, these versatile black tees are a must-have addition to your collection. The classic black color never goes out of style. Whether you\'re dressing up for a special occasion or keeping it casual, these black t-shirts are the perfect choice, effortlessly complementing any outfit.',
    features: [
        'Premium Quality',
        'Versatile Wardrobe Staple',
        'Available in Various Sizes',
        'Tailored Fit'
    ],
  },
  ]

    
  return (
    <div className='flex max-w-[1116px] m-auto justify-between'>
    <div className='mt-[248px] text-[14px]'>
        <button className='flex cursor-pointer rounded-[8px] bg-neutral-white items-center gap-[10px] w-[241px] h-[41px]'>
            <img src='images/Details.png' />
            Details
        </button>
        <div className='flex items-center mt-[16px] gap-[10px] w-[241px] text-[14px] h-[41px]'>
            <img src='images/EmptyStar.png' />
            <div>Reviews</div>
        </div>

    </div>

    <div >
               
               {DetailsInfo.map((Detail, index) => (
                           <Detailsfunct key={index} Detail={Detail}/>
                       ))}
                   </div>
  
    </div>
  )
}

export default DetailsFunction