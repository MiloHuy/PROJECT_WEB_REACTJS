import React from "react";
import {
    Tooltip,
    Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { removeItemFromCart } from "../../features/Slices/CartSlice";
import empty_cart from '../../assets/images/cart_empty.png';
import { useNavigate } from "react-router-dom";
function Cart(props) {
    const { openModel, setOpen } = props
    const navigate = useNavigate()
    const handleToGoHome = () => {
        navigate("/")
    }
    const dispath = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    console.log("Cart: ", cart)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const handleToRemoveItem = (product) => {
        const action = removeItemFromCart(product)
        dispath(action)
    }

    return (
        // <div>
        //     {
        //         cart.length > 0 ?
        //             (<Dialog
        //                 className="border-0 outline-0"
        //                 open={openModel}
        //                 handler={setOpen}
        //                 animate={{
        //                     mount: { scale: 1, y: 0 },
        //                     unmount: { scale: 0.9, y: -100 },
        //                 }}
        //             >
        //                 <DialogHeader>Shopping Bag</DialogHeader>
        //                 <DialogBody divider className="flex flex-col justify-center items-start">
        //                     {cart.map((item, index) => {
        //                         return (
        //                             <div key={index}>
        //                                 <div className="grid grid-cols-3 py-4 gap-10">
        //                                     <div className="col-span-2">
        //                                         <img className='h-[125px] rounded-md' src={item.img} alt={item.name} />
        //                                         <div className="flex flex-col items-start">
        //                                             <h4 className="text-base font-inter text-black font-bold tracking-normal leading-none pt-2">{item.name}</h4>
        //                                         </div>
        //                                         <div className="max-w-xs">
        //                                             <p className="text-base font-inter text-black tracking-normal leading-none pt-2">
        //                                                 {item.text}
        //                                             </p>
        //                                         </div>
        //                                     </div>
        //                                     <div>
        //                                         <p className="text-sm font-inter text-black tracking-normal leading-none pt-2">
        //                                             Selected Size: {" "}
        //                                             <span className="ml-2">{item.size}</span>
        //                                         </p>
        //                                         <p className="text-sm font-inter text-black tracking-normal leading-none pt-2">
        //                                             Selected Color: {" "}
        //                                             <span className="ml-2 rounded-full px-2" style={{ backgroundColor: item.color }}>{item.color}</span>
        //                                         </p>
        //                                         <p className="text-sm font-inter text-black tracking-normal leading-none pt-2">
        //                                             Amount: {" "}
        //                                             <span className="ml-2">{item.amount}</span>
        //                                         </p>
        //                                         <p className="text-sm font-inter text-black tracking-normal leading-none pt-2">
        //                                             Single Item Price: {" "}
        //                                             <span className="ml-2">{item.price}</span>
        //                                         </p>
        //                                         <p className="text-sm font-inter text-black tracking-normal leading-none pt-2">
        //                                             Total price of items: {" "}
        //                                             <span className="ml-2">{item.totalPrice}</span>
        //                                         </p>
        //                                         <div className="pt-4">
        //                                             <Tooltip content='Remove from the Cart' placement="bottom">
        //                                                 <Button size="sm" color='red' ripple={true} variant="filled" onClick={() => handleToRemoveItem(item)}>Remove </Button>
        //                                             </Tooltip>
        //                                         </div>
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                         )
        //                     })}
        //                 </DialogBody>
        //                 <DialogFooter className="flex justify-start items-center">
        //                     <p className="text-sm font-inter text-black tracking-normal leading-none pt-2">
        //                         Total Price of All Product: {""} <span className="ml-2">{totalPrice}</span>
        //                     </p>
        //                 </DialogFooter>
        //             </Dialog>)
        //             : (<Dialog
        //                 className="border-0 outline-0"
        //                 open={openModel}
        //                 handler={setOpen}
        //                 animate={{
        //                     mount: { scale: 1, y: 0 },
        //                     unmount: { scale: 0.9, y: -100 },
        //                 }}
        //             >
        //                 <DialogHeader>Shopping Bag</DialogHeader>
        //                 <DialogBody divider>
        //                     <h1 className="text-2xl font-inter text-black font-bold tracking-normal leading-none">Your bag is empty</h1>
        //                     <p className="text-base font-inter text-black font-bold tracking-normal leading-none">Add some products</p>
        //                 </DialogBody>
        //                 <DialogFooter>

        //                 </DialogFooter>
        //             </Dialog>)
        //     }
        // </div>
        <div>
            {cart.length > 0 ?
                (
                    <div >
                        {cart.map((item, index) => {
                            return (
                                <div key={index} >
                                    <div>
                                        <h1 className='text-4xl text-center font-roboto font-bold tracking-normal leading-none py-4 uppercase '>This is my Cart</h1>
                                    </div>
                                    <div className='flex justify-center items-center py-10'>
                                        <div className='pl-44 grow-[2]'>
                                            <img
                                                className='h-[450px] rounded-lg drop-shadow-lg'
                                                src={item.img} alt={item.name} />
                                        </div>
                                        <div className='grow-[3]'>
                                            <div className='max-w-lg'>
                                                <h5 className='text-2xl font-roboto font-bold tracking-normal leading-none pb-4'>{item.name}</h5>
                                                <p className='text-base font-roboto font-bold tracking-wide leading-relaxed pb-4'>{item.text}</p>
                                                <div>
                                                    <p className="text-lg font-roboto text-black tracking-normal leading-none pt-2">
                                                        Selected Size: {" "}
                                                        <span className="ml-2">{item.size}</span>
                                                    </p>
                                                    <p className="text-lg font-roboto text-black tracking-normal leading-none pt-2">
                                                        Selected Color: {" "}
                                                        <span className="ml-2 rounded-full px-2" style={{ backgroundColor: item.color }}>{item.color}</span>
                                                    </p>
                                                    <p className="text-lg font-roboto text-black tracking-normal leading-none pt-2">
                                                        Amount: {" "}
                                                        <span className="ml-2">{item.amount}</span>
                                                    </p>
                                                    <p className="text-lg font-roboto text-black tracking-normal leading-none pt-2">
                                                        Single Item Price: {" "}
                                                        <span className="lg-2">{item.price}</span>
                                                    </p>
                                                    <p className="text-lg font-roboto text-black tracking-normal leading-none pt-2">
                                                        Total price of items: {" "}
                                                        <span className="ml-2">{item.totalPrice}</span>
                                                    </p>
                                                    <div className="pt-4 grid grid-cols-2 gap-10">
                                                        <Tooltip content='Remove from the Cart' placement="bottom">
                                                            <Button className='flex text-center items-center gap-3 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300' size="lg" color='red' ripple={true} variant="outlined" onClick={() => handleToRemoveItem(item)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                                Remove
                                                            </Button>
                                                        </Tooltip>
                                                        <Tooltip content='GO TO HOME TO SHOPPING' placement="bottom">
                                                            <Button className='flex text-center items-center gap-3 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300' size="lg" ripple={true} variant="outlined" onClick={() => handleToGoHome(item)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                                </svg>
                                                                Go Home To Shopping
                                                            </Button>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center p-12 gap-4 w-full h-screen">
                        <div className="relative flex items-start">
                            <h1 className='text-2xl font-inter text-center text-black font-bold tracking-normal leading-none'>Sorry</h1>
                        </div>
                        <div className="w-1/2 h-full relative border-4 border-sky-500 flex flex-col justify-center items-center rounded-lg drop-shadow-lg">
                            <div className='flex justify-center items-center pb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-full h-full  transition  hover:translate-x-12 duration-300 ease-in-out">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </div>
                            <div className="py-4">
                                <h1 className="text-2xl font-inter text-center text-black font-bold tracking-normal leading-none">Your bag is empty</h1>
                            </div>
                            <div>
                                <Button
                                    className="flex items-center gap-3 transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 text-black "
                                    variant='outlined'
                                    onClick={handleToGoHome}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                    Go Home To Shopping
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}
export default Cart