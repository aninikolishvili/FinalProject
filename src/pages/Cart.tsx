import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Counter from "./Counter";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const navigate = useNavigate();
    const CheckoutClick = () => {
      navigate('/Checkout');
    }
    return (
        <div>
            <Discount />
            <Header />

            <div className="bg-neutral-white ">
                <div className="max-w-[1116px] m-auto py-[34.5px]">
                    <h3 className="text-[24px] font-bold">Cart</h3>
                    <div className="flex mt-[8px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Ecommerce</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px]" href="/Cart">Cart</a>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between max-w-[1116px] m-auto ">
                <div>
                    <h5 className="text-[16px] font-semibold mt-[72px]">Your cart</h5>
                    <hr className="text-hr-grey"></hr>
                    <div className="flex items-center gap-[32px] mt-[48px]">
                        <img src="images/image1.png" />
                        <div>
                            <div className="text-[14px]">Raw Black T-Shirt Lineup</div>
                            <div className="flex  gap-[8px] items-center">
                                <div className="text-grey ">Color: </div>
                                <div className="rounded-full w-[12px] h-[12px] bg-green"></div>
                                <div className="flex gap-[8px] items-center">
                                    <div className="text-grey text-[12px]">—</div>
                                    <div className="text-grey text-[12px]">Size: M</div>
                                    <div >$75.00</div>
                                    <img src="images/Remove.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[32px] mt-[48px]">
                        <img src="images/image2.png" />
                        <div>
                            <div className="text-[14px]">Essential Neutrals</div>
                            <div className="flex items-center gap-[8px]">
                                <div className="text-grey">Color: </div>
                                <div className="rounded-full w-[12px] h-[12px] bg-blue"></div>
                                <div className="flex gap-[8px] items-center">
                                    <div className="text-grey text-[12px]">—</div>
                                    <div className="text-grey text-[12px]">Size: M</div>
                                    <div>$22.00</div>
                                    <img src="images/Remove.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border box-border mb-[220px]  mt-[56px] border-box-grey" >
                    <div className="px-[24px]">
                        <h5 className="text-[16px] font-semibold mt-[32px]">Order Summary</h5>

                        <div className="flex justify-between mt-[40px]">
                            <div className="text-[14px]">Subtotal:</div>
                            <div className="font-semibold text-[14px]">$ 90.00</div>
                        </div>
                        <div className="flex justify-between mt-[12px]">
                            <div className="text-[14px] ">Shipping:</div>
                            <div className="font-semibold text-[14px]">Free</div>
                        </div>
                        <div className="flex justify-between mt-[12px]">
                            <div className="text-[14px] ">Tax:</div>
                            <div className="font-semibold text-[14px]">$ 3.00</div>
                        </div>
                        <hr className="text-hr-grey mt-[24px]"></hr>
                        <div className="flex justify-between mt-[24px]">
                            <div className="font-semibold text-[14px]">Total</div>
                            <div className="font-bold text-[14px]">$ 100.00</div>
                        </div>

                        <button onClick={CheckoutClick} className="text-white rounded-[4px] bg-Neutral-black mt-[32px] text-[14px] py-[9.5px] px-[115.5px]">Checkout</button>
                        <div className="flex justify-center">
                            <div className="text-[12px] border-b border-black mt-[32px] mb-[40px]">Continue Shopping</div>

                        </div>
                    </div>

                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Cart;