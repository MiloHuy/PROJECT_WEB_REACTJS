import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import ProductCard from '../ProductCard'
import {
    Button, Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from '@material-tailwind/react'
import ErrorAlert from '../Error'
import { filerGender, filterByColor, filterBySize, filterProducts, sortByPrice } from '../../features/Slices/FilterProduct'

function FilterProduct() {
    const dispath = useDispatch()
    const products = useSelector(state => state.products.filteredProducts)
    const error = useSelector(state => state.products.error)
    console.log("Error: ", error)
    // console.log("Product: ", products)
    const { type } = useParams()
    console.log("Type of param: ", type)
    const genderButton = ['male', 'female']
    const sizeSelect = ["S", "M", "L", "XL", "36", "38", "40", "42", "44", "46"]
    const colors = [
        "gray",
        "brown",
        "orange",
        "yellow",
        "lime",
        "green",
        "teal",
        "cyan",
        "blue",
        "indigo",
        "purple",
        "pink",
        "red"]
    const handleFilterGenders = (gender) => {
        const action = filerGender(gender)
        dispath(action)
    }
    const handleSortPriceMax = () => {
        const action = sortByPrice()
        dispath(action)
    }
    const handleFilterColor = (color) => {
        const action = filterByColor(color)
        dispath(action)
    }
    const handleFilterSize = (size) => {
        const action = filterBySize(size)
        dispath(action)
    }
    const handleClearFilter = (e) => {
        const action = filterProducts(e)
        dispath(action)
    }
    return (
        <div>
            <div className='pt-16'>
                <div className='pl-14'>
                    <h1 className='text-4xl font-inter text-gray-600 font-bold tracking-normal leading-none'>{type}</h1>
                    <div className='flex items-center justify-between py-8'>
                        <div className='flex items-ceter'>
                            {genderButton.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Button
                                            color='gray'
                                            size='lg'
                                            variant='outlined'
                                            ripple='true'
                                            className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                            onClick={() => handleFilterGenders(item)}
                                        >
                                            {item}
                                        </Button>
                                    </div>
                                )
                            })}
                            <Button
                                color='gray'
                                size='lg'
                                variant='outlined'
                                ripple='true'
                                className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                onClick={handleSortPriceMax}
                            >
                                High Price
                            </Button>
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        color='gray' size='lg' variant='outlined' ripple='true' className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'>Select Color</Button>
                                </MenuHandler>
                                <MenuList className='flex flex-col gap-2 '>
                                    {colors.map((color, index) => {
                                        return (
                                            <MenuItem
                                                className='text-black text-center font-inter'
                                                style={{ backgroundColor: color }}
                                                key={index}
                                                onClick={() => handleFilterColor(color)}
                                            >
                                                {color}
                                            </MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        color='gray'
                                        size='lg'
                                        variant='outlined'
                                        ripple='true'
                                        className='text-black hover:bg-gray-300 duration-300 ease-in-out mr-4'
                                    >
                                        Select Size
                                    </Button>
                                </MenuHandler>
                                <MenuList className='flex flex-col gap-2 '>
                                    {sizeSelect.map((size, index) => {
                                        return (
                                            <MenuItem
                                                className='text-black text-center font-inter'
                                                key={index}
                                                onClick={() => handleFilterSize(size)}
                                            >
                                                {size}
                                                <hr className="my-2 border-blue-gray-100" />
                                            </MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                        </div>
                        <div className='pr-14'>
                            <Button
                                color='gray'
                                size='lg'
                                variant='outlined'
                                ripple='true'
                                className='text-black hover:bg-gray-300 duration-300 ease-in-out'
                                onClick={() => handleClearFilter(type)}
                            >
                                Clear Filter
                            </Button>
                        </div>
                    </div>
                    {error ? <ErrorAlert /> : (
                        <div className='grid grid-cols-4 justify-center py-8 gap-12'>
                            {products.filter((product) => product.type === type).map((product, index) => {
                                return (
                                    <div key={index}>
                                        <ProductCard
                                            id={product.id}
                                            img={product.img}
                                            name={product.name}
                                            text={product.text}
                                            type={product.type}
                                            size={product.size}
                                            color={product.color}
                                            gender={product.gender}
                                            price={product.price}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    )}

                </div>
            </div>
        </div >
    )
}

export default FilterProduct