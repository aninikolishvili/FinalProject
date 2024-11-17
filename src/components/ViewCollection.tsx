import React from "react";

const ViewCollection = () => {
    return (
        <div className="bg-neutral-white">
        <div className="flex justify-between  max-w-[1116px] m-auto  h-[440px] ">
           <div className="mt-[136px] ">
                <h1 className="text-Neutral-black font-bold text-[32px]">Fresh Arrivals Online</h1>
                <span className="mt-[12px] text-[14px]">Discover Our Newest Collection Today.</span>
            <div className="py-[48px]">
            <button className="bg-Neutral-black text-white w-[183px] h-[44px] text-[14px] pl-[24px] py-[9.5px] rounded flex items-center gap-2">View Collection
                <img  src="images/Vector (1).svg" />
            </button>
            </div>
            </div>
            <div className="relative">
            <img className="absolute bottom-0 right-0 w-[255px] h-96" src="/images/man.png" />
            <img className="mb-[19px] mt-[89px] " src="/images/Ellipse.png"/>
            
            </div>
        </div>
        </div>

    )
}

export default ViewCollection;