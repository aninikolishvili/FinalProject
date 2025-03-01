import { error, log } from 'console'
import React, { useEffect, useState } from 'react'

const GetCartFunct = () => {
    const [products, setProducts] = useState<any[]>([])
   


    const getAllProductsAndCart = async () => {
        try {
            const produsts_res = await fetch('https://fakestoreapi.com/products')
            const products_data = await produsts_res.json()
           

            const cart_res = await fetch('https://fakestoreapi.com/carts/1')
            const cart_products = await cart_res.json()
           

            let cart_products_data: any[] = []

            for (let index = 0; index < cart_products.products.length; index++) {
                const element = cart_products.products[index];

                products_data.find((product: any) => {
                    if (product.id === element.productId) {
                        cart_products_data.push(product)
                    }
                })
            }

            setProducts(cart_products_data);

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        getAllProductsAndCart()
    }, [])

    return (
        <div className='space-y-3'>

            {products.map((product, index) => (
                <div key={index} className='flex items-center p-5 gap-8 border border-lightborder shadow-md rounded-xl max-w-[500px]'>
                    <img src={product.image} width={100} />
                    <div>
                    <h2>{product.title}</h2>
                    <p className='font-bold'>${product.price}</p>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default GetCartFunct