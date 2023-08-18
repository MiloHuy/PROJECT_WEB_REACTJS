import React from 'react'
import { useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { singleProduct } from '../../features/Slices/FilterProduct';

function ProductCard(props) {
    const dispath = useDispatch()
    const { type } = useParams()
    const handleOneProduct = (id) => {
        const action = singleProduct(id)
        dispath(action)
    }

    const { id, img, name, text, color, price } = props

    return (
        <Link to={`/filterProducts/${type}/` + id}>
            <Card className="w-96" onClick={() => handleOneProduct(id)}>
                <CardHeader color="blue-gray" className="relative h-[400px]">
                    <img className="object-center hover:object-top hover:scale-125 transition duration-700 ease-in-out" src={img} alt='img-blur-shadow' />
                </CardHeader>
                <CardBody className='text-center'>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {name}
                    </Typography>
                    <Typography>
                        {text}
                    </Typography>
                </CardBody>
                <CardFooter divider className="flex items-center justify-between py-3">
                    <Typography variant="small" >
                        {price}$
                    </Typography>
                    <Typography variant="small" color="blue-gray" className="flex gap-1">
                        {color.map((color, index) => {
                            return (
                                <i
                                    className='fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4'
                                    key={index}
                                    style={{ backgroundColor: color }}
                                />
                            )
                        })}
                    </Typography>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ProductCard