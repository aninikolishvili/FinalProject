import React from 'react'
import Discount from "../components/Discount";
import Header from "../components/Header";
import { useState } from 'react';
import Colors from '../components/Colors';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import {Field, Label, Radio, RadioGroup}  from '@headlessui/react'
import {useNavigate} from 'react-router-dom'

const Listing = () => {
    const [products, setProducts] = useState([]);

    const apiProducts = async () => {

        try {
            const res = await fetch('https://fakestoreapi.com/products');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data: any = await res.json();

            console.log(data)

            setProducts(data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        apiProducts();
        // @ts-ignore
    }, []);
    const [price, setPrice] = useState(50);
    const handlePriceChange = (e: any) => {
        setPrice(Number(e.target.value));
    };
    const [apiData, setApiData] = useState([]);

    const getData = async () => {
       
        try {
            const res = await fetch('https://fakestoreapi.com/products/categories');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data: any = await res.json();

            setApiData(data)

        } catch (error) {
            console.error(error);
        }
    }

    
    useState(() => {
        getData()

        //@ts-ignore
    }, []);

    const navigate = useNavigate();
     const onClickCategory = (item: any) => {
        console.log(item);
        navigate(`/listing/${item}`)
        
     }


    return (
        <div >
            <Discount />
            <Header />
            <div className="bg-neutral-white ">
                <div className="max-w-[1116px] m-auto py-[19.5px]">
                    <div className="flex ">
                        <a className="text-[14px] text-neutral-gray" href="/">Ecommerce</a>
                        <img src="/images/Right.png" />
                        <a className="text-[14px]" href="/listing">Search</a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>

                <div className='border max-w-[248px] max-h-[700px] border-lightborder mt-[32px]'>
                    <h4 className='text-14px font-semibold'>Categories</h4>
                    <RadioGroup aria-label="Server size" onChange={onClickCategory}>
                        {apiData.map((item) => (
                            <Field key={item} className="flex gap-2 px-1 py-3  border-b-[1px] border-[#E9E9EB]"
                            >
                                <Radio
                                    value={item}
                                    className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-red-400"
                                >
                                    <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />

                                </Radio>
                                <Label>{item}</Label>
                            </Field>
                        ))}
                    </RadioGroup>

                    <div>
                        <Colors />
                        <h4 className='mt-[40px]'>price</h4>
                        <input className='mb-6'
                            type='range'
                            min='0'
                            max='1000'
                            onChange={handlePriceChange}
                        />
                        <span className="text-md font-semibold">${price}</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-[20px]  max-w-[824px] m-auto ">
                    {products.slice(0, 9).map((product: any,) => (
                        <Link key={product.id} to={`/products/${product.id}`}>
                            <div className="py-[16px]">
                                <img className="w-[237px] h-[312px]" src={product.image} />
                            </div>
                            <div>
                                <p className="text-[14px] text-[#0E1422] align-center w-[248px] h-[40px] font-bold">
                                    {product.title}
                                </p>
                            </div>
                            <div className="w-[239px] mt-10 h-[28px] flex gap-[16px]  items-center">
                                <button className="text-[#0E1422]   w-[89px] h-[28px] text-[12px] rounded-[100px] border-solid border-[#E6E7E8] border-2">
                                    {product.rating.count === 0 ? "Stock Out" : "IN STOCK"}
                                </button>
                                <p className="text-[#474B57] text-[14px] mt-[12px] font-bold">${product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Subscribe/>
            <Footer bgWhite/>
        </div>
    )
}

export default Listing