
import ProductCell from "./ProductCell";
import React, { useState } from "react";

const Featured = () => {
    const [products, setProducts] = useState([]);

    const apiProducts2 = async () => {

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
    useState(() => {
        apiProducts2();
    // @ts-ignore
    }, []);


    return (
        <div>
            <div className="flex justify-center  mt-[152px] items-center">
        <button className="border rounded-[100px] px-[16px] py-[3px] text-[14px]">Featured</button>
        <span className="text-[14px] ml-[24px]">Latest</span>
        </div>
        <div className="grid grid-cols-4 gap-[20px] mt-[80px] max-w-[1116px] m-auto ">
            {products.slice(4,8).map((product: any, index) => (
              <a key={index} href={`/products/${product.id}`}>
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
                  <p className="text-[#474B57] text-[14px] mt-[12px]">{product.price}</p>
                </div>
              </a>
            ))}
            </div>
        </div>
    )
}



export default Featured;