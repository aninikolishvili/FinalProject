import React from 'react'
import Admin_Menu from './Admin_Menu'
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { useState } from 'react'

const sizes = ['s', 'm', 'x', 'xl', 'xxl']

const AddProduct = () => {
    let [selected, setSelected] = useState([0])
    return (
        <div className='flex '>
            <Admin_Menu />
            <div className="bg-neutral-white w-full  ">
                <div className="max-w-[1116px] ">
                    <div className="flex my-[22px] ml-[47px]">
                        <a className="text-[14px] text-neutral-gray" href="/">Admin</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px] font-semibold" href="/Dashboard">Dashboard</a>
                    </div>
                    < div className='bg-white rounded-[8px] ml-[48px] mr-11 py-12'>
                        <div className=" w-full max-w-[1068px] m-auto flex  justify-between border-b border-hr-grey">
                            <h4 className='text-[18px] font-semibold ml-[48px] mb-[32px]'>Add Product</h4>
                        </div>

                        <form className="py-[64px] px-[48px] ">
                            <div className="flex gap-[74px] mb-[16px]">
                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Title</label>
                                    <input className="border w-full border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>
                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Stock status</label>
                                    <input className="border w-full border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>
                            </div>
                            <div className="flex gap-[74px] mb-[16px] ">

                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Price</label>
                                    <input className="border w-full border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>

                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Available quantity</label>
                                    <input className="border w-full border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>

                            </div>
                            <div className="flex gap-[74px] mb-[16px] ">
                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Category</label>
                                    <input className="border w-full border-box-grey h-[45px] rounded-[6px] block" type="text" />
                                </div>
                                <div className='w-full'>
                                    <label className="text-input-text text-[14px]">Images</label>
                                    <div className="flex gap-2 px-3 border border-box-grey outline-none rounded-md">
                                        <img src="/images/Upload.svg" />
                                        <input placeholder='Choose product images' className="h-[45px] w-full rounded-[6px] block" type="text" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[74px] mb-[16px]">
                                <div className="mb-[16px] w-full">
                                    <label className="text-input-text text-[14px]">Slug</label>
                                    <input className="border border-box-grey h-[45px] w-full rounded-[6px] block" type="text" />
                                </div>
                                <div className='flex gap-[36px] w-full'>
                                    <div className='flex gap-[36px] mb-[9px]'>
                                        <img src='Images/Black.png' />
                                        <img src='Images/Pink.png' />
                                        <img src='Images/Green.png' />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[74px] mb-[16px] w-full">
                                <div className="mb-[16px] w-full">
                                    <label className="text-input-text text-[14px]">SKU</label>
                                    <input className="border border-box-grey h-[45px] w-full rounded-[6px] block" type="text" />
                                </div>
                                <div className="mb-[16px] w-full">
                                    <label className="text-input-text text-[14px]">Colors</label>
                                    <div className='flex gap-[18px] mt-[13px]'>
                                        <img src='Images/Circle1.png' />
                                        <img src='Images/Circle2.png' />
                                        <img src='Images/Circle3.png' />
                                        <img src='Images/Circle4.png' />
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-[74px] mb-[16px] w-full'>
                                <div className="mb-[16px] w-full">
                                    <label className="text-input-text text-[14px]">Description</label>
                                    <input className="border border-box-grey h-[128px] w-full rounded-[6px] block" type="text" />

                                </div>
                                <div className='mt-[26px] w-full'>
                                    <label className="text-input-text text-[14px]">Sizes</label>
                                    <RadioGroup value={selected} onChange={setSelected} className='flex mt-[10px] gap-[10px]' aria-label="Server size">
                                        {sizes.map((size) => (
                                            <Field key={size} className="flex items-center">
                                                <Radio
                                                    value={size}
                                                    className=" flex w-[40px] h-[40px] border justify-center items-center  data-[checked]:bg-blue-400"
                                                >
                                                    <div className=''>{size}</div>
                                                </Radio>
                                            </Field>

                                        ))}
                                    </RadioGroup>
                                </div>
                            </div>
                        </form>
                        <button className='bg-Neutral-black  ml-[48px] px-[24px] py-[9.5px] text-[14px] rounded-[4px] text-white'>Save Product</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct