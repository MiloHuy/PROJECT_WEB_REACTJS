import React, { useState } from 'react'
import background_coputer from '../../assets/images/background_computer.jpg'
import person from '../../assets/images/person.jpg'
import { countries } from '../Country'
import {
    Typography,
    Input,
    Button,
    Select,
    Option,
    Avatar,
} from "@material-tailwind/react";

import SideBar from '../SideBar';

function AccountPage() {
    const [open, setOpen] = useState(0);
    // const [country, setCountry] = useState(0);
    // const { name, flags, countryCallingCode } = countries[country];
    const [sidebar, setSideBar] = useState(false)
    console.log("Siderbar :", sidebar)
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const handleOpenSideBar = () => {
        setSideBar(!sidebar)
    }
    return (
        <div className='relative mt-4'>
            <div >
                <img className='w-full z-0 h-[300px]' src={background_coputer} alt='' />
            </div>
            <div className="flex items-center gap-4 ml-10 -translate-y-7">
                <Avatar size='xxl' src={person} alt="avatar" onClick={handleOpenSideBar} className='cursor-pointer' />
                <div>
                    <Typography variant="h6">Tania Andrew</Typography>
                    <Typography variant="small" color="gray" className="font-normal" >
                        Web Developer
                    </Typography>
                </div>
            </div>
            <div className={`flex ${sidebar ? '' : 'gap-10'}`}>
                <SideBar sidebar={sidebar} handleOpenSideBar={handleOpenSideBar} />
                <div className={`border-4 border-sky-500 h-min justify-center items-center rounded-lg ${sidebar
                    ? "w-screen  transition-[width]  ease-linear duration-1000"
                    : " w-full transition-[width]  ease-linear duration-1000"
                    }`}>
                    <div className='grid grid-cols-2 relative p-8 gap-7 h-auto'>
                        <div className='flex flex-col gap-2'>
                            <label className=' font-roboto font-bold '>First Name</label>
                            <Input
                                type="email"
                                size='lg'
                                placeholder="First Name"
                                className="w-1/2 !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{ className: "min-w-[100px]" }}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className=' font-roboto font-bold '>Last Name</label>
                            <Input
                                type="text"
                                placeholder="Last Name"
                                size='lg'
                                className="w-1/2 !border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                                labelProps={{
                                    className: "hidden",
                                }}
                                containerProps={{ className: "min-w-[100px]" }}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className=' font-roboto font-bold '>Country Name</label>
                            <Select
                                label="Select Country"
                                size='lg'
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                            >

                                {countries.map((country, index) => {
                                    return (
                                        <Option key={index}>{country.name}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className=' font-roboto font-bold '>City</label>
                            <Select
                                label="Select City"
                                size='lg'
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                            >
                                {countries.map((country, index) => {
                                    return (
                                        <Option key={index}>{country.name}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-8'>
                        <label className=' font-roboto font-bold '>Email</label>
                        <Input
                            type="email"
                            placeholder="Email Address"
                            size='lg'
                            className="w-3/4 h-full !border !border-blue-gray-200 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                            labelProps={{
                                className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                        />
                    </div>
                    <div className='flex flex-row gap-4 p-8 items-end col-span-2 justify-end'>
                        <Button
                            color='gray'
                            size='lg'
                            variant='outlined'
                            ripple={true}
                            // onClick={() => nofication(product)}
                            className='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  text-center  dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 '
                        >
                            BACK</Button>
                        <Button
                            color='brown'
                            size='lg'
                            variant='outlined'
                            ripple={true}
                            // onClick={() => nofication(product)}
                            className='transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300'
                        >
                            UPDATE</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountPage