import React, { useState } from 'react'
import store from '../../assets/images/store.jpg'
import { Button, Avatar, Tooltip } from '@material-tailwind/react'
import {
    Navbar,
    MobileNav,
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
} from "@heroicons/react/24/outline";
import Cart from '../Cart';
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../features/Slices/authSlice";

function NavBar() {
    // const amount = useSelector(state => state.cart.amount);
    const user = useSelector(state => state.user.user)
    const { name, image } = user
    console.log("User: ", user)
    const dispath = useDispatch()
    const totalAmount = useSelector(state => state.cart.totalAmount);
    // const cart = useSelector(state => state.cart.cart);
    const [open, setOpen] = useState(false);
    const hanldeClickLogOut = () => {
        const action = logout()
        dispath(action)
    }

    const handleOpen = () => {
        setOpen(!open)
    };
    return (
        <div>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 w-full'>
                <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>Welcome All</h3>
            </div>
            <div className='flex justify-around items-center'>
                <div>
                    <img className='h-28 w-full' src={store} alt='store' />
                </div>
                <div className='flex flex-row items-center'>
                    <Button className='font-inter text-2x1 font-bold tracking-normal leading-none text-center mr-4'>
                        LOGOUT
                    </Button>
                    <div className='flex flex-row items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#000"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <p className="font-inter text-base font-bold tracking-normal leading-none text-center mr-2">Whish List</p>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer' onClick={handleOpen}>
                        {totalAmount > 0 ? <span className="rounded-full bg-gray-300 px-2 font-inter text-sm mr-1">{totalAmount}</span> : (<svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="#000"
                            className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>)}
                        <p className="font-inter text-base font-bold tracking-normal leading-none text-center mr-2">Shopping Bag</p>
                        <div>{open && <Cart openModel={open} setOpen={handleOpen} />}</div>
                    </div>
                    <div className='flex flex-row items-center cursor-pointer pl-4'>
                        {image && <Avatar src={image} alt='avatar' size='sm' className='mr-2' />}
                    </div>
                    <div onClick={hanldeClickLogOut}>
                        <Tooltip content='Sign out' placement='bottom'>
                            <p className='font-inter text-sm font-medium tracking-normal leading-none'>
                                Hi {name.toUpperCase()}
                            </p>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-around">
                <div className='text-white font-inter text-base font-normal tracking-normal leading-none text-center'>
                    50% OFF
                </div>
                <div className='text-white font-inter text-base font-normal tracking-normal leading-none text-center'>
                    Different payment methods
                </div>
                <div className='text-white font-inter text-base font-normal tracking-normal leading-none text-center'>
                    Free shipping and returns
                </div>
            </div>
        </div>

    )
}

export default NavBar