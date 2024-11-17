import React from 'react'

interface detail {
    title: string,
    description: string,
    features: string[]
};

function Detailsfunct(props: { Detail: detail }) {
    const { Detail } = props;
    return (


        <div className='mt-[176px] w-[727px]'>
            <h4 className='font-bold text-[16px]'>{Detail.title}</h4>
            <p className='mt-[24px] text-neutral-gray text-[14px]'>{Detail.description}</p>

            <div >
                <ul className='mt-[56px] list-inside list-disc text-neutral-gray '>
                    {Detail.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    )
                    )}
                </ul>
            </div>

        </div>

    )
}


export default Detailsfunct;