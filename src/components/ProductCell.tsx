import React from "react";

interface ProductModel {
    image: string,
    title: string,
    stock: string,
    price: string
}

function ProductCell(props: { product: any }) {
    const { product } = props;
    return (
        <div>
                    <img className="bg-neutral-white rounded" src={product.image}  />
                    <h5 className="text-[14px] font-semibold mt-[25px]"> {product.title}</h5>
                    <button className="mt-[14px] border rounded-[100px] px-[16px] py-[2px] text-[12px]"> {product.stock}</button>
                    <span className="text-[14px] ml-[16px]">{product.price}</span>
                </div>
    )
}



export default ProductCell;
