import { Option, Select, Tooltip, Button, Typography, Alert } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addToCart } from '../../features/Slices/CartSlice'
function SingleProduct() {
    const products = useSelector(state => state.products.singleProdct)
    const productSize = products[0].size ? products[0].size[0] : 40
    const productColor = products[0].color ? products[0].color[0] : null
    const navigate = useNavigate()
    const [size, setSize] = useState(productSize)
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(productColor)
    const dispath = useDispatch()
    console.log("Size: ", size)
    const param = useParams()
    console.log("Param", { param })
    const nofication = (product) => {
        setOpen(true)
        setTimeout(() => handleAddtoCardClick(product), 2000)
    }
    const handleChangeSize = (size) => {
        setSize(size)
    }
    const handleChangeColor = (color) => {
        setColor(color)
    }
    const handleAddtoCardClick = (product) => {
        const cart = {
            id: product.id,
            name: product.name,
            img: product.img,
            text: product.text,
            amount: 1,
            totalPrice: product.price,
            size: size,
            color: color,
            price: product.price,
        }
        const action = addToCart(cart)
        dispath(action)
        navigate('/')
    }
    console.log("One Product", products)
    return (
        <div>
            {products.filter((product) => product.id === param.id).map((product, index) => {
                return (
                    <div key={index} className='flex justify-center items-center py-10'>
                        <div className='pl-44 grow-[2]'>
                            <img
                                className='h-[850px] rounded-lg drop-shadow-lg'
                                src={product.img} alt={product.name} />
                        </div>
                        <div className='grow-[3]'>
                            <div className='max-w-lg'>
                                <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>{product.name}</h5>
                                <p className='text-orange-700 text-2xl font-inter font-bold tracking-normal leading-none pb-4'>15% OFF</p>
                                <p className='text-gray-700 text-2xl font-inter font-bold tracking-normal leading-none pb-4' >{product.text}</p>
                                <div className='pb-4 '>
                                    {product.size ?
                                        (<Select
                                            id="selectSize"
                                            name='selectSize'
                                            onChange={handleChangeSize}
                                            className="text-2xl" size="lg"
                                            label="Pick a Size"
                                            animate={{
                                                mount: { y: 0 },
                                                unmount: { y: 25 },
                                            }}
                                            color="teal"
                                        >
                                            {
                                                product.size.map((size, index) => {
                                                    return (
                                                        <Option key={index} value={size}>{size}</Option>
                                                    )
                                                })
                                            }
                                        </Select>) :
                                        (<Select
                                            id="selectSize"
                                            name='selectSize'
                                            className="text-2xl"
                                            size="lg"
                                            label="Pick a Size"
                                            disabled={true}
                                            animate={{
                                                mount: { y: 0 },
                                                unmount: { y: 25 },
                                            }}
                                            color="teal"
                                        >
                                            {
                                                product.size.map((size, index) => {
                                                    return (
                                                        <Option key={index} >{size}</Option>
                                                    )
                                                })
                                            }
                                        </Select>)}
                                </div>
                                <div className='pb-4 '>
                                    {product.color ?
                                        (<Select
                                            id="selectColor"
                                            name='selectColor'
                                            onChange={handleChangeColor}
                                            className="text-2xl" size="lg"
                                            label="Pick a Color"
                                            animate={{
                                                mount: { y: 0 },
                                                unmount: { y: 25 },
                                            }}
                                            color="teal"
                                        >
                                            {
                                                product.color.map((color, index) => {
                                                    return (
                                                        <Option key={index} value={color}>{color}</Option>
                                                    )
                                                })
                                            }
                                        </Select>) : (<Select
                                            id="selectColor"
                                            name='selectColor'
                                            className="text-1xl" size="lg"
                                            label="Pick a Color"
                                            disabled={true}
                                            animate={{
                                                mount: { y: 0 },
                                                unmount: { y: 25 },
                                            }}
                                            color="teal"
                                        >
                                            {
                                                product.color.map((color, index) => {
                                                    return (
                                                        <Option key={index} value={color}>{color}</Option>
                                                    )
                                                })
                                            }
                                        </Select>)}
                                </div>
                            </div>
                            <div className='pb-4 '>
                                <Tooltip placement="right" content="ADD TO CARD" animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0, y: 25 },
                                }}>
                                    <Button
                                        color={color}
                                        size='lg'
                                        variant='outlined'
                                        ripple={true}
                                        onClick={() => nofication(product)}
                                        className='transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300'
                                    >
                                        ADD TO CARD</Button>
                                </Tooltip>
                            </div>
                            <div className='pb-4 '>
                                <Alert
                                    open={open}
                                    color="green"
                                    className="max-w-screen-md"
                                    onClose={() => setOpen(false)}
                                >
                                    <Typography variant="h5" color="white">
                                        Success
                                    </Typography>
                                    <Typography color="white" className="mt-2 font-normal">
                                        Add to cart sucessfull!!!
                                    </Typography>
                                </Alert>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div >
    )
}

export default SingleProduct