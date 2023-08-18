import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/Slices/CartSlice';

function ProductSectionItem(props) {
    const { id, img, name, text, size, color, price, totalPrice } = props
    const dispath = useDispatch()
    const defaultSize = size[0]
    const defaultColor = color[0]
    const handleAddToCart = () => {
        const item = {
            id: id,
            img: img,
            name: name,
            text: text,
            totalPrice: totalPrice,
            size: defaultSize,
            amount: 1,
            color: defaultColor,
            price: price,
        }
        const action = addToCart(item)
        dispath(action)
    }
    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-96">
                <img className="object-center hover:object-top hover:scale-125 transition duration-700 ease-in-out" src={img} alt='img-blur-shadow' />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {text}
                </Typography>
                <div className='flex justify-between items-center'>
                    <Typography color="gray" className="font-medium" textGradient>
                        Size left: {defaultSize}
                    </Typography>
                    <Typography color="gray" className="font-medium" textGradient>
                        Color: <span className="px-2 rounded-full ml-2" style={{ backgroundColor: { defaultColor } }}></span>
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                <Tooltip content="Add to Cart" placement='bottom'>
                    <Button
                        size='lg' color='gray' variant='outlined' ripple={true}
                        onClick={handleAddToCart}
                    >Add to Cart</Button>
                </Tooltip>
            </CardFooter>
        </Card>
    )
}

export default ProductSectionItem