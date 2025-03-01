import React from "react";

const Footer = ({bgWhite}: any) => {
    return (
        <div className={bgWhite ? 'bg-white': 'bg-light-gray'}>
        <div className="flex justify-between max-w-[1116px] m-auto">

            <div className="mt-[88px]  w-[272px] mb-[100px] h-[160px]">
            <div className="flex items-center">
                <img src="/images/Logomark.png" />
                <h3 className="text-[20px] font-bold ml-[16px]">Ecommerce</h3>
            </div>
            <p className="mt-[12px] text-neutral-gray">DevCut is a YouTube channel for practical project-based learning.</p>
            <div className="flex mt-[32px] justify-around w-[120px]">
                <img src="/images/Github.png" />
                <img src="/images/Instagram.png" />
                <img src="/images/Youtube.png" />
                </div>
            </div>
            <div className="flex gap-[50px] mt-[74px] h-[172px] text-[14px]">

            <div>
                <h5 className="text-text-gray">SUPPORT</h5>
                <div className="text-neutral-gray">
                <p className="mt-[40px]">FAQ</p>
                <p className="mt-[16px]">Terms of use</p>
                <p className="mt-[16px]">Privacy Policy</p>
                </div>
            </div>

            <div>
                <h5 className="text-text-gray">COMPANY</h5>
                <div className="text-neutral-gray">
                <p className="mt-[40px]">About us</p>
                <p className="mt-[16px]">Contact</p>
                <p className="mt-[16px]">Careers</p>
                </div>
            </div>

            <div>
                <h5 className="text-text-gray">SHOP</h5>
                <div className="text-neutral-gray">
                <p className="mt-[40px]">My Account</p>
                <p className="mt-[16px]">Checkout</p>
                <p className="mt-[16px]">Cart</p>
                </div>
            </div>
            </div>

            <div className="mt-[79px] ">
                <h4 className="text-[14px] text-text-gray">ACCEPTED PAYMENTS</h4>
                <div className="flex mt-[40px]">
                    <div className="flex w-[176px] justify-around grayscale">
                <img src="/images/Mastercard.png"/>
                <img src="/images/Amex.png"/>
                <img src="/images/Visa.png"/>
                </div>
                </div>
            </div>

        </div>
        <hr className="max-w-[1116px] m-auto border-zinc-100  border-1"/>
        <p className=" text-neutral-500 mt-[27px] text-[14px] flex justify-center ">© 2023 DevCut. All rights reserved.</p>

        </div>
    )
}

export default Footer;