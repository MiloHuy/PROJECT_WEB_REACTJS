import React from 'react'
import { Button } from "@material-tailwind/react";
import clothes from '../assets/images/clothes.jpg'
import { useDispatch } from "react-redux"
import { filterProducts } from '../features/Slices/FilterProduct';
import { Link } from 'react-router-dom';

function NavBarButton() {
    const buttons = ['Hoodies', 'Dresses', 'Suits', 'Shoes', 'T-Shirts', 'Jeans', "Jackets", "Bags"]
    const dispath = useDispatch()
    const handleFilterProducts = (button) => {
        const action = filterProducts(button)
        dispath(action)
    }
    return (
        <div>
            <div className='flex items-center justify-center py-8'>
                {buttons.map((button, index) => {
                    return (
                        <div key={index} className='mr-4'>
                            <Link to={"/filterProducts/" + button}>
                                <Button color="green" size="lg" variant="outlined" ripple={true}
                                    className='text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 font-bold'
                                    onClick={() => handleFilterProducts(button)}
                                >{button}</Button>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className='p-2 w-[55%] mx-auto rounded-md'>
                <h3 className='text-black text-center text-lg font-inter font-bold tracking-normal leading-none'>SALES UP TO 50%</h3>
            </div>
            <div className='flex justify-center align-middle py-4'>
                <img className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt="clothes" />
            </div>
        </div >
    )
}

export default NavBarButton