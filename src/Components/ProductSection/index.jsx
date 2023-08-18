import React from 'react'
import { storeData } from '../../assets/data/index'
import ProductSectionItem from '../ProductSectionItems'

function ProductSection() {
    return (
        <div>
            <div className='p-2 w-[50%] mx-auto rounded-md'>
                <h2 className='text-center text-lg font-inter font-bold tracking-normal leading-none'>SUMMER T-SHIRT SALE 30%</h2>
            </div>
            <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto'>
                {storeData.slice(0, 6).map((product, index) => {
                    return (
                        <div key={index}>
                            <ProductSectionItem
                                id={product.id}
                                img={product.img}
                                name={product.name}
                                text={product.text}
                                totalPrice={product.totalPrice}
                                size={product.size}
                                color={product.color}
                                price={product.price} />
                        </div>
                    )

                })}
            </div>
            <div className='p-2 w-[50%] mx-auto rounded-md'>
                <h2 className='text-center text-lg font-inter font-bold tracking-normal leading-none'>HOODIES BEAUTY</h2>
            </div>
            <div className='grid grid-cols-3 justify-items-center py-8 gap-2 mx-auto'>
                {storeData.slice(8, 14).map((product, index) => {
                    return (
                        <div key={index}>
                            <ProductSectionItem
                                id={product.id}
                                img={product.img}
                                name={product.name}
                                text={product.text}
                                totalPrice={product.totalPrice}
                                size={product.size}
                                color={product.color}
                                price={product.price} />
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default ProductSection