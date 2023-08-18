import React from 'react'
import { Alert } from "@material-tailwind/react";

function ErrorAlert() {
    return (
        <div className='grid grid-cols-1 items-center justify-items-center'>
            <div className='w-[96]'>
                <Alert color="red" variant="gradient" className='text-xl font-inter font-bold'>
                    Sorry no products match your fillter search ... Clean the filter and try again
                </Alert>
            </div>
        </div>
    )
}


export default ErrorAlert