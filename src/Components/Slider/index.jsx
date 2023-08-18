import React from 'react'
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { dotSlides, nextSlide, prevSlide } from '../../features/Slices/SliceSlider';
import { dataSlider } from '../../assets/data'
function Silder() {
    const slideIndex = useSelector(state => state.slider.value)
    const dispath = useDispatch()
    console.log("Slider Index: ", slideIndex)
    const handleNextSlider = (e) => {
        e.preventDefault()
        const slide = slideIndex + 1
        const action = nextSlide(slide)
        dispath(action)
    }
    const handlePrevSlider = (e) => {
        e.preventDefault()
        const slide = slideIndex - 1
        const action = prevSlide(slide)
        dispath(action)
    }
    const handleMoveDotSlider = (value) => {
        const action = dotSlides(value)
        dispath(action)
    }
    return (
        <div className="relative pb-4 py-4">
            <div>
                {dataSlider.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={
                                parseInt(item.id) === slideIndex
                                    ? "opacity-100 duration-700 ease-in-out scale-100"
                                    : "opacity-0 duration-700 ease-in-out scale-95"
                            }
                        >
                            <div>
                                {parseInt(item.id) === slideIndex && (
                                    <img
                                        className="h-[850px] w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                                        src={item.img}
                                        alt="shoes"
                                    ></img>
                                )}
                            </div>
                            <div className="absolute top-44 mx-auto inset-x-1/4">
                                <p className="text-white text-4xl font-inter font-bold tracking-normal leading-none">
                                    {parseInt(item.id) === slideIndex && item.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex absolute bottom-12  left-[45%]">
                {dataSlider.map((dot, index) => {
                    return (
                        <div className="mr-4" key={dot.id}>
                            <div
                                className={
                                    index === slideIndex
                                        ? "bg-green-300 rounded-full p-2 cursor-pointer"
                                        : "bg-white rounded-full p-2 cursor-pointer"
                                }
                                onClick={() => handleMoveDotSlider(index)}
                            ></div>
                        </div>
                    );
                })}
            </div>
            <div>
                <button
                    className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
                    onClick={handleNextSlider}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
                <button
                    className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
                    onClick={handlePrevSlider}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Silder