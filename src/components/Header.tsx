import React from "react";
import Dropdown from "./Dropdown"
const Header = () => {

    return (
        <div className="flex items-center justify-between  py-3  max-w-[1116px] m-auto">
            <div className="flex items-center gap-[12px] font-semibold  text-Neutral-black text-[20px]">
                <img src="/images/Logomark.svg" />
                <h2>Eccomerce</h2>
            </div>

            <div className="flex gap-9 text-gray-600">
                <a href="/">Home</a>
                <Dropdown />
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>

            <div className="flex gap-2 px-3 py-2 border border-gray-300 outline-none rounded-md">
                <img src="/images/Search.png" />
                <input type="text" placeholder="Search products" />
            </div>

            <div className="flex gap-6">
                <img src="/images/Cart.png" />
                <img src="/images/User.png" />
            </div>
        </div>
    )
}

export default Header;