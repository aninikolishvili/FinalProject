import React from 'react'
import ProductCell from './ProductCell'





const AlikeProducts = () => {
    const products = [
        {
            image: '/images/Shirt1.png',
            title: 'Classic Monochrome Tees',
            stock: 'IN STOCK',
            price: '$35.00'
        },

        {
            image: '/images/Shirt2.png',
            title: 'Monochromatic Wardrobe',
            stock: 'IN STOCK',
            price: '$27.00'
        },

        {
            image: '/images/Shirt3.png',
            title: 'Essential Neutrals',
            stock: 'IN STOCK',
            price: '$22.00'
        },

        {
            image: '/images/Shirt4.png',
            title: 'UTRAANET Black',
            stock: 'IN STOCK',
            price: '$43.00'
        }
    ];
    return (
       
        <div className='flex justify-between flex-col max-w-[1116px] m-auto mt-[176px]'>
            <div>
                <h2 className='font-bold text-[24px] mt-[16px]'>You might also like</h2>
                <div className='text-[12px] text-text-gray mt-[8px]'>SIMILAR PRODUCTS</div>
            </div>

            <div className="grid place-items-start m-0  grid-cols-4 gap-[36px] mt-[72px] mb-[144px]">
                {products.map((product, index) => (
                    <ProductCell key={index} product={product} />
                ))}
            </div>
        </div>
    
    )
}

export default AlikeProducts