import React from 'react'
import Admin_Menu from './Admin_Menu'

const Products = () => {
    return (
        <div className='flex'>
            <Admin_Menu />
            <div className="bg-neutral-white w-full  ">
                <div className="max-w-[1116px] ">
                    <div className="flex my-[22px] ml-[47px]">
                        <a className="text-[14px] text-neutral-gray" href="/">admin</a>
                        <img src="images/Right.png" />
                        <a className="text-[14px] font-semibold" href="/Dashboard">Dashboard</a>
                    </div>
                </div>
                <div className='bg-white rounded-[8px] ml-[48px] mr-11 py-[24px]'>
                    <div className=" w-full max-w-[1068px] m-auto flex  justify-between">


                        <h4 className='text-[18px] font-semibold'>Products</h4>
                        <div className='gap-[16px] flex items-center'>
                            <button className='bg-Neutral-black px-[20px] py-[7.5px] text-[14px] rounded-[4px] text-white'>Add product</button>
                            <div className="flex gap-2 px-3 py-2 border border-gray-300 outline-none rounded-md">
                                <img src="/images/Search.png" />
                                <input type="text" placeholder="Search products" />
                            </div>
                        </div>
                    </div>

                    <div className='border-t border-hr-grey  mt-[24px] ml-[40px] '>
                        <table className="w-full text-neutral-gray">
                            <thead>
                                <tr className='border-b border-hr-grey'>
                                    <th >
                                        <img className='text-left' src='images/sort.svg' />
                                    </th>
                                    <th className='text-left py-[9px]'>Name</th>
                                    <th className='text-left'>SKU</th>
                                    <th className='text-left'>Price</th>
                                    <th className='text-left'>Stock</th>
                                    <th className='text-left'>Categories</th>
                                    <th className='text-left'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='py-[35px]' ><img src='images/1.png' /></td>
                                    <td className='py-[35px]' >Raw Black T-Shirt Lineup</td>
                                    <td className='py-[35px]' >47514501</td>
                                    <td className='py-[35px]' >$75.00</td>
                                    <td className='py-[35px]' >In Stock</td>
                                    <td className='py-[35px]' >T-shirt, Men</td>
                                    <td className='py-[35px]' ><img src='images/More.svg' /></td>
                                </tr>
                                <tr >
                                    <td className='py-[35px]'><img src='images/2.png' /></td>
                                    <td className='py-[35px]'>Classic Monochrome Tees</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$35.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>T-shirt, Men</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                                <tr>
                                    <td className='py-[35px]'><img src='images/3.png' /></td>
                                    <td className='py-[35px]'>Monochromatic Wardrobe</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$27.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>T-shirt</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                                <tr>
                                    <td className='py-[35px]'><img src='images/4.png' /></td>
                                    <td className='py-[35px]'>Essential Neutrals</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$22.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>T-shirt, Raw</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                                <tr>
                                    <td className='py-[35px]'><img src='images/5.png' /></td>
                                    <td className='py-[35px]'>UTRAANET Black</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$43.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>T-shirt, Trend</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                                <tr>
                                    <td className='py-[35px]'><img src='images/7 (2).png' /></td>
                                    <td className='py-[35px]'>Elegant Ebony Sweatshirts</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$35.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>T-shirt</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                                <tr>
                                    <td className='py-[35px]'><img src='images/8 (1).png' /></td>
                                    <td className='py-[35px]'>Sleek and Cozy Black</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$57.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>THoodie</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                                <tr>
                                    <td className='py-[35px]'><img src='images/8 (2).png' /></td>
                                    <td className='py-[35px]'>MOCKUP Black</td>
                                    <td className='py-[35px]'>47514501</td>
                                    <td className='py-[35px]'>$30.00</td>
                                    <td className='py-[35px]'>In Stock</td>
                                    <td className='py-[35px]'>T-shirt</td>
                                    <td className='py-[35px]'><img src='images/More.svg' /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>




                </div>
            </div>
        </div>
    )
}

export default Products