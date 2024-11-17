import React from "react";

const Subscribe = () => {
    return(
        <div className=" bg-neutral-white mt-[192px]">
        <div className="flex justify-between h-[200px] max-w-[1116px] m-auto">
            <div >
            <h3 className="font-bold text-[24px] mt-[64px] ">Join Our Newsletter</h3>
            <p className="text-[14px] text-neutral-gray mt-[24px]">We love to surprise our subscribers with occasional gifts.</p>
            </div>

            <div className="mt-[78px] ">
                <input className="border pl-[16px] w-[320px]  rounded py-[10px] text-[14px] border-gray " type="text" placeholder="Your email address"/>
                <button className="ml-[10px] px-[24px]  py-[9.5px] border-none rounded bg-Neutral-black text-white text-[14px]">Subscribe</button>
            </div>
        </div>
        </div>

    )
}

export default Subscribe;