import React, { useState } from 'react'
import person from '../../assets/images/person.jpg'
import {
    Button,
    Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
    const navigate = useNavigate()
    const handleToBack = () => {
        navigate(-1)
    }
    return (
        <div className='w-full h-screen flex justify-center mt-4'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-6 rounded-lg border-2 border-sky-500'>
                <div className='relative w-full flex justify-center '>
                    <img src={person} alt="" className='w-[100px] h-[100px] rounded-full border-2 border-sky-500 object-cover object-center' />
                </div>
                <div className='relative'>
                    <Typography variant="h4" className='flex flex-row'>Hi,I'm MiLoHuy
                        <span className='items-center justify-center flex hover:-translate-y-2 duration-200' >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
                            </svg>
                        </span>
                    </Typography>
                </div>
                <div className='relative'>
                    <div className='grid grid-cols-2 gap-8 mx-auto justify-center items-center'>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='items-center justify-center flex mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                            </span>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                Name:
                            </Typography>
                        </div>
                        <div className='relative w-full justify-center flex'>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                MiLoHuy
                            </Typography>
                        </div>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='items-center justify-center flex mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                Email:
                            </Typography>
                        </div>
                        <div className='relative w-full justify-center flex'>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                abc@gmail.com
                            </Typography>
                        </div>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='items-center justify-center flex mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                Location:
                            </Typography>
                        </div>
                        <div className='relative w-full justify-center flex'>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                Thu Duc, HCM City
                            </Typography>
                        </div>
                        <div className='flex flex-row w-full justify-center'>
                            <span className='items-center justify-center flex mr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                            </span>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                Phone:
                            </Typography>
                        </div>
                        <div className='relative w-full justify-center flex'>
                            <Typography variant="h4" className='font-medium font-roboto '>
                                09123123123
                            </Typography>
                        </div>
                    </div>
                </div>
                <Button className="flex items-center gap-3 bg-blue-gray-500 " size='md' color='blue-gray'>
                    <span className='transition hover:animate-ping duration-100' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    Contact with me!!!
                </Button>
                <Button
                    className="flex items-center gap-3 bg-blue-gray-500 "
                    size='md'
                    color='blue-gray'
                    onClick={handleToBack}
                >
                    <span className='transition hover:-translate-x-4 duration-700' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    Go Back
                </Button>
            </div >

        </div >

    )
}
export default ProfilePage