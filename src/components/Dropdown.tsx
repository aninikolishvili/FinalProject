import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Dropdown = () => {

    const [products, setProducts] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products/categories');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data: any = await res.json();

            setProducts(data)

        } catch (error) {
            console.error(error);
        }
    }
    useState(() => {
        getData()

        //@ts-ignore
    }, []);


    console.log(products);
    
    return (
        <div >
            <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-md text-black  shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                    Categories
                </MenuButton>
                <MenuItems
                    transition
                    anchor="bottom end"
                    className="bg-white  w-52 origin-top-right rounded-xl border border-white/5  p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    {products.map((item, key) => (
                        <MenuItem key={key}>

                            <Link to={`/listing/${item}`} className="group flex items-center gap-2 rounded-lg py-1.5 px-3 ">
                                {item}
                            </Link>
                        </MenuItem>
                    ))}


                </MenuItems>
            </Menu>
        </div>
    )
}

export default Dropdown;
