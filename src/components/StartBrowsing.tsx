import React from "react";

const StartBrowsing = () => {
    return(
        <div className=" bg-neutral-white mt-[168px]">
        <div className="flex justify-between max-w-[1116px] m-auto">
            <div>
            <h2 className="font-bold text-[24px] mt-[52px]">Browse Our Fashion Paradise!</h2>
            <p className="text-[14px] text-gray mt-[24px] w-[462px]">Step into a world of style and explore our diverse collection of clothing categories.</p>
            <button className="bg-Neutral-black text-white mt-[32px] mb-[73px] rounded flex items-center gap-[6px]  py-[9.5px] w-[177px] px-[24px] text-[14px]">
                Start Browsing
                <img src="images/Vector (1).svg"/>
                </button>
                </div>

                <div >
                    <img src="images/Category.png" className="w-[225px] h-[311px]  flex justify-between"/>
                </div>
        </div>
        </div>
    )
}

export default StartBrowsing;