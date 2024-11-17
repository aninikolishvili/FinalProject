import Discount from "../components/Discount"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Checkout = () => {
    return (
        <div>
            <Discount />
            <Header />

            <div className="bg-neutral-white ">
                <div className="max-w-[1116px] m-auto py-[34.5px]">
                    <h3 className="text-[24px] font-bold">Checkout</h3>
                    <div className="flex mt-[8px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Ecommerce</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px]" href="/Checkout">Checkout</a>
                        
                    </div>
                </div>
            </div>

            <div className="flex max-w-[1116px] m-auto justify-between">

            <form className="mt-[72px] ">
                <h4 className="font-semibold text-[16px] mb-[64px]">Shipping Address</h4>

                <div className="mb-[15px] w-full">
                    <label className="text-input-text text-[14px]">Street Address</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>

                <div className="flex gap-[16px] mb-[15px]">

                <div>
                    <label className="text-input-text text-[14px]">City</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>

                <div>
                    <label className="text-input-text text-[14px]">State</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>

                </div>

                <div className="flex gap-[16px] mb-[15px]">

                <div>
                    <label className="text-input-text text-[14px]">Zip Code</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>

                <div>
                    <label className="text-input-text text-[14px]">Country</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>

                </div>

                <div className="flex gap-[16px]">

                <div>
                    <label className="text-input-text text-[14px]">Email</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>

                <div>
                    <label className="text-input-text text-[14px]">Full name</label>
                    <input className="border border-box-grey rounded-[6px] block" type="text" />
                </div>
                </div>
            </form>

            
            <div className="border-l mt-[56px] mb-[135px] border-box-grey" >
                    <div className="px-[24px]">
                        <h5 className="text-[16px] font-semibold mt-[32px]">Your Order</h5>

                        <div className="flex justify-between mt-[64px]">
                        <div className="flex gap-[12px]">
                            <img src="images/First.png"/>
                            <img src="images/Second.png"/>
                            <img src="images/Third.png"/>
                        </div>

                        <button className="text-[14px] border border-greyborder rounded-[4px] px-[24px] py-[9.5px] text-neutral-gray">Edit Cart</button>
                        </div>

                        <div className="flex justify-between mt-[40px]">
                            <div className="text-[14px]">Subtotal:</div>
                            <div className="font-semibold text-[14px]">$ 75.00</div>
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
                            <div className="font-bold text-[14px]">$ 78.00</div>
                        </div>

                        <button className="text-white rounded-[4px] bg-Neutral-black mb-[56px] mt-[32px] text-[14px] py-[9.5px] px-[115.5px]">Place Order</button>
                    </div>

                </div>
                </div>

                <Footer/>

        </div>
    )
}

export default Checkout