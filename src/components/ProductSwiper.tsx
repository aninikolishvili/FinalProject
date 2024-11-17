import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Colors from '../components/Colors';
import Counter from '../pages/Counter';

interface ProductDetails {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

const ProductSwiper = () => {
    const { id } = useParams();

    const [productDetails, setProductdetails] = useState<ProductDetails>();
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProductDetails = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();

            setProductdetails(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProductDetails()
    }, [id]);
    if (Loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>error</div>;
    }


    return (
        <div className='max-w-[1116px] m-auto'>
            <div className='flex mt-[16px] mb-[17.5px] '>
                <a href='/'>Ecommerce</a>
                <img src='/images/Right.png' />
                <a className='font-semibold' href='/'>{productDetails?.category}</a>
            </div>
            <div className='flex gap-[120px]'>
                <div className=' bg-neutral-white h-[574px] w-full  max-w-[534px]'>
                    <div className='w-[288px] mt-[16px] mx-auto mb-[10px] '>
                        <img className='w-[288px] h-[404px] bg-none' src={productDetails?.image} />
                    </div>
                </div>

                <div>
                    <div className='flex gap-[119px] items-center'>
                        <h2 className='font-bold text-[24px]'>{productDetails?.title}</h2>

                    </div>
                    <div>
                        <div className='flex items-center gap-[8px] mt-[12px] mb-[24px]' >
                            <div className='bg-neutral-white flex rounded-[100px] w-[167px] h-[28px]  items-center gap-[8px]'>
                                <img className='ml-[20px]' src='/images/Star.png' />
                                <span className='text-neutral-gray py-[2px] mr-[16px] text-[12px]'>4.2 — 54 Reviews</span>
                            </div>

                            <button className="border rounded-[100px] px-[16px] py-[2px] text-[12px] text-neutral-gray">IN STOCK</button>
                        </div>
                        <span className="text-[18px] font-bold">${productDetails?.price}</span>
                        <Colors />
                        <div>
                            <div className='text-[12px] text-neutral-gray mt-[32px]'>QUANTITY</div>
                            <div className='mt-[10px]'> 
                                <Counter/>
                                 </div>
                        </div>

                        <div className='mt-[40px] flex gap-[16px]'>
                            <button className='text-[14px] text-white py-[9.5px] px-[104px] bg-Neutral-black rounded-[4px]'>Add to cart</button>
                            <img src='/images/Wishlist.png' />
                        </div>

                        <div className='text-[12px] text-neutral-gray mt-[12px]'>— FREE SHIPPING ON ORDERS $100+</div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default ProductSwiper