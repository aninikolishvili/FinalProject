import React from "react";

const ShoppingPromise = () => {
    return(
        <div className="grid gap-[54px] grid-cols-3 place-items-start  mt-[88px] justify-between max-w-[1116px] m-auto">
            <div  className="mt-[16px] mb-[97px]" >
                <img src="images/Car.png "/>
                <h5 className="mt-[24px] font-bold ">Free Shipping</h5>
                <p className="mt-[12px] text-[14px]">Upgrade your style today and get FREE shipping on all orders! Don't miss out.</p>

            </div>
            <div className="mt-[16px] mb-[97px] " >
            <img  src="images/Satisfication.png"/>
                <h5 className="mt-[24px] font-bold">Satisfaction Guarantee</h5>
                <p className="mt-[12px] text-[14px]">Shop confidently with our Satisfaction Guarantee: Love it or get a refund.</p>
            </div>
            <div className="mt-[16px] mb-[97px]">
            <img  src="images/Secure.png"/>
                <h5 className="mt-[24px] font-bold">Secure Payment</h5>
                <p className="mt-[12px] text-[14px]">Your security is our priority. Your payments are secure with us.</p>
            </div>

        </div>
    )
}

export default ShoppingPromise;